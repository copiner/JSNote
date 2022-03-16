

var foo = {
  [Symbol.iterator]: () => ({
    items: ['p', 'o', 'n', 'y', 'f', 'o', 'o'],
    next: function () {
      return {
        done: this.items.length === 0,
        value: this.items.shift()
      }
    }
  })
}

for(let pony of foo){
    console.log(pony);
}
