const testAsync = async () => {
    return "hello async";
}
const result = testAsync();
console.log(result);
testAsync().then(v => {
    console.log(v);    // 输出 hello async
});
