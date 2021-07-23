
//deepClone
function deepClone(data) {
    const type = this.judgeType(data);
    let obj = null;
    if (type == 'array') {
        obj = [];
        for (let i = 0; i < data.length; i++) {
            obj.push(this.deepClone(data[i]));
        }
    } else if (type == 'object') {
        obj = {}
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                obj[key] = this.deepClone(data[key]);
            }
        }
    } else {
        return data;
    }
    return obj;
}

function judgeType(obj) {
    //tostring会返回对应不同的标签的构造函数
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object',
    };
    if (obj instanceof Element) {
        return 'element';
    }
    return map[toString.call(obj)];
}
const test = {
    name: 'a',
    date: [1,2,3]
};


console.log(deepClone(test))
test.date[0] = 6;
console.log(test);
