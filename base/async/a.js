var fs = require('fs');

// function getMime(){
//     var result = null;
//     fs.readFile('mine.json',function(err,data){
//         result = data;
//     })
//     return result;
// }

function getMime(){
    return new Promise(resolve => {
      fs.readFile('a.json',function(err,data){
          resolve(data)
      })
    });
}

async function getIt(){
  var data = await getMime();
  console.log(data.toString());
  console.log("starting");
}
getIt()

console.log("ending");
