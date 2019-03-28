
//var str = "412896215896334215";

function strSplit(str,index,len){
    var str1 = str.slice(0,index+1);
    var str2 = str.slice(index,index+len+1);
    var str3 = str.slice(0,index+1);
    
}

//'asdfghjkl'.replace(/^(\w{2})\w{3}(.*)$/, '$1***$2')

var card = '371102199105221987';

var str = card.substr(6,8);
console.log(str);
var card = card.replace(str, '********');
