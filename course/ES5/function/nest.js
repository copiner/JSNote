
function outside() {
  var x = 5;
  function inside(x) {
    return x * 2;
  }
  return inside;
}

let a = outside()(10); // returns 20 instead of 10
console.log(a);
