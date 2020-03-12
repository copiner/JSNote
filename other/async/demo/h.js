function doubleAfter2seconds(num){
    return new Promise((resolve,reject)=>{
    	setTimeout(()=>{
    	    resolve(2*num)
    	},2000)
    })
}

async function testResult1(){
    let result = await doubleAfter2seconds(30);
    console.log(result);
}

testResult1();

async function textResult2(){
    let first = await doubleAfter2seconds(30);
    let second = await doubleAfter2seconds(50);
    let third = await doubleAfter2seconds(20);
    console.log(first+second+third);
}

textResult2()
