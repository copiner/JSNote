

const moduled = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

let unboundGetX = moduled.getX;
console.log(unboundGetX());
// The function gets invoked at the global scope
// expected output: undefined

let boundGetX = unboundGetX.bind(moduled);
console.log(boundGetX());
