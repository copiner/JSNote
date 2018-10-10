//await后面可能存在reject，需要放入try…catch代码块中
async function f() {
  try {
    await Promise.reject('occur error');
  } catch(e) {
    console.error("e : "+e);
  }
  return Promise.resolve('hello');
}
f().then(v => console.log("v : "+v));

// e : occur error
// v : hello
