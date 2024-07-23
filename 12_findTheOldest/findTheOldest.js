const findTheOldest = function(people) {
    return people.sort((a, b) => {
        let aAge = (a.yearOfDeath || (new Date()).getFullYear()) - a.yearOfBirth;
        let bAge = (b.yearOfDeath || (new Date()).getFullYear()) - b.yearOfBirth;
        return bAge - aAge;
    })[0]
};

// Do not edit below this line
module.exports = findTheOldest;
