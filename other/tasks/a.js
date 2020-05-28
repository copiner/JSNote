
console.log('script start');

setTimeout(function () {
  console.log('setTimeout');
}, 0);

Promise.resolve()
  .then(function () {
    console.log('promise1');
  })
  .then(function () {
    console.log('promise2');
  });

console.log('script end');
/*
Tasks
Microtasks
*/

/*
To understand this you need to know how the event loop handles tasks and microtasks.
This can be a lot to get your head around the first time you encounter it
*/

/*
Tasks execute in order, and the browser may render between them

Microtasks execute in order, and are executed:
  1、after every callback, as long as no other JavaScript is mid-execution
  2、at the end of each task
*/
