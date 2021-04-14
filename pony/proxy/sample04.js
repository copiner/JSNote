
var messages = [];
var handlers = {
    get(target, key){
        if(typeof target[key] == "string"){
            return target[key].replace(/[^\w]/g, "");
        }

        return target[key];
    },
    set(target, key, val){
        if(typeof val == "string"){
            val = val.toLowerCase();
            if(target.indexOf(val) == -1){
                target.push( val.toLowerCase() );
            }
        }

        return true;
    }
}

var messages_proxy = new Proxy(messages, handlers);

messages_proxy.push("hello...", 42, "wOrlD!!", "WoRld!!");

messages_proxy.forEach((val)=>{
    console.log(val);
});


messages.forEach((val)=>{
    console.log(val);
});

//console.log(messages_proxy);

//console.log(messages);
