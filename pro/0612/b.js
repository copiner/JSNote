/*
在函数内部有一个特殊对象this
this引用的是函数执行的环境对象
*/
var color = 'red';
var o = {color:'blur'};

function sayColor(){
    console.log(this.color);
}

sayColor();//undefined

o.sayColor = sayColor;
o.sayColor();//blue


/*
函数名只是一个包含指针的变量而已
全局的sayColor()函数与o.sayColor()指向的仍然是同一个函数
*/
