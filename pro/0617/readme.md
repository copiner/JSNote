### String类型

String 类似是字符串的对象包装类型，可以使用String构造函数来创建
```javascript
var stringObject = new String("hello world");
```
String对象的方法也可以在所有基本的字符串值中访问到，其中，继承的valueOf()、
toLocaleString()、toString()方法都返回对象所表示的基本字符串值。

String类型的每个实例都有一个length属性，表示字符串包含多少个字符

String类型提供了很多方法,用于辅助完成对ECMAScript中字符串的解析和操作
#### 字符方法
charAt()和charCodeAt() : 用于访问字符串中特定字符。这两个方法都接收一个参数，
即基于0的字符串位置。其中，charAt()方法以单字符字符串的形式返回给定位置的那个字符。
charCodeAt()返回给定位置的那个字符的字符编码
```javascript
var stringValue = "hello world";
console.log(stringValue.charAt(1));//'e'

console.log(stringValue.charCode(1));//'101'
```
ECMAScript还定义了另一个访问个别字符的方法。在支持此方法的浏览器中，可以使用方括号加数字索引来访问字符串中的特定字符
```javascript
var stringValue = "hello world";
console.log(stringValue[1]);//'e'

```
#### 字符串操作方法
concat(),用于将一或多个字符串拼接起来，返回拼接得到的新字符串。
```javascript
var stringValue = "hello ";
var result = stringValue.concat("world");
console.log(result);//'hello world'
console.log(stringValue);//'hello'

```
实际上，concat()方法可以接受任意多个参数，也就是说可以通过它拼接任意多个字符串

```javascript
var stringValue = "hello";
var result = stringValue.concat("world","!");

console.log(result);//'hello world!'
console.log(stringValue);//'hello'
```
虽然concat()是专门用来拼接字符串的方法，但实践中使用更多的还是加法操作符(+)。

ECMAScript还提供了三个基于子字符串创建新字符串的方法：
slice()、substr()、substring()。

这三个方法都会返回被操作字符串的一个子字符串，而且也都会接收一或两个参数。第一个参数指定子字符串的开始位置，第二个参数表示子字符串到哪里结束。

具体来说，slice()和substring()的第二个参数指定的是子字符串最后一个字符后面的位置。
substr()的第二个参数指定的则是返回的字符个数。如果没有给这些方法传递第二个参数，则将字符串的长度作为结束位置。

与concat()方法一样，slice()、substr()、substring()也不会修改字符串本身的值，只是返回一个基本类型的字符串值，对原始字符串没有任何影响。

```javascript
var stringValue = "hello world";
console.log(stringValue.slice(3));//"lo world"
console.log(stringValue.substring(3));//"lo world"
console.log(stringValue.substr(3));//"lo world"

console.log(stringValue.slice(3,7)));//"lo w"
console.log(stringValue.substring(3,7));//"lo w"
console.log(stringValue.substr(3,7));//"lo worl"
```
在传递给这些方法的参数是负值的情况下，它们的行为就不尽相同了。其中，slice()方法会将传入的负值与字符串的长度相加，substr()方法将负的第一个参数加上字符串长度，而将负的第二个参数转换为0。最后，substring()方法会把所有负值参数都转换为0。
```javascript
var stringValue = "hello world";
console.log(stringValue.slice(-3));//"rld"
console.log(stringValue.substring(-3));//"hello world"
console.log(stringValue.substr(-3));//'rld'

console.log(stringValue.slice(3,-4));//"lo w"
console.log(stringValue.substring(3,-4));//"hel"
console.log(stringValue.substr(3,-4));//''
```
在给slice()和substr()传递一个负值参数时，他们的行为相同。这里-3会被转换为8，实际上相当于调用了slice(8)和substr(8)。但是substring()方法则返回了全部的字符串，因为她将-3转化成0

当第二个参数是负数时，这三个方法的行为各不相同。

slice()方法会把第二个参数转换为7，这就相当于调用了slice(3,7)

substring()方法会把第二个参数转换为0，使调用变成了substring(3,0),而这个方法会将较小的数作为开始位置，将较大的数作为结束位置，因此最终相当于调用了substring(0,3)。

substr()也会将第二个参数转换为0，这也就意味着返回包含零个字符的字符串，也就返回一个空字符串。

