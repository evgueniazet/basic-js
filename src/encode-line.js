const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = (str) => {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let resultObj = {};
  // const arr = str.split('');

  // for (let i = 0; i < arr.length; i++) {
  //   let count = 1;
  //   // resultObj[arr[i]] = 0;
  //   if (arr[i] === arr[i + 1]) {
  //     resultObj[arr[i]] = count;
  //     count++;
  //   }
  // }




  // console.log('resultObj', resultObj);


};

// encodeLine('dssrrfcccc');

module.exports = {
  encodeLine
};
