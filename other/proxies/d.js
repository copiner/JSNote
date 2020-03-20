
//Schema Validation with Proxies

/*
While, yes, you could set up schema validation on the target object itself, doing it on a Proxy means that you separate the validation concerns from the target object

In the example below, person is a plain model object, and we¡¯ve also defined a validator object with a set trap that will be used as the handler for a proxy validator of people models. As long as the person properties are set through proxy, the model invariants will be satisfied according to our validation rules
*/

var validator = {
    set(target, key, value){
        if(key === 'age'){
            if(typeof value != 'number' || Number.isNaN(value)){
                throw new TypeError('Age must be a number');
            }
            if(value<=0){
                throw new TypeError("Age must be a positive number")
            }
        }
        return true
    }
}

var person = { age: 27 }
var proxy = new Proxy(person, validator)

//proxy.age = 'foo';

//proxy.age = NaN;

proxy.age = 0;

proxy.age = 28;

console.log(person.age);
