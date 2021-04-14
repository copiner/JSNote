// 利用 apply 改变 this 指向
Function.prototype.bind = function(context) {
    var that = this;

    return function() {
       return that.apply(context, arguments);
    }
}

// 将 bind 方法的参数提取出来拼接到返回的闭包函数中
Function.prototype.bind1 = function(context) {
    var that = this;
    var args = Array.prototype.slice.call(arguments, 1);


    return function() {
       // 预设参数一定是 args 在前拼接
       return that.apply(context, args.concat(Array.prototype.slice.call(arguments))) ;
    }
}

Function.prototype.bind2 = function(context) {
    var that = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var bound = function() {
       if(this instanceof bound) { // 如果是作为构造函数，那么第一个参数 context 就不需要了
            return that.apply(this, args.concat(Array.prototype.slice.call(arguments)));
       } else {
            return that.apply(context, args.concat(Array.prototype.slice.call(arguments))) ;
       }
    }

    // 维护原型关系
    if(this.prototype) {
        bound.prototype = this.prototype;
    }

    return bound;
}
