// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
let x1 = 'jjleef';
// let x2 = 'ejlrgfff';
let x2 = 'sjsjs';



function getCommonCharacterCount(s1, s2) {
  let s1Array = s1.split('');
  let s2Array = s2.split('');
  let sum = 0;

  s1Array.forEach((item) => {
    let elementIndex = s2Array.findIndex((elem) => {
      if (elem === item) {
        return true;
      }
    });
    if (elementIndex > -1) {
      s2Array.splice(elementIndex, 1);
      sum++
    }
  }
  );
  return sum;
};
getCommonCharacterCount(x1, x2);


module.exports = {
  getCommonCharacterCount
};
