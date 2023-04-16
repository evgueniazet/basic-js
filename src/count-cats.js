// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

// const backyard = [[0, 1, '^^'], [ 2, '^^', 10], [ '^^', 3, 5]];

const countCats = (backyard) => {
  let counter = 0;
  const ears = '^^';

  for (let i = 0; i < backyard.length; i++) {
    for (let j = 0; j < backyard[i].length; j++) {
      if (backyard[i][j] === ears) {
        counter++
      }
    }
  }

  return counter;
};

module.exports = {
  countCats
};
