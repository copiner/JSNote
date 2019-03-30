function tab(date1,date2){
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
	console.log(oDate1.getTime())
    if(oDate1.getTime() > oDate2.getTime()){
        console.log('第一个大');
    } else {
        console.log('第二个大');
    }
}
tab('2015-10-10','2015-10-11');
