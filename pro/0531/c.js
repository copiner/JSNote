var obj = {
    name: '1',
    say: function (fn) {
        fn();
    }
};
function sayName(){
    return this.name;
}
sayName.apply(obj);
sayName.call(obj);
