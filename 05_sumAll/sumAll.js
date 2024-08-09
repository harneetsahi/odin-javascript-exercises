const sumAll = function (firstNum, lastNum) {
  let sum = 0;

  if (
    !Number.isInteger(firstNum) ||
    !Number.isInteger(lastNum) ||
    firstNum < 0 ||
    lastNum < 0
  ) {
    return "ERROR";
  }

  if (firstNum > lastNum) {
    const tempNum = firstNum;
    firstNum = lastNum;
    lastNum = tempNum;
  }

  for (let i = firstNum; i <= lastNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
