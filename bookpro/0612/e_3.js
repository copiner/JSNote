/*
简单地，this指向函数的调用者
*/
var color = 'red';
var o = {color:'blue'};

function sayColor(){
    var color = 'black';
    console.log('------'+this.color);
}

sayColor();//WINDOW  red

sayColor.call(this); //window red

//sayColor.call(window);//window red

sayColor.call(o);//blue
