
var arr = [1,'b','b',4,3,3,4,5,1];
Array.prototype.unique1 = function(){
    var arr1 = [];
    for(var i=0;i<this.length;i++){
	if(arr1.indexOf(this[i]) == -1){
	    arr1.push(this[i]);
	}
    }
    return arr1;
}
console.log(arr);

console.log(arr.unique1());

Array.prototype.unique2 = function(){
    var hash = {};
    var arr1 = [];
    for(var i=0;i<this.length;i++){
	if(!hash[this[i]]){
	    hash[this[i]] = true;
	    arr1.push(this[i]);
	}
    }
    return arr1;
}

console.log(arr.unique2());
