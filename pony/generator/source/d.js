function* foo(){
    yield 0;
    yield 1;
}

function* bar(){
    yield 'x';
    yield* foo();
    yield 'y';
}

for (let v of bar()){
    console.log(v);
}
