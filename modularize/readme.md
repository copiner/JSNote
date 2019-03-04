## modularize

### 1、CommonJs

CommonJS API定义很多普通应用程序（主要指非浏览器的应用）使用的API。它的目标是提供一个类似Python，Ruby和Java标准库。这样的话，开发者可以使用CommonJS API编写应用程序，然后这些应用可以运行在不同的JavaScript解释器和不同的主机环境中。

2009年，美国程序员Ryan Dahl创造了node.js项目，将javascript语言用于服务器端编程。这标志"Javascript模块化编程"正式诞生。因为老实说，在浏览器环境下，没有模块也不是特别大的问题，毕竟网页程序的复杂性有限；但是在服务器端，一定要有模块，与操作系统和其他应用程序互动，否则根本没法编程。NodeJS是CommonJS规范的实现，webpack 也是以CommonJS的形式来书写。


CommonJS定义的模块分为:{模块引用(require)} {模块定义(exports)} {模块标识(module)}

require()用来引入外部模块；exports对象用于导出当前模块的方法或变量，唯一的导出口；module对象就代表模块本身。


#### commonJS的原理以及简易实现：

```javascript
var math = require('math');

math.add(2, 3);
```

CommonJS规范不适用于浏览器环境,第二行math.add(2, 3)，在第一行require('math')之后运行，因此必须等math.js加载完成。也就是说，如果加载时间很长，整个应用就会停在那里等...因为 require 是同步的。

这对服务器端不是一个问题，因为所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。

浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量，module、exports、require、global；

只要能够提供这四个变量，浏览器就能加载 CommonJS 模块。
```javascript
var module = {
  exports: {}
};

(function(module, exports) {
  exports.multiply = function (n) { return n * 1000 };
}(module, module.exports))

var f = module.exports.multiply;
f(5) // 5000

```

### 2、AMD

基于commonJS规范的nodeJS出来以后，服务端的模块概念已经形成，很自然地，大家就想要客户端模块。

如CommonJS规范中所述，浏览器端的模块，不能采用"同步加载"（synchronous），（浏览器会卡死），只能采用"异步加载"（asynchronous）。这就是AMD规范诞生的背景。

CommonJS是主要为了JS在后端的表现制定的，他是不适合前端的，AMD(异步模块定义)出现了，它就主要为前端JS的表现制定规范。

AMD是"Asynchronous Module Definition"的缩写，意思就是"异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

AMD也采用require()语句加载模块，但是不同于CommonJS，它要求两个参数：
```javascript
require([module], callback);
```
第一个参数[module]，是一个数组，里面的成员就是要加载的模块；第二个参数callback，则是加载成功之后的回调函数。如果将前面的代码改写成AMD形式，就是下面这样：
```javascript
require(['math'], function (math) {
　math.add(2, 3);
});
```
math.add()与math模块加载不是同步的，浏览器不会发生假死。所以很显然，AMD比较适合浏览器环境。目前，主要有两个Javascript库实现了AMD规范：`require.js和curl.js`。

#### require.js
```javascript
<script src="js/require.js"></script>
<script src="js/require.js" defer async="true" ></script>
```

```javascript
js/main.js
js/require.js

<script src="js/require.js" data-main="js/main"></script>
```
data-main属性的作用是，指定网页程序的主模块。例中js目录下面的main.js，这个文件会第一个被require.js加载。由于require.js默认的文件后缀名是js，所以可以把main.js简写成main。

```javascript
main.js

require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){
  // some code here
});
```

require()函数接受两个参数。第一个参数是一个数组，表示所依赖的模块，上例就是['moduleA', 'moduleB', 'moduleC']，即主模块依赖这三个模块；第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块。

require()异步加载moduleA，moduleB和moduleC，浏览器不会失去响应；它指定的回调函数，只有前面的模块都加载成功后，才会运行，解决了依赖性的问题。

假定主模块依赖jquery、underscore和backbone这三个模块，main.js就可以这样写：
require.js会先加载jQuery、underscore和backbone，然后再运行回调函数。主模块的代码就写在回调函数中
```javascript
require(['jquery', 'underscore', 'backbone'], function ($, _, Backbone){
  // some code here
});
```

使用require.config()方法，我们可以对模块的加载行为进行自定义。require.config()就写在主模块（main.js）的头部。参数就是一个对象，这个对象的paths属性指定各个模块的加载路径。
```javascript
require.config({
  baseUrl: "js/lib",
  paths: {
    "jquery": "jquery.min",
    "underscore": "underscore.min",
    "backbone": "backbone.min"
  }
});
```
require.js要求，每个模块是一个单独的js文件。这样的话，如果加载多个模块，就会发出多次HTTP请求，会影响网页的加载速度。因此，require.js提供了一个优化工具，当模块部署完毕以后，可以用这个工具将多个模块合并在一个文件中，减少HTTP请求数。

#### AMD模块的写法
`require.js加载的模块，采用AMD规范。也就是说，模块必须按照AMD的规定来写`

具体来说，就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中。

示例：

```javascript
// math.js
define(function (){
  var add = function (x,y){
    return x+y;
  };
  return {
    add: add
  };
});

require(['math'], function (math){
  alert(math.add(1,1));
});
```
如果模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性
```javascript
define(['myLib'],function (myLib){
  function foo(){
    myLib.doSomething();
  }
  return {
    foo : foo
  };
});

```
加载非规范的模块，理论上，require.js加载的模块，必须是按照AMD规范、用define()函数定义的模块。但是实际上，虽然已经有一部分流行的函数库（比如jQuery）符合AMD规范，但是更多的库并不符合，加载非规范的模块也是可以的

这样的模块在用require()加载之前，要先用require.config()方法，定义它们的一些特征

