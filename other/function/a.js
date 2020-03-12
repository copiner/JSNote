/*
  array functions

  (parameters) => {statements}

  () => { statements }

  (a) => { statements }

  a => expression
*/

function Counter(){
    this.num = 99;
}

var a = new Counter();

//console.log(a.num);//99


function Counter1(){
    this.num = 7;
    this.timer = setInterval(function(){
        this.num++;
        console.log(this);
    },1000);
}

//console.log(global);

//Counter1();//NaN


//var c = new Counter1();//NaN

//console.log(c);


function Counter2(){
    this.num = 7;
    this.timer = setInterval(()=>{
        this.num++;
        console.log(this);
    },1000);
}

//Counter2();

//var d = new Counter2();
