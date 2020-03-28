function cast(){
    return Array.prototype.slice.call(arguments)
}

function scast(){
    return [].slice.call(arguments)
}

function rcast(){
    return [...arguments]
}

function fcast(){
    return Array.from(arguments)
}

console.log(cast('a','b'))//['a','b']
console.log(scast('a','b'))//['a','b']
console.log(rcast('a','b'))//['a','b']
console.log(fcast('a','b'))//['a','b']


