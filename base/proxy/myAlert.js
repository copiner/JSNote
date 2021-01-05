const myAlert = new Proxy(alert, {
  apply: (target, thisArg, argumentsList) => {
    const msg = argumentsList.join('\n');
    target(msg);
  }
});

myAlert('haha', 'lala');