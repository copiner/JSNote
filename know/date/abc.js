
//console.log(Date.now());

//polyfill
if(!Date.now){
    Date.now = function(){
        return (new Date()).getTime();
    }
}

//console.log( (new Date()).getTime() )

const getcustomerdate = (d, date1) => {
  // let date1 = new Date();
    let date2 = new Date(date1)
  
    date2.setDate(date1.getDate()+d);
    console.log(date2.toLocaleDateString());
  let time2 = date2.getFullYear()+"-"+(date2.getMonth()+1)+"-"+date2.getDate();
  return time2;
}


let date = getcustomerdate(7, new Date())
