/*
  test
*/

function toyuan(y){
    if(isNaN(y)){
        return y
    }
    if(y.length >= 3){
        return y.substr(0, y.length-2)+"."+y.substr(y.length-2, y.length);
    }
    else {
        return (Number(y)/100).toFixed(2);
    }
}

console.log(toyuan(10000));
console.log(toyuan(11));
console.log(toyuan("q"));

console.log(toyuan("99"));

console.log(Number('001'||0));


