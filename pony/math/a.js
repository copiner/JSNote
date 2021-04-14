
Math.sign(1)
// <- 1
Math.sign(0)
// <- 0
Math.sign(-0)
// <- -0
Math.sign(-30)
// <- -1
Math.sign(NaN)
// <- NaN
Math.sign('foo')
// <- NaN, because Number('foo') is NaN
Math.sign('0')
// <- 0, because Number('0') is 0
Math.sign('-1')
// <- -1, because Number('-1') is -1

console.log(Math.sign(1));
