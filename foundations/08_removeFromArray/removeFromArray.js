const removeFromArray = function(input, ...exclude) {
    return input.filter((item) => !exclude.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
