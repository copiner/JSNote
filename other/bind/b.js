var temp = 'temp';

function test() {
    console.log(this.temp);
}
test(); // this === window

// call
test.call(null); // this === window
test.call(undefined); // this === window

// apply
test.apply(null); // this === window
test.apply(undefined); // this === window

// bind
test.bind(null)(); // this === window
test.bind(undefined)(); // this === window
