var Util = {
    replXStr : function(str,start,len){
	if(str.length>1){
           var xing = '';
           for (var i=0;i<len;i++) {
             xing+='*';
           }
           return str.substring(0,start)+xing+str.substring(start+len);
	}else {
	    return str;
	}
    }
}
var xing = Util.replXStr("412723199002114215",4,10);
var xing1 = Util.replXStr("王东东",1,1);
var xing2 = Util.replXStr("王东",1,1);
var xing3 = Util.replXStr("",4,10);
console.log(xing);
console.log(xing1);
console.log(xing2);
console.log(xing3);
