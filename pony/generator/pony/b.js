
function* generator(){
    yield 'p'
    console.log('o')
    yield 'n'
    console.log('y')
    yield 'f'
    console.log('o')
    yield 'o'
    console.log('!')
}

var foo = generator()
for(let pony of foo){
   console.log(pony);
}


console.log([...foo]);


