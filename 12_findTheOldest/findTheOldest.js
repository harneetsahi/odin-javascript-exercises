function getAge(birth, death) {
  if (!death) {
    death = new Date().getFullYear(); // it would basically be the current age
  }
  return death - birth;
}

const findTheOldest = function (people) {
  return people.reduce((oldest, curr) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(curr.yearOfBirth, curr.yearOfDeath);

    return oldestAge > currentAge ? oldest : curr;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
