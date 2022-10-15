// const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let age = false;

  if (sampleActivity === undefined) {
    return false;
  } else {
    if (typeof sampleActivity != 'string') {
      return false;
    } else {
      if (isNaN(sampleActivity)) {
        return false;        
      } else {
        if (Number(sampleActivity) === 0) {
          return false; 
        }

        if (sampleActivity > 15 || sampleActivity < 0) {
          return false;
        } else {
          let k = Math.log(2) / HALF_LIFE_PERIOD;
          let x = MODERN_ACTIVITY / sampleActivity;

          t = Math.log(x) / k;
          age = Math.ceil(t);
        }
      }
    }
  }

  return age;
};

module.exports = {
  dateSample
};
