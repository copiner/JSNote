//unicode
var regName =/^[\u4e00-\u9fa5]{2,4}$/;  //Chinese name length at 2 ~ 4
if(!regName.test(name)){
    console.log('name error');
}

//15 18 length
var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

if(!regIdNo.test(idNo)){
    console.log('idNo error');
}
