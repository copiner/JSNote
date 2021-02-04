//built-in api --> this
function foo(el){

    console.log(el, this.id);
}

var obj = {
    id:"awesome"
}

var arr = [6, 7, 9]

arr.forEach(foo, obj);

