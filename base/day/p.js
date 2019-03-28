var myDate = new Date(),
    myYear = myDate.getFullYear(),
    myMon = myDate.getMonth() + 1,
    myDay = myDate.getDate(),
    myHour = myDate.getHours(),
    myMin = myDate.getMinutes(),
    mySec = myDate.getSeconds();

var res = myYear+'-'+myMon+'-'+myDay+' '+myHour+':'+myMin+':'+mySec;
console.log(res);
