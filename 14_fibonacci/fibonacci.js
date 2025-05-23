const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) return "OOPS" 
    if (n === 0) return 0;

    let start = 0;
    let second = 1;
    
    for (let i = 1; i < n; i++) {
        const next = start + second;
        start = second;
        second = next;
    }
    return second;
};

fibonacci("4")

// Do not edit below this line
module.exports = fibonacci;
