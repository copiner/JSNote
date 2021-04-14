/*
In ES5, whenever we had a DOM element we wanted to associate with an API object for some library, we had to follow a verbose and slow pattern like the one below. The following piece of code just returns an API object with a bunch of methods for a given DOM element, allowing us to put and remove DOM elements from the cache, and also allowing us to retrieve the API object for a DOM element ¨C if one already exists
*/

var cache = [];
function put(el, api){
    cache.push({el:el, api:api});
}
function find(el){
    for(i = 0; i < cache.length; i++){
        if(cache[i].el === el){
            return cache[i].api
        }
    }
}

function destroy(el){
    for(i = 0; i < cache.length; i++){
        if(cache[i].el === el){
            cache.splice(i,1)
            return
        }
    }
}

function thing(el){
    var api = find(el);
    if(api){
        return api;
    }
    api = {
        method: method,
        method2:method2,
        method3:method3,
        destroy:destroy.bind(null,el)
    }

    put(el,api)
    return api;
}