#### 字符串位置方法
indexOf()和lastIndexOf()。这两个方法都是从一个字符串中搜索给定的子字符串，然后返回子字符串的位置，如果没有找到该子字符串，则返回-1。

这两个方法的区别在于，indexOf()方法从字符串开头向后搜索子字符串，lastIndexOf()方法是从子字符串的末尾向前搜索子字符串。
```javascript
var stringValue = 'hello world';
console.log(stringValue.indexOf('o');//4
console.log(stringValue.lastIndexOf('o'));//7
```
这两个方法都可以接收可选的第二个参数，表示从字符串中的哪个位置开始搜索。换句话说，indexOf()会从该参数指定的位置向后搜索，忽略该位置之前的所有字符；而lastIndexOf()则会从指定的位置向前搜索，忽略该位置之后的所有字符
```javascript
var stringValue = 'hello world';
console.log(stringValue.indexOf('o',6);//7
console.log(stringValue.lastIndexOf('o',6));//4
```
在使用第二个参数的情况下，可以通过循环调用indexOf()或者lastIndexOf()来找到所有匹配的子字符串。
```javascript
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf('e');
while(pos > -1){
          positions.push(pos);
          pos = stringValue.indexOf('e',pos + 1);
}
console.log(positions);//"3,24,32,35,52"
```
#### trim()方法
ECMAScript为所有字符串定义了trim()方法。这个方法会创建一个字符串的副本，删除前置及后缀的所有空格。然后返回结果。
```javascript
var stringValue = '  hello world ';
var trimmedStringValue = stringValue.trim();
console.log(stringValue);
console.log(trimmedStringValue);
```
主流浏览器都支持该方法。一些浏览器还支持非标准的trimLeft()、trimRight()方法，分别用于删除字符串开头和末尾的空格

#### 字符串大小写转换方法
ECMAScript中涉及字符串大小写转换的方法有4个：
toLowerCase()、toLocaleLowerCase()、toUpperCase()、toLocaleUpperCase()。
```javascript
var stringValue = 'hello world';
console.log(stringValue.toLocalUpperCase());
console.log(stringValue.toUpperCase());

console.log(stringValue.toLocaleLowerCase());
console.log(stringValue.toLowerCase());
```
#### 字符串的模式匹配方法
String类型定义了几个用于在字符串中匹配的模式方法。
一、match()方法，在字符串上调用这个方法，本质上与调用RegExp的exec()方法相同。
match（）方法只接受一个参数，要么是一个正则表达式，要么是一个RegExp对象。
```javascript
var text = "cat,bat,sat,fat";
var pattern = /.at/;

//== pattern.exec(text)

var matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(pattern.lastIndex);
```
本例中的match()方法返回一个数组；如果调用RegExp对象的exec()方法并传递本例中的字符串作为参数，那么也会得到遇刺相同的数组；
数组的第一项是与整个模式匹配的字符串，之后的每一项（如果有）保存着与正则表达式中的捕获组匹配的字符串

二、serach()方法，这个方法的唯一参数与match()方法的参数相同；由字符串或RegExp对象指定的一个正则表达式。
search()方法返回字符串中第一个匹配项的索引；如果没有找到匹配项，则返回-1。而且，serach()方法始终是从字符串开头向后查找查找模式。
```javascript
var text = "cat,bat,sat,fat";
var pos= text.serach(/at/);
console.log(pos);//1
```
这个例中的search()方法返回1，即"at"在字符串中第一次出现的位置。

三、为了简化替换子字符串的操作，ECMAScript提供了replace()方法。

该方法接受两个参数；第一个参数可以是一个RegExp对象或者一个字符串（这个字符串不会被转换成正则表达式），第二个参数可以是一个字符串或者一个函数。如果第一个参数是字符串，那么只会替换第一个字符串。要想替换所有子字符串，唯一的办法就是提供一个正则表达式，而且要指定全局（g)标志。
```javascript
var text = "cat,bat,sat,fat";
var result = text.replace('at','ond');
console.log(result);//"cond,bat,sat,fat"

result = text.replace(/at/g,'ond');
console.log(result);//"cond,bond,dond,fond"
```
在这个例中，首先传入replace()方法的是字符串"at"和替换用的字符串"ond"。替换的结果是把"cat"变为了"cond",但字符串中的其他字符没有受到影响。然后将第一个参数修改为带有全局标志的正则表达式。就将全部"at"都替换为了"ond"。

如果第二个参数是字符串