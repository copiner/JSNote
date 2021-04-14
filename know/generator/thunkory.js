
function foo(x, y){
    return x + y;
}

function thunkify(fn){

    return function(){
        var args = [].slice.call(arguments);
        return function(){
            return fn.apply(null, args);
        }
    };
}

var whatIsThis = thunkify(foo);

var fooThunk1 = whatIsThis(3,5);
var fooThunk2 = whatIsThis(3,8);

var sum1 = fooThunk1();
var sum2 = fooThunk2();

console.log(sum1, sum2);
