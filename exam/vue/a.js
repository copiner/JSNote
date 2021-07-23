
var book = {}
var name = '';

Object.defineProperty(book, 'name', {
    set:function(value){
        name = value;
        console.log("set: ", value);
    },
    get:function(){
        return name;
    }
})

book.name = "vue tt";

console.log(book.name);


function mvvm(data, key, value){
    
    
}
