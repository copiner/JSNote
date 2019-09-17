/** 
    ���ֽ���дת��(���Դ�������,С��,����)

 */    
function smalltoBIG(n){    
	var fraction = ['��', '��'];    
	var digit = ['��', 'Ҽ', '��', '��', '��', '��', '½', '��', '��', '��'];    
	var unit = [ ['Ԫ', '��', '��'], ['', 'ʰ', '��', 'Ǫ']  ];    
	var head = n < 0 ? 'Ƿ': '';    
	n = Math.abs(n);    

	var s = '';    

	for (var i = 0; i < fraction.length; i++){    
		s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/��./, '');    
	}    
	s = s || '��';    
	n = Math.floor(n);    

	for (var i = 0; i < unit[0].length && n > 0; i++){    
		var p = '';    
		for (var j = 0; j < unit[1].length && n > 0; j++)     
		{    
			p = digit[n % 10] + unit[1][j] + p;    
			n = Math.floor(n / 10);    
		}    
		s = p.replace(/(��.)*��$/, '').replace(/^$/, '��')  + unit[0][i] + s;    
	}    
	return head + s.replace(/(��.)*��Ԫ/, 'Ԫ').replace(/(��.)+/g, '��').replace(/^��$/, '��Ԫ��');
}

var num = '1298464';
console.log(smalltoBIG(num));