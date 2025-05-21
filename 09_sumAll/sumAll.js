const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";

    const min = num1 < num2 ? num1 : num2; // or use Math.min
    const max = num1 > num2 ? num1 : num2; // or use Math.max

    let sum = 0;
    for (let i = min; i < max+1; i++) {
        
        sum += i;
    }
    return sum;
};

sumAll(2,4)


// Do not edit below this line
module.exports = sumAll;
