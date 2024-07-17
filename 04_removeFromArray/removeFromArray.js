const removeFromArray = function(arr, ...values) {
    
    let valueIdx;
    for (let value of values) {

        let valuePresent = true;
        while (valuePresent) {
            valueIdx = arr.indexOf(value)
            
            if (valueIdx === - 1) {
                valuePresent = false;
            } else {
                arr = arr.toSpliced(valueIdx, 1)
            }
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