举例来说，underscore和backbone这两个库，都没有采用AMD规范编写。如果要加载它们的话，必须先定义它们的特征。
```javascript
require.config({
  shim: {
    'underscore':{
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

```
require.config()接受一个配置对象，这个对象除了有前面说过的paths属性之外，还有一个shim属性，专门用来配置不兼容的模块。

具体来说，每个模块要定义

1、exports值（输出的变量名），表明这个模块外部调用时的名称；

2、deps数组，表明该模块的依赖性。

require.js还提供一系列插件，实现一些特定的功能

### CMD

CMD规范,与AMD相近，不过用起来感觉更加方便些,seajs，就是遵循CMD规范


### ES6 export import
ES6自带了模块化， 也是JS第一次支持module， 在很久以后 ，我们可以直接作用import和export在浏览器中导入和导出各个模块了， 一个js文件代表一个js模块；现代浏览器对模块(module)支持程度不同， 目前都是使用babelJS，把ES6代码转化为兼容ES5版本的js代码;

```javascript
//lib.js
//导出常量
export const sqrt = Math.sqrt;
//导出函数
export function square(x) {
    return x * x;
}
//导出函数
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//main.js
import { square, diag } from './lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```

import和export的基本语法：
```javascript
//lib.js 文件
let bar = "stringBar";
let foo = "stringFoo";
let fn0 = function() {
    console.log("fn0");
};
let fn1 = function() {
    console.log("fn1");
};
export{ bar , foo, fn0, fn1}

//main.js文件
import {bar,foo, fn0, fn1} from "./lib";
console.log(bar+"_"+foo);
fn0();
fn1();
```

```javascript
//lib.js文件
let fn0 = function() {
    console.log("fn0");
};
let obj0 = {}
export { fn0 as foo, obj0 as bar};

//main.js文件
import {foo, bar} from "./lib";
foo();
console.log(bar);
```

```javascript
//lib.js文件
export let foo = ()=> {console.log("fnFoo") ;return "foo"},bar = "stringBar";

//main.js文件
import {foo, bar} from "./lib";
console.log(foo());
console.log(bar);
```

```javascript
//这种导出的方式不需要知道变量的名字,相当于是匿名的,直接把开发的接口给export；
//如果一个js模块文件就只有一个功能， 那么就可以使用export default导出；
//lib.js
export default "string";

//main.js
import defaultString from "./lib";
console.log(defaultString);
```

```javascript
//lib.js
let fn = () => "string";
export {fn as default};

//main.js
import defaultFn from "./lib";
console.log(defaultFn());
```

```javascript
//lib.js
export * from "./other";
//如果只想导出部分接口， 只要把接口名字列出来
//export {foo,fnFoo} from "./other";

//other.js
export let foo = "stringFoo", fnFoo = function() {console.log("fnFoo")};

//main.js
import {foo, fnFoo} from "./lib";
console.log(foo);
console.log(fnFoo());
```

```javascript
import * as obj from "./lib";
console.log(obj);
```
#### ES6导入的模块都是属于引用
```javascript
//lib.js
export let counter = 3;
export function incCounter() {
    counter++;
}
export function setCounter(value) {
    counter = value;
}


//main.js
import { counter, incCounter ,setCounter} from './lib';

// The imported value `counter` is live
console.log(counter); // 3
incCounter();
console.log(counter); // 4
setCounter(0);
console.log(counter); // 0
```

#### 循环依赖的问题

循环依赖是JS模块化带来的问题， 在浏览器端， 使用RequireJS测试模块化， 比如有一个文件file0.js依赖于file1.js， 而file1.js又依赖于file0.js， 那么file0.js和file1.js到底谁先执行

```html
//index.html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="utf-8"/>
</head>
<body>

<script data-main="cyclic" src="//cdn.bootcss.com/require.js/2.2.0/require.min.js"></script>
<script>
//cyclic.js
require(["file0"], function(file0) {
    console.log(file0)
})

//file0.js
define(["file1"], function(file1) {
    console.log(file1)
    return {
        file0 : "file0"
    }
})

//file1.js
define(["file0"], function(file0) {
    console.log(file0);
    return {
        file1 : "file1"
    }
})

// output

// undefined
// Object { file1: "file1" }
// Object { file0: "file0" }
</script>
</body>
</html>



```
　　在执行file1.js的时候file0.js还没执行完， 所以输出了undefined， 这种输出结果和`NodeJS输出的情况`(NodeJS也存在循环依赖)是一样的；

使用ES6的模块， 只要每一个模块被引用， 无论模块是否执行完毕， 该模块的export已经被导出了。

导出的是函数
```javascript
//导出的是函数：
//cyclic.js

import fn0 from "./file0";
fn0();

//file0.js
import fn1 from "./file1";
fn1();
console.log("file0.js runs");
export default function() {console.log("file0 export runs")}

//file1.js
import fn0 from "./file0";
fn0();
console.log("file1.js runs");
export default function() {console.log("file1 export runs")}
```
导出的是字符串
```javascript
//导出的是字符串
//cyclic.js
import str from "./file0";
console.log(str);

//file0.js
import str1 from "./file1";
console.log(str1)
console.log("file0.js runs");
export default "str0";

//file1.js
import str0 from "./file0";
console.log(str0)
console.log("file1.js runs");
export default "str1";
```

如果导出的是对象，那么第一行会先输出一个初始值{},在最后等待file0.js和file1.js执行完毕以后， 才输出file0.js导出的对象；

如果是数组，那么第一行会输出一个被静态分析过的初始值undefined,在最后等待file0.js和file1.js执行完毕以后， 才输出file0.js导出的对象；

如果是布尔值，那么第一行会输出一个被静态分析过的初始值undefined,在最后等待file0.js和file1.js执行完毕以后， 才输出file0.js导出的布尔值；
