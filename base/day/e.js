
var util = {
    nuum : function(){
	return Math.random()*10 + 1;
    }
}

var obj = {
    key : util.nuum()
}


var tty = {
    prams : obj.key
}

var ttk = {
    prams : obj.key
}

console.log(tty.prams);
console.log(ttk.prams);



