
const objArr = [{
	name: 'wds'
  },{
	name: 'xjx'
  },{
	name: 'wrq'
  },{
	name: 'xch'
  },{
	name: 'xjx'
  }];

const obj = {}
const newObjArr = []
for(let i = 0; i < objArr.length; i++){
 if(!obj[objArr[i].name]){
  newObjArr.push(objArr[i]);
  obj[objArr[i].name] = true
 }
}

console.log(newObjArr);


const a = [1, 3, 4, 1, 5, 2, 6, 7, 8, 3];
const b = a.filter((item, index, self) => self.indexOf(item) === index)
console.log(b) //[1, 3, 4, 5, 2, 6, 7, 8]

function newArr(array){ 

    var arrs = []; 

    for(var i = 0; i < array.length; i++){ 

        if (arrs.indexOf(array[i]) == -1){ 
            arrs.push(array[i])
        }; 
    } 
    return arrs; 
}
 
var arr = [1,1,2,5,5,6,8,9,8];
 
console.log(newArr(arr));
