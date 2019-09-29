

function test(){
    var arr = new Array();
    for(var i = 0; i < 6 ; i++){
        arr[i] = function(){
            return i;
        }
    }
    console.log('i---'+i);
    return arr;
}

var arrObj = new test();

console.log(arrObj[0].toString());
console.log(arrObj[0]());
