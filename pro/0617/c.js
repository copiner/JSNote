
var text = "cat,bat,sat,fat";
var pattern = /.at/;

//== pattern.exec(text)

var matches = text.match(pattern);
console.log(matches.index);
console.log(matches[0]);
console.log(matches)
console.log(pattern.lastIndex);
