let O = function(name){
 this.name = name || 'world';
};
O.prototype.hello = function(){
  console.log('hello ' + this.name);
};
let o = new O("frank");
o.hello();

