const fibonacci = function(num) {
    if (num < 0) return 'OOPS';

    const arr = [0, 1];
    let value = 0;
    for (let i = 1; i < num; i++) {
        value = arr.slice(-2).reduce((total, currVal) => total += currVal);
        arr.push(value);
    }

    return arr[num];
};

// Do not edit below this line
module.exports = fibonacci;
