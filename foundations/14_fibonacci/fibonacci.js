const fibonacci = function(n) {
    const num = Number(n);
    if(num < 0) return "OOPS";
    if(num == 0) return 0;

    let numLast = 1;
    let numPenult = 0;

    for(let i = 2; i <= num; i++){
        let value = numLast + numPenult;
        numPenult = numLast;
        numLast = value;
    }

    return numLast;
};

// Do not edit below this line
module.exports = fibonacci;
