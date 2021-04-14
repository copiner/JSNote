/*
One of the coolest aspects of Map, as I¡¯ve previously mentioned, is the ability to index by DOM elements. The fact that Map also has collection manipulation abilities also greatly simplifies things.
*/
var cache = new Map();
function put(el,api){
    cache.set(el,api)
}

function find(el){
    return cache.get(el)
}

function destory(el){
    cache.delete(el)
}

function thing(el){
    var api = find(el)
    if(api){
        return api
    }
    api = {
        method:method,
        method2:method2,
        method3:method3,
        destory:destory.bind(null,el)
    }
    put(el,api)
    return api;
}


