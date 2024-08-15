const fibonacci = function (index) {
  if (typeof index !== "number") {
    index = parseInt(index);
  }

  if (index < 0) return "OOPS";
  if (index == 0) return 0;

  const fibSequence = [0, 1];

  for (let i = 2; i <= index; i++) {
    fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
  }

  return fibSequence[index];
};

// Do not edit below this line
module.exports = fibonacci;
