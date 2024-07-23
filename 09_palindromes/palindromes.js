const palindromes = function (str) {
    const letterArr = str.toLowerCase().split('').filter(letter => letter.match(/[a-z0-9]/g));
    return letterArr.join('') === letterArr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
