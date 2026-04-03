const findTheOldest = function(array) {
    const currentYear = (new Date).getFullYear();
    const age = (person) => (person.yearOfDeath ?? currentYear) - person.yearOfBirth;
    return array.reduce((oldest, current) => age(oldest) > age(current) ? oldest : current);
};

// Do not edit below this line
module.exports = findTheOldest;
