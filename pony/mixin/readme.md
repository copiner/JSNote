
在 JavaScript 中，我们只能继承单个对象。每个对象只能有一个 [[Prototype]] 原型。并且每个类只可以扩展另外一个类。

但是有些时候这种设定（译者注：单继承）会让人感到受限制。比如说我有一个 StreetSweeper 类和一个 Bicycle 类，现在我想要一个 StreetSweepingBicycle 类（译者注：实现两个父类的功能）。

或者，在谈论编程的时候，我们有一个实现模板的 Renderer 类和一个实现事件处理的 EventEmitter 类，现在想要把这两个功能合并到一个 Page 类上以使得一个页面可以同时使用模板和触发事件。

有一个概念可以帮助我们，叫做“mixins”。

根据维基百科的定义，mixin 是一个包含许多供其它类使用的方法的类，而且这个类不必是其它类的父类。

换句话说，一个 mixin 提供了许多实现具体行为的方法，但是我们不单独使用它，我们用它来将这些行为添加到其它类中。