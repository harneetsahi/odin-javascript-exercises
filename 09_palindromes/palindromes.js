const palindromes = function (str) {
  const acceptableChars = "abcdefghijklmnopqrstuvwxyz1234567890";
  const newStr = str
    .toLowerCase()
    .split("")
    .filter((char) => acceptableChars.includes(char))
    .join("");

  const reversedStr = newStr.split("").reverse().join("");

  return newStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
