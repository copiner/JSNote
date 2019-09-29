
### Boolean类型
Boolean类型与布尔值对应的引用类型。要创建Boolean对象，可以像下面这样调用Boolean构造函数
并传入true或false值
var booleanObject = new Boolean(true);
Boolean类型的实例重写了valueOf()方法，返回基本类型值true或false;重写了toString()方法
返回字符串"true"和"false",可是，Boolean对象在ECMAScript中用处不大，因为它经常造成人们的误解。
其中最常见的问题就是在布尔表达式中使用Boolean,例如：
```javascript
var falseObject = new Boolean(false);
var result = falseObject && true;
console.log(result)//true

var falseValue = false;
result = falseValue && true;
console.log(result)
```
在这个例中，我们使用false值创建了一个Boolean对象。然后，将这个对象与基本类型值true构成
逻辑与表达式。在布尔运算中，false && true等于 false。可是，示例中的这行代码是对
falseObject而不是对它的值（false）进行求值。前面讨论过，布尔表达式中的所有对象都会被转换为true
因此falseObject对象在布尔表达式中代表的是true。结果，true && true等于true了

基本类型与引用类型的布尔值还有两个区别：

首先，typeof操作符对基本类型返回boolean,而对引用类型返回object。

其次，由于Boolean对象是Boolean类型的实例，所以使用instanceof操作符测试Boolean对象会返回true,
而测试基本类型的布尔值则返回false。例如：
```javascript
console.log(typeof falseObject);//object
console.log(typeof falseValue);//boolean

console.log(falseObject instanceof Boolean);//true
console.log(falseValue instanceof Boolean);//false
```
### Number类型
Number是与数字值对应的引用类型。要创建Number对象，可以在调用Number构造函数时向其中传递相应的数值。
```javascript
var numberObject = new Number(10);
```
与Boolean类型一样，Number类型也重写了valueOf()、toLocalString()、toString()方法。
重写后的valueOf()方法返回对象表示的基本类型的数值，另外两个方法则返回字符串形式的数值。

可以为toString()方法传递一个表示基数的参数，告诉它返回几进制数值的`字符串形式`
```javascript
var num = 10;

console.log(num.toString());//'10'
console.log(num.toString(2));//'1010'
console.log(num.toString(8));//'12'
console.log(num.toString(10));//'10'
console.log(num.toString(16));//'a'
```

除了继承的方法之外，Number类型还提供了一些用于将数值格式化为字符串的方法。其中，toFixed()方法
会按照指定的小数位返回数值的`字符串表示`。例如
```javascript
var num = 10;
console.log(num.toFixed(2));//'10.00'
```
这里给toFixed()方法传入了数值2，意思是显示几位小数。于是，这个方法返回了"10.00".即以0填补了
必要的小数位。如果数值本身包含的小数位比指定的还多，那么接近指定的最大小数位的值就会舍入，例如
```javascript
var num = 10.005;
console.log(num.toFixed(2));//"10.01"
```
能够自动舍入的特性，使得toFixed()方法很适合处理货币值。但需要注意的是，不同浏览器给这个方法设定的
舍入规则可能会有所不同。在给toFixed()传入0的情况下，IE8及以前版本不能正确舍入范围在
{[-0.94,-0.5],[0.5,0.94]}之间的值。对于这个范围内的值，IE会返回0，而不是-1或者1；其他浏览器都能
返回正确的值，IE9修复了这个问题。

toFixed()方法可以表示带有0到20个小数位的数值。但这只是标准实现的范围，有些浏览器也可能支持更多位数。

另外可用于格式化数值的方法是toExponential(),该方法返回以指数表示法表示的数值的字符串形式。
与toFixed()一样，toExponential()也接收一个参数，而且该参数同样也是指定输出结果中小数位数。
```javascript
var num = 10;
console.log(num.toExponential(1));//"1.0e+1"
```

还有toPrecision()方法，对一个数值来说，toPrecision()方法可能会返回固定大小(fixed)格式，
也可能返回指数(exponential)格式；具体规则是看哪种格式最合适。这个方法接收一个参数，即表示数值的所有数字
位数(不包含指数部分)。例如
```javascript
var num = 99;
console.log(num.toPrecision(1));//"1e+2"
console.log(num.toPrecision(2));//"99"
console.log(num.toPrecision(3));//"99.0"
```

以上代码首先完成的任务是以一位数来表示99，结果是"1e+2",即100。因为一位数无法准确地表示99，因此
toPrecision()就将它向上舍入为100，这样就可以使用一位数来表示它。而接下来用两位数表示99，当然还是"99".
最后，在想以三位数表示99时，toPrecision()方法返回"99.0"。实际上，toPrecision()会根据需要处理的数值
决定是调用toFixed()还是调用toExponential()。而这三个方法都可以通过向上或向下舍入,做到以最准确的形式来
表示带有正确小数位的值。

与Boolean对象类似，Number对象也以后台方式为数值提供了重要功能。但于此同时，我们仍然不建议直接实例化
Number类型，而原因与显示创建Boolean对象一样。具体来讲，就是在使用typeof和instanceof操作符测试基本
类型和引用类型数值时，得到的结果完全不同，如
```javascript
var numberObject = new Number(10);
var numberValue = 10;

console.log(typeof numberObject);//'object'
console.log(typeof numberValue);//'number'

console.log(numberObject instanceof Number);//true
console.log(numberValue instanceof Number);//false
```
在使用typeof 操作府测试基本类型数值时，始终返回"number"，而在测试Number对象时，则返回"object"。
