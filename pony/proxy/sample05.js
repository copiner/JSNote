
var handlers = {
    get(target, key, context){
        return function(){
            context.speak(key + "!");
        }
    }
}

var catchall = new Proxy({}, handlers);
var greeter = {
    speak(who = "someone"){
        console.log("hello", who);
    }
}

Object.setPrototypeOf(greeter, catchall);

//greeter.speak();

//greeter.speak("world");

greeter.everyone();
