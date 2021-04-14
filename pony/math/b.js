
//truncate

Math.trunc(12.34567)
// <- 12
Math.trunc(-13.58)
// <- -13
Math.trunc(-0.1234)
// <- -0
Math.trunc(NaN)
// <- NaN
Math.trunc('foo')
// <- NaN, because Number('foo') is NaN
Math.trunc('123.456')
// <- 123, because Number('123.456') is 123.456

console.log(Math.trunc('123.456'));

//polyfill

Math.trunc = function truncate (value) {
  return value > 0 ? Math.floor(value) : Math.ceil(value)
}
