const user = { name: 'bruce' };
const userProxy = new Proxy(user, {
  get: (obj, prop) => {
    if (prop === 'avatar') {
      if (!obj.avatar) {
        return 'abc';
      }
    }
    return obj[prop];
  }
});

console.log(userProxy.avatar);