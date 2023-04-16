// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = (arr) => {
  if (!Array.isArray(arr)) {
    const obj = new Error("'arr' parameter must be an instance of the Array!");
    throw obj;
  }

  if (arr.length === 0) {
    return arr;
  }

  let start = 0;
  const newArray = [...arr];

  const recursion = (array, start) => {

    for (let i = start; i < array.length; i++) {

      if (array[i] === '--double-next') {
        if (array[i + 1]) {
          array.splice(i + 2, 0, array[i + 1]);
          start = i + 1;
          recursion(array, start);
          break;
        }
      }

      if (array[i] === '--double-prev') {
        if (array[i - 1]) {
          array.splice(i, 0, array[i - 1]);
          start = i + 2;
          recursion(array, start);
          break;
        }
      }

      if (array[i] === '--discard-next') {
        if (array[i + 1]) {
          array.splice(i + 1, 1);
          start = i + 2;
          recursion(array, start);
          break;
        }
      }

      if (array[i] === '--discard-prev') {
        if (array[i - 1]) {
          array.splice(i - 1, 1);
          start = i + 1;
          recursion(array, start);
          break;
        }
      }
    }

    return array;
  }

  const result = recursion(newArray, start);



  const removeItem = (start) => {

    for (let k = 0; k < result.length; k++) {
      if (result[k] === '--discard-next') {
        result.splice(k, 1);
        removeItem(k + 1);
        break;
      }

      if (result[k] === '--double-prev') {
        result.splice(k, 1);
        removeItem(k + 1);
        break;
      }

      if (result[k] === '--double-next') {
        result.splice(k, 1);
        removeItem(k + 1);
        break;
      }

      if (result[k] === '--discard-prev') {
        result.splice(k, 1);
        removeItem(k + 1);
        break;
      }
    }

    return result;
  };

  return removeItem(start);

};

module.exports = {
  transform
};


