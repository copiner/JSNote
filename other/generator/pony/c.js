/*
A neat aspect of generator functions is that you can also use yield* to delegate to another generator function. Want a very contrived way to split 'ponyfoo' into individual characters? Since strings in ES6 adhere to the iterable protocol, you could do the following
*/

function* generator(){
    yield* 'ponyfoo'
}

console.log([...generator()]);
//['p', 'o', 'n', 'y', 'f', 'o', 'o']

var str = 'ponyfoo';
console.log([...str]);
//['p', 'o', 'n', 'y', 'f', 'o', 'o']

/*
Of course, in the real world you could just do [...'ponyfoo'], since spread supports iterables just fine. Just like you could yield* a string, you can yield* anything that adheres to the iterable protocol. That includes other generators, arrays, and come ES6 ¨C just about anything.
*/

var foo = {
    [Symbol.iterator]:()=>({
        items:['p','o','n','y','f','o','o'],
        next: function(){
            return {
                done: this.items.length === 0,
                value: this.items.shift()
            }
        }
    })
}

function* multiplier(value){
    yield value*2
    yield value*3 
    yield value*4 
    yield value*5   
}

function* trailmix(){
    yield 0
    yield* [1,2]
    yield* [...multiplier(2)]
    yield* multiplier(3)
    yield* foo
}

console.log([...trailmix()]);
