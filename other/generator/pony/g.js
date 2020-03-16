//Returning on Behalf of a Generator

/*
Usually not as interesting in asynchronous control flow mechanisms in general, the g.return() method allows you to resume execution inside a generator function, much like g.throw() did moments earlier. The key difference is that g.return() won¡¯t result in an exception at the generator level, although it will end the sequence.
*/

function* numbers () {
  yield 1
  yield 2
  yield 3
}
var g = numbers()
console.log(g.next())
// <- { done: false, value: 1 }
console.log(g.return())
// <- { done: true }
console.log(g.next())
// <- { done: true }, as we know


function* _numbers () {
  yield 1
  yield 2
  return 3
  yield 4
}
console.log([..._numbers()])
// <- [1, 2]
console.log(Array.from(_numbers()))
// <- [1, 2]
for (let n of _numbers()) {
  console.log(n)
  // <- 1
  // <- 2
}
var _g = _numbers()
console.log(_g.next())
// <- { done: false, value: 1 }
console.log(_g.next())
// <- { done: false, value: 2 }
console.log(_g.next())
// <- { done: true, value: 3 }
console.log(_g.next())
// <- { done: true }


function* numbers2 () {
  yield 1
  yield 2
  return 3
  yield 4
}
var g2 = numbers2()
console.log(g2.next())
// <- { done: false, value: 1 }
console.log(g2.return(5))
// <- { done: true, value: 5 }
console.log(g2.next())
// <- { done: true }



function* numbers3 () {
  yield 1
  try {
    yield 2
  } finally {
    yield 3
    yield 4
  }
  yield 5
}
var g3 = numbers3()
console.log(g3.next())
// <- { done: false, value: 1 }
console.log(g3.next())
// <- { done: false, value: 2 }
console.log(g3.return(6))
// <- { done: false, value: 3 }
console.log(g3.next())
// <- { done: false, value: 4 }
console.log(g3.next())
// <- { done: true, value: 6 }
