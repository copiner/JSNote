
//准备
function prepare(){
	   return new Promise((resolve) => {
       setTimeout(function(){
         console.log("prepare chicken");
         resolve();
     },500)
   });
}

//炒鸡
function fired(){
    return new Promise((resolve) => {
       setTimeout(function(){
         console.log("fired chicken");
         resolve();
     },500)
   });
}
//炖鸡
function stewed(){
    return new Promise((resolve) => {
       setTimeout(function(){
         console.log("stewed chicken");
         resolve();
     },500)
   });
}
//上料
function sdd(){
    return new Promise((resolve) => {
       setTimeout(function(){
         console.log("sdd chicken");
         resolve();
     },500)
   });
}
//上菜
function serve(){
    return new Promise((resolve) => {
       setTimeout(function(){
         console.log("serve chicken");
         resolve();
     },500)
   });
}
async function task(){
	console.log("start task");
  await prepare();
  await fired();
  await stewed();
  await sdd();
  await serve();
  console.log("end task");
}
task();
