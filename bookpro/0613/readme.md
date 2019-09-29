

### 基本数据类型: Undefined、Null、Boolean、Number和String

### 引用数据类型：Object、Array、Function

### 基本包装类型：

为了便于操作基本类型值ECAMScript还提供了3个特殊的引用类型：Boolean、Number、String

这些类型与其他引用类型相似、但同时也具有与各自的基本类型相应的特殊行为。

```javascript
var s1 = 'some text';
var s2 = s1.substring(2);
```

这个例子中的变量s1,包含一个字符串，字符串当然是基本类型值。而下一行调用了s1的substring()方法，
并将返回的结果保存在了s2中。

我们知道，基本类型值不是对象，因而从逻辑上讲它们不应该有方法（尽管如我们所愿，它们确实有方法）。

其实，为了我们实现这种直观的操作，后台已经自动完成了一系列处理。
当第二行代码访问s1时，访问过程处于一种读取模式，也就是要从内存中读取这个字符串的值，
而`当读取模式中访问字符串时`，后台都会自动完成下列处理：

1、创建String类型的一个实例

2、在实例中调用指定的方法

3、销毁这个实例

可以将以上三个步骤想象成是执行了下列ECAMScript代码
```javascript
var s1 = new String("some text");
var s2 = s1.substring(2);
s1 = null;
```
经过此番处理，基本的字符串值就变得跟对象一样了，
而且上面三个步骤也分别适用于Boolean和Number类型对应的布尔值和数字值

### 引用类型与基本包装类型的区别
引用类型与基本包装类型的主要区别就是对象的生存期。使用new操作符创建的引用类型的实例，
在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于
一行代码的执行瞬间，然后立即销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。

```javascript
var s1 = 'some text';
s1.color = 'red';
console.log(s1.color);//undefined
```
在此，第二行代码试图为字符串s1添加一个color属性，但是当第三行代码再次访问s1时，其color
属性不见了，问题的原因也就是第二行创建的string对象在执行第三行代码的时候已经销毁了。
第三行代码又创建自己的String对象，而该对象没有color属性。

### 可以显示地调用Boolean、Number、和String来创建基本包装类型的对象。
不过应该在绝对必要的情况下再这样做。因为这种做法很容易让人分不清自己是在处理基本类型还是引用类型的值

对基本包装类型的实例调用typeof 会返回Object，而且所有基本包装类型的对象都会被转换为布尔值true。

### Object构造函数
Object构造函数也会像工厂方法一样，根据传入值的类型返回相应的基本包装类型的实例
```javascript
var obj = new Object('some text');
console.log(obj instanceof String);//true
```
把字符串传给Object构造函数，就会创建String的实例；而传入数值参数就会得到Number的实例，
传入布尔值参数就会得到Boolean的实例。

#### 注意
使用new调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。
```javascript
var value = '25';
var number = Number(value);//转型函数
console.log(typeof number);//'number'

var obj = new Number(value);//转型函数
console.log(typeof obj);//'object'
```
在这个例中，变量number中保存的基本类型的值为25，而变量obj中保存的是Number的实例。

尽管我们不建议显示地创建基本包装类型的对象，但他们操作基本类型值的能力还是相当重要的。
而每个基本包装类型都提供了操作相应值的便捷方法
