let sayMixin = {
  say(phrase) {
    alert(phrase);
  }
};

let sayHiMixin = {
  __proto__: sayMixin, // （或者，我们可以在这里通过 Object.create 来设置原型。）

  sayHi() {
    // 调用父类中的方法
    super.say(`Hello ${this.name}`);
  },
  sayBye() {
    super.say(`Bye ${this.name}`);
  }
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// 拷贝方法
Object.assign(User.prototype, sayHiMixin);

// 现在 User 可以说 hi 了
new User("Dude").sayHi(); // Hello Dude!
