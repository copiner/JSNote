
var data = require('./data.js');

/*
var arr = [1,2,[3,4,5,[6,7,8],9],10,[11,12]];

function fn(arr){　　　　
	 let arr1 = []

     arr.forEach((val)=>{
         if(val instanceof Array){
             arr1 = arr1.concat(fn(val))
         }else{
             arr1.push(val)
         }
      })

      return arr1
 }

*/


//arr.flat(Infinity)

/*
function fn(arr){
    return arr.reduce((prev,cur)=>{
        return prev.concat(Array.isArray(cur)?fn(cur):cur)
    },[])
}
*/


function fn(arr){　　　　
	  let arr1 = [];

     arr.forEach((val)=>{
        // console.log(val)
         arr1.push(val)
         if(val.children){
             arr1 = arr1.concat(fn(val.children))
         }

      })

      return arr1
 }

 // let pipin = fn(data.menu);
 //
 // console.log(pipin);

/*
叶子菜单
*/
 function fn1(arr){　　　　
 	  let arr1 = [];

      arr.forEach((item)=>{
         // console.log(val)

          if(item.children && item.children[0].type != 'button'){
            arr1 = arr1.concat(fn1(item.children))
          } else if(item.type == 'menu'){
            arr1.push(item)
          }

       })

       return arr1
  }

  let pipin = fn1(data.menu);

  console.log(pipin);
