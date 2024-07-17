const sumAll = function(firstNum, secondNum) {

    if (typeof firstNum !== 'number' || typeof secondNum !== 'number') {
        return 'ERROR'
    }

    if (firstNum < 0 || secondNum < 0) {
        return 'ERROR'
    }

    if (secondNum - firstNum < 0) {
        let tmp = firstNum
        
        firstNum = secondNum
        secondNum = tmp
    }

    let numSum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        numSum += i;
    }

    return numSum
};

// Do not edit below this line
module.exports = sumAll;
