//Function Application, The Right Way
/*
In ES5 if we want to call a method with an arbitrary number of arguments, we can use .apply passing a this context and our arguments.
*/

fn.apply(ctx, [1, 2, 3])

/*
If we fear fn might shadow apply with a property of their own, we can rely on a safer but way more verbose alternative.
*/
Function.prototype.apply.call(fn, ctx, [1, 2, 3])

/*
In ES6, you can use spread as an alternative to .apply for an arbitrary number of arguments.
*/

fn(...[1, 2, 3])

/*
That doesn¡¯t solve your problems when you need to define a this context, though. You could go back to the Function.prototype way but that¡¯s way too verbose. Here¡¯s how Reflect can help
*/

Reflect.apply(fn, ctx, args)

//Naturally, one of the most fitting use cases for Reflect API methods is default behavior in Proxy traps.
