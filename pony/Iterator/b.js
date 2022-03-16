/*
for-of原理，每次遍历都会调用该对象的[Symbol.iterator]属性的next方法，当返回{value:undefined,done:true}后，表示遍历接收。所以，任何对象要变为可遍历的对象，只需要实现[Symbol.iterator]属性方法，定义其中的next方法即可。
*/

var obj = {
    0:'abc',
    1:'xyz',
    [Symbol.iterator]:function(){
        const _this = this;
        let index = 0;
        return {
            next:function(){
                if(index<2){
                    return{
                        value:_this[index++],
                        done:false
                    }
                } else {
                    return{
                        value:undefined,
                        done:true
                    }
                }
            }
        }
    }
}

for(let v of obj){
    console.log(v);
}


var it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());

//break continue

let str = 'wrq';
for(let v of str){
    console.log(v);
    break;
}
