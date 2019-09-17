
function mgo(){
    var mac = ["00:E0:4C:36:00:3D","B0:83:FE:61:84:51"];
    if(mac){
        var macarray = mac.map(function (item,index) {
            return {
	        mac:item.replace(/\:/g,'')
            };
        })

    }
    
    console.log(macarray);
}

mgo()

var mac = ["00:E0:4C:36:00:3D","B0:83:FE:61:84:51"];


