
function foo(x, y){
    return x + y;
}

function thunkify(fn){
    var args = [].slice.call(arguments, 1);

    return function(){
//        args.push(cb);
        return fn.apply(null, args);
    };
}

var fooThunk = thunkify(foo, 3, 4);

var sum = fooThunk()

console.log(sum);

function thunkify1(fn){

    return function(){
        var args = [].slice.call(arguments);
        return function(){
            return fn.apply(null, args);
        }
    };
}

var whatIsThis = thunkify1(foo);

var fooThunk1 = whatIsThis(3,5);

var sum1 = fooThunk1();

console.log(sum1);
