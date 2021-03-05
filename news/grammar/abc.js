
//side effect

var a = 42;
var b = a++;

console.log(a, b);

var c = 42, d;
d = ( c++, c );

console.log(c, d)


function vowels(str){
    var matches;

    if(str){
        matches = str.match( /[aeiou]/g );

        if(matches){
            return matches
        }
    }
}

console.log(vowels("Hello World"))

function vowels1(str){
    var matches;

    if(str && (matches = str.match( /[aeiou]/g )) ){
        return matches
    }
}

console.log(vowels1("Hello World"))
