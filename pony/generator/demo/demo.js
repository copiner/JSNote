//-------------应用-----------------------
/*
协程可以理解成多线程间的协作，比如说A，B两个线程根据实际逻辑控制共同完成某个任务，A运行一段时间后，暂缓执行，交由B运行，B运行一段时间后，再交回A运行，直到运行任务完成。
对于JavaScript单线程来说，我们可以理解为函数间的协作，由多个函数间相互配合完成某个任务
*/

/*
肚包鸡的过程：准备工作(宰鸡，洗鸡，刀工等)->炒鸡->炖鸡->上料->上菜

大厨很忙，负责核心的工序：炒鸡，上料

伙计负责没有技术含量，只有工作量的打杂工序：准备工作，炖鸡，上菜
*/

//大厨的活
function* chef(){
  console.log("fired chicken");//炒鸡
  yield "worker";//交由伙计处理
  console.log("sdd ingredients");//上料
  yield "worker";//交由伙计处理
}
//伙计的活
function* worker(){
  console.log("prepare chicken");//准备工作
  yield "chef";//交由大厨处理
  console.log("stewed chicken");
  yield "chef";//交由大厨处理
  console.log("serve chicken");//上菜
}
var ch = chef();
var wo = worker();
   //流程控制
function run(gen){
  var v = gen.next();
  if(v.value =="chef"){
    run(ch);
  }else if(v.value =="worker"){
    run(wo);
  }
}

//run(wo);//开始执行


//普通方法实现肚包鸡的制作过程

// setTimeout(function(){
//    console.log("prepare chicken");
//    setTimeout(function(){
//       console.log("fired chicken");
//       setTimeout(function(){
//          console.log("stewed chicken");
//          //....
//        },500)
//    },500)
// },500);

//Generator来实现

//准备
function prepare(sucess){
  setTimeout(function(){
       console.log("prepare chicken");
       sucess();
   },5000)
}

//炒鸡
function fired(sucess){
  setTimeout(function(){
       console.log("fired chicken");
       sucess();
   },500)
}
//炖鸡
function stewed(sucess){
  setTimeout(function(){
       console.log("stewed chicken");
       sucess();
   },500)
}
//上料
function sdd(sucess){
  setTimeout(function(){
       console.log("sdd chicken");
       sucess();
   },500)
}
//上菜
function serve(sucess){
  setTimeout(function(){
       console.log("serve chicken");
       sucess();
   },500)
}

//流程控制
function running(fn){
  const gen = fn();
  //1
  // while(true){
  //   let result = gen.next();
  //   if (result.done) return;
  //   result.value(()=>{})
  // }

  //2
  cnext();
  function cnext() {
    const result = gen.next();
    console.log(result)
    if (result.done) return;//结束
    // result.value就是yield返回的值，是各个工序的函数
    result.value(cnext);//cnext作为入参，即本工序成功后，执行下一工序
  }

};
//工序
function* task(){
  yield prepare;
  yield fired;
  yield stewed;
  yield sdd;
  yield serve;
}
running(task);//开始执行

/*
我们分析下执行过程：

1、每个工序对应一个独立的函数，在task中组合成工序列表，执行时将task作为入参传给run方法。run方法实现工序的流程控制。

 2、首次执行next()方法，gen.next()的value，即result.value返回的是prepare函数对象，执行result.value(next)，即执行prepare(next)；prepre执行完成后，继续调用其入参的next，即下一步工序，

3、以此类推，完成整个工序的实现。

从上面例子看，task方法将各类工序"扁平化",解决了层层嵌套的回调地狱；run方法，使各个工序同步执行，实现了异步流控。
*/
