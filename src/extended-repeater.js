// const { NotImplementedError } = require('../extensions/index.js');

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
  // throw new NotImplementedError('Not implemented');

  let resultArr = [];
  let additionArr = [];

  const string = String(str);

  console.log(typeof string);

  if (!options.separator) {
    options.separator = '+';
  }

  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }

  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }

  if ('addition' in options) {

    const addition = String(options.addition);
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(addition)
      if (options.additionRepeatTimes > 1 && additionArr.length < options.additionRepeatTimes + (options.additionRepeatTimes - 1)) {
        additionArr.push(options.additionSeparator)
      }
    }
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultArr.push(string);
      if (additionArr.length > 0) {
        resultArr.push(additionArr.join(''));
      }

      if (options.repeatTimes > 1 && i < options.repeatTimes - 1) {
        resultArr.push(options.separator);
      }
    }
  }

  console.log('result', resultArr.join(''));
  return resultArr.join('');
};

module.exports = {
  repeater
};