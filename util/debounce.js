
function LateBloomer() {
  this.petalCount = Math.ceil(Math.random() * 12) + 1;
}

LateBloomer.prototype.bloom = function() {
  setTimeout(()=>this.declare(), 2000); 
};

LateBloomer.prototype.declare = function() {
  console.log('I am a beautiful flower with ' +
    this.petalCount + ' petals!');
};

//var flower = new LateBloomer();
//flower.bloom(); 

function Bun(){
    this.name = "debounce";
    this.bounce = function(wait){
        let timeout = null;
        console.log("name1: ", this.name);
        
        if(timeout !== null) clearTimeout(timeout);
        
//        timeout = setTimeout(function(){this.handle()}, wait);
        timeout = setTimeout(()=>this.handle(), wait);        
       
    }
}


Bun.prototype.handle = function(){
    console.log("name2: ", this.name);
    console.log(Math.trunc(54.124));
}

let bun  = new Bun();
bun.bounce(2000);


var dbe = {

    name:"debounce",
    
    debounce: function(fn, wait){
        var timeout = null;
        console.log("name1: ", this.name);
        return function(){
            if(timeout !== null) clearTimeout(timeout);

            timeout = setTimeout(fn, wait);
        }
    },

    bounce: function(wait){
        var timeout = null;
        console.log("name1: ", this.name);
        
        if(timeout !== null) clearTimeout(timeout);
        
        timeout = setTimeout(()=>{
            this.handle
        }, wait);
       
    }


}


//dbe.prototype.debounce = function(){}



//dbe.debounce(handle, 1000)();

//dbe.bounce(1000);

