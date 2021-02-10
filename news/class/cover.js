//shield
class Cover {
    constructor(id){
        this.id = id;
    }
    id(){
        console.log("Id: " + id);
    }
}

var c1 = new Cover("c1");
c1.id();
