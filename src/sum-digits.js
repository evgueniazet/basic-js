// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
// let n = 100;
// let n = 9999999999999;

const getSumOfDigits = (n) => {
  const nString = String(n);
  const arr = nString.split('');
  let sumOfNumbers = arr.reduce((acc, number) => acc + Number(number), 0);

  if (sumOfNumbers > 9) {
    let sum = getSumOfDigits(sumOfNumbers);
    sumOfNumbers = sum;
  }
  return sumOfNumbers;
};

module.exports = {
  getSumOfDigits
};
