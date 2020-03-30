

/*
Reflect.get(target, name, receiver)

该方法是用来读取一个对象的属性。
参数如下解析：
target: 目标对象
name: 是我们要读取的属性。
receiver(可选)： 可以理解为上下文this对象
*/

const obj = {
  name: 'copiner',
  age: 29,
  get cop() {
    console.log(this.name);
    //console.log(this);
  }
};

//console.log(Reflect.get(obj, 'name')); // copiner


//console.log(Reflect.get(obj, 'temp'));  // undefined


/*
 先执行 cop 方法 打印 copiner
 然后在打印undefined， 因为该cop()函数没有返回值
*/
//console.log(Reflect.get(obj, 'cop'));


/*
 会执行 cop() 方法，打印 happy, 因此第三个参数指向上下文
 就指向了这个对象 ，最后打印undefined
 因为该函数没有返回值
*/
//console.log(Reflect.get(obj, 'cop', {name: 'happy'}));


/*
 会执行 cop() 方法，打印 undefined, 因此第三个参数指向上下文
 就指向了这个对象，而这个对象里面又没有age属性，因此会打印undefined
 最后打印undefined. 因为该函数没有返回值
*/
//console.log(Reflect.get(obj, 'cop', {age: 12}));


const obj2 = {
  name: 'copiner',
  age: 30,
  get cop() {
    console.log(this.name);
    return 0;
  }
};
/*
  先执行 obj2 该对象中的 cop 方法，指定了第三个参数作为该上下文对象，
  因此会打印 happy2， 最后我们可以看到
  有返回值为0，因此打印0了
*/
//console.log(Reflect.get(obj2, 'cop', {name: 'happy2'}));
