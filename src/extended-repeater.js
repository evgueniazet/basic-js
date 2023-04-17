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

  if (typeof str !== 'string') {
    String(str);
  }

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

  if (options.addition) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(options.addition)
      if (options.additionRepeatTimes > 1 && additionArr.length < options.additionRepeatTimes + (options.additionRepeatTimes - 1)) {
        additionArr.push(options.additionSeparator)
      }
    }
  }

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultArr.push(str);
      resultArr.push(additionArr.join(''));

      if (options.repeatTimes > 1 && resultArr.length < options.repeatTimes + (options.repeatTimes + 1)) {
        resultArr.push(options.separator);
      }



    }
  }

  console.log('result', resultArr.join(''));
  return resultArr.join('');
};

// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
// repeater('12345', { repeatTimes: 5, separator: '3 words separator' });\
repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 });


module.exports = {
  repeater
};