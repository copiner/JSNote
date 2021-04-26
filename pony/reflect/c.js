
//Easier to mix new with Arbitrary Argument Lists

//Just like deleteProperty, there¡¯s a few other methods that make it easy to do other things too.


var proto = Dominus.prototype

Applied.prototype = proto

function Applied (args) {
  return Dominus.apply(this, args)
}
function apply (a) {
  return new Applied(a)
}

apply(['.foo', '.bar'])
apply.call(null, '.foo', '.bar')


//Luckily ES6 One of them is simply to use the spread operator.

//new Dominus(...args)

//Another alternative is to go the Reflect route.

//Reflect.construct(Dominus, args)

//Both of these are tremendously simpler than what I had to do in the dominus codebase.
