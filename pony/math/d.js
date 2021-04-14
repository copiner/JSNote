
//Math.expm1

//The method below is a rough equivalent of Math.expm1.

function expm1 (value) {
  return Math.pow(Math.E, value) - 1
}

function expm1 (value) {
  return Math.exp(value) - 1
}


expm1(1e-20)
// <- 0
Math.expm1(1e-20)
// <- 1e-20
expm1(1e-10)
// <- 1.000000082740371e-10
Math.expm1(1e-10)
// <- 1.00000000005e-10
