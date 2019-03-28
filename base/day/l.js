var Temp = {
    score:[
	{id:1,name:'wds'},
	{id:2,name:'xjx'},
	{id:3,name:'ucl'}
    ],
    discover : function (item){
	var arr = Temp.score;
	for(let i=0;i<arr.length;i++){
	    if(arr[i].id == item){
		return arr[i];
	    }
	}
    }

}

var obj = Temp.discover(2);
console.log(obj);


