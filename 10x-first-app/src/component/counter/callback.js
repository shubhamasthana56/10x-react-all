function calculator(callback) {
    const a = 10;
    const b= 20;
    callback(a,b);
}

function add(a,b) {
    console.log(a+b);
}
calculator(add);