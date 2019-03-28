
var list = ['we1','rt5','yuy6','nv8'];
var keyWord = 'T';

function searchData(keyWord,list){
    if(!Array.isArray(list)&&keyWord !== '') return;
    let arr = [];
    let keyword = keyWord.toLocaleLowerCase();
    for(let i=0;i<list.length;i++){
	if(list[i].indexOf(keyword) !== -1) arr.push(list[i]);
    }
    return arr;
}

function searchData(keyWord,list){
    if(!Array.isArray(list)&&keyWord !== '') return;
    let arr = [];
    let reg = new RegExp(keyWord,'i');
    for(let i=0;i<list.length;i++){
	if(list[i].match(reg)) arr.push(list[i]);
    }
    return arr;
}
