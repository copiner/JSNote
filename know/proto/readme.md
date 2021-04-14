### Object
所有普通的[[Prototype]]源头都会指向Object.prototype.这个Object.prototype对象包含
Javascript中许多通用的功能，比如toString()、valueOf()、hasOwnPrototype()以及
isPrototypeOf等等


Bar.prototype = Object.create(Foo.prototype)

### ES6

Object.setPrototypeOf(Bar.prototype, Foo.prototype)