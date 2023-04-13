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
  // throw new NotImplementedError('Not implemented');
  const numbersArr = [];
  const nArr = String(n).split('');

  nArr.forEach((item, index) => {
    const copyArr = [...nArr];
    copyArr.splice(index, 1);
    numbersArr.push(copyArr.join(''));
  })
  numbersArr.sort();
  const result = numbersArr.splice(numbersArr.length - 1, 1);
  return Number(result);

};

// deleteDigit(152);
// deleteDigit(1001);
// deleteDigit(10);
// deleteDigit(222219);
// deleteDigit(109);
// deleteDigit(342);

module.exports = {
  deleteDigit
};
