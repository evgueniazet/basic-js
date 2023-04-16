// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = (n) => {
  const numbersArr = [];
  const nArr = String(n).split('');

  nArr.forEach((_, index) => {
    const copyArr = [...nArr];
    copyArr.splice(index, 1);
    numbersArr.push(copyArr.join(''));
  })
  numbersArr.sort();
  const result = numbersArr.splice(numbersArr.length - 1, 1);
  return Number(result);

};

module.exports = {
  deleteDigit
};
