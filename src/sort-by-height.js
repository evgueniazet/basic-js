// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// let myArr = [-1, 150, 150, 170, -1, -1, 160, 180];
// let myArr = [4, 2, 9, 11, 2, 16];

function sortByHeight(arr) {
  let globalMin = 0;

  arr.forEach((elem, index) => {
    if (elem !== -1) { // проверка равен ли элемент -1
      let min = elem;
      let minElemIndex = index;

      arr.forEach((item, someIndex) => {
        if (item !== -1) {
          if (item <= min && item > globalMin) {
            min = item;
            minElemIndex = someIndex;
          }
        }
      });

      globalMin = arr[minElemIndex];

      if (minElemIndex !== index) {
        const savedElem = arr[index];
        arr.splice(index, 1, arr[minElemIndex]);
        arr.splice(minElemIndex, 1, savedElem);
      }
    }
  })

  return arr;
};
// const result = sortByHeight(myArr);

// console.log('result', result);

module.exports = {
  sortByHeight
};
