var Test = {

    id:'001',

    arr:[
	{id:1,name:'wds'},
	{id:2,name:'xjx'}	
    ],
    
    initDate:function(){
	console.log('123');
    },
    initEvent:function(){
	console.log('456');
    },
    init:function(){
	this.initDate();
	console.log(this.arr);
    }
};
Test.init();
