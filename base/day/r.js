/*
1,birthday
2,sex
3,age
*/
function IdCard(UUserCard,num){
	if(num==1){
		birth=UUserCard.substring(6, 10) + "-" + UUserCard.substring(10, 12) + "-" + UUserCard.substring(12, 14);
		return birth;
	}
	if(num==2){
		if (parseInt(UUserCard.substr(16, 1)) % 2 == 1) {
			return "MAN";
		} else {
			return "WOMEN";
		}
	}
	if(num==3){
		var myDate = new Date();
		var month = myDate.getMonth() + 1;
		var day = myDate.getDate();
		var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
		if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
			age++;
		}
		return age;
	}
}
console.log(IdCard('412723199101234215',3));


function GetAge(identityCard) {
    var len = (identityCard + "").length;
    if (len == 0) {
        return 0;
    } else {
        if ((len != 15) && (len != 18))
        {
            return 0;
        }
    }
    var strBirthday = "";
    if (len == 18)
    {
        strBirthday = identityCard.substr(6, 4) + "/" + identityCard.substr(10, 2) + "/" + identityCard.substr(12, 2);
    }
    if (len == 15) {
        strBirthday = "19" + identityCard.substr(6, 2) + "/" + identityCard.substr(8, 2) + "/" + identityCard.substr(10, 2);
    }

    var birthDate = new Date(strBirthday);
    var nowDateTime = new Date();
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() == birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
