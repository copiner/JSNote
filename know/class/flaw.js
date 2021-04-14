
class Flaw {
    constructor(){
        //1
        this.id = 0;

        //2
        Flaw.prototype.count++;

        console.log("Hello: " + this.count);
    }
}

Flaw.prototype.count = 0;

var c1 = new Flaw();

var c2 = new Flaw();

c1.id++;
console.log(c1.id);
console.log(c2.id);

console.log(c1.count === 2);
console.log(c1.count === c2.count);
