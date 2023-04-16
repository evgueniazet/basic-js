// const { NotImplementedError } = require('../exFtensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

// let date1 = new Date(2020, 13, 1);
// let date = 'foo';
// let date = () => new Date();
const fakeDate = {
  toString() {
    return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));
// let date = fakeDate;

// console.log('date', date, Object.getOwnPropertyNames(date));
// console.log('date1', Object.getOwnPropertyNames(date1));

// let date = new Date(481, 1, 5, 21, 58, 37, 272);
// let date = new Date(1140, 1, 28, 13, 33, 33, 459);
// let date = '2020';

// () => getSeason('foo'),
//   () => getSeason({ John: 'Smith' }),
//   () => getSeason(20192701),
//   () => getSeason([2019, '27', 0 + '1']),
//   () => getSeason(() => new Date())


let season = false;

function getSeason(date) {
  if (typeof date === 'undefined') {
    return 'Unable to determine the time of year!';
  } else {
    if (Object.prototype.toString.call(date) === "[object Date]") {

      if (!(date instanceof Date) || Number.isNaN(date) || !!Object.getOwnPropertyNames(date).length) {

        throw new Error('Invalid date!');
      } else {

        let month = date.getMonth();

        if ((month >= 0 && month <= 1) || month === 11) {
          season = 'winter'
        }

        if (month >= 2 && month < 5) {
          season = 'spring'
        }

        if (month >= 5 && month < 8) {
          season = 'summer'
        }

        if (month >= 8 && month < 11) {
          season = 'autumn'
        }

        return season;
      }
    } else {
      throw new Error('Invalid date!');
    }
  }
};


module.exports = {
  getSeason
};
