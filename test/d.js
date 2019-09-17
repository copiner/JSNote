
let c = 7;
let rab = () => {
    console.log(this.c);
}
rab();

var o = {
    c:9,
    rab
}

o.rab()
