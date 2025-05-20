const removeFromArray = function(arr, ...args) {
    return arr.filter((item) => {
        return !args.includes(item);
    })
};

removeFromArray([1, 2, 3, 5, 2], 2)

// Do not edit below this line
module.exports = removeFromArray;
