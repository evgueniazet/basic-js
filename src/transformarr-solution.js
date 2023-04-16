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
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  
    if (!Array.isArray(arr)) {
      const obj = new Error("'arr' parameter must be an instance of the Array!");
      throw obj;
    }
  
    if (arr.length === 0) {
      return arr;
    }
  
    const newArr = [...arr];
  
    const recursion = (array) => {
      // let array = [...array];
  
      for (let i = 0; i < array.length; i++) {
        if (array[i] === "--double-next") {
          const nextElement = array[i + 1];
  
          if (
            nextElement ||
            nextElement === "" ||
            nextElement === 0 ||
            nextElement === false ||
            nextElement === null
          ) {
            array.splice(i, 1, nextElement);
          } else {
            array.splice(i, 1);
          }
  
          array = recursion(array);
  
          break;
        }
  
        if (array[i] === "--double-prev") {
          const prevElement = array[i - 1];
  
          if (
            prevElement ||
            prevElement === "" ||
            prevElement === 0 ||
            prevElement === false ||
            prevElement === null
          ) {
            array.splice(i, 1, prevElement);
          } else {
            array.splice(i, 1);
          }
  
          array = recursion(array);
  
          break;
        }
  
        if (array[i] === "--discard-next") {
          const nextElement = array[i + 1];
  
          if (
            nextElement ||
            nextElement === "" ||
            nextElement === 0 ||
            nextElement === false ||
            nextElement === null
          ) {
            array.splice(i + 1, 1);
            array.splice(i, 1);
          } else {
            array.splice(i, 1);
          }
  
          array = recursion(array);
  
          break;
        }
  
        if (array[i] === "--discard-prev") {
          const prevElement = array[i - 1];
  
          if (
            prevElement ||
            prevElement === "" ||
            prevElement === 0 ||
            prevElement === false ||
            prevElement === null
          ) {
            array.splice(i, 1);
            array.splice(i - 1, 1);
          } else {
            array.splice(i, 1);
          }
  
          array = recursion(array);
  
          break;
        }
      }
  
      return array;
    };
  
    return recursion(newArr);
    // console.log('updatedArr', updatedArr);
  
  };
  
  
  
  
  
  module.exports = {
    transform
  };
  