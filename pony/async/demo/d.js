/*回调方式*/
function test(callback) {
  setTimeout(() => callback('hello world'), 5000);
}
var res = test((value) => console.log(value));
console.log(res);

/*Promise方式*/
function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('hello world');
    }, 5000)
  });
}
test().then((value) => console.log(value));

/*async方式*/
async function test() {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve('hello world');
    }, 5000)
  });
}
test().then((value) => console.log(value));
