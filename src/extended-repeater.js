const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const repeater = (str, options) => {
  throw new NotImplementedError('Not implemented');
  let resultArr = [];
  let additionArr = [];

  if (typeof str !== 'string') {
    String(str);
  }

  if (!options.separator) {
    options.separator = '+';
  }

  // if (!options.additionSeparator) {
  //   options.additionSeparator = '|';
  // }

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      if (options.addition) {
        additionArr.push(options.addition);
      }
      if (additionArr.length < options.additionRepeatTimes + (options.additionRepeatTimes - 1)) {
        additionArr.push(options.additionSeparator);
      }
    }
  } else {
    additionArr.push(options.additionSeparator);
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultArr.push(str);
      // console.log(resultArr.length, options.repeatTimes + (options.repeatTimes + 1));

      if (resultArr.length < options.repeatTimes + (options.repeatTimes + 1)) {
        additionArr.forEach((item) => {
          resultArr.push(item)
        })
        resultArr.push(options.separator);
      }
    }
  } else {
    resultArr.push(options.separator);
  }
  const newString = resultArr.join('');
  console.log('newString', newString);
};

repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });


// module.exports = {
//   repeater
// };
