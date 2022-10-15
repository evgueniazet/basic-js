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

  let age = 0;
  if (sampleActivity === undefined) {
    console.log('sampleActivity', sampleActivity);
    return false;
  } else {
    if (typeof sampleActivity != 'string') {
      console.log('sampleActivity1', sampleActivity);
      return false;
    } else {
      if (isNaN(sampleActivity)) {
        console.log('sampleActivity2', sampleActivity);
        return false;        
      } else {
        if (Number(sampleActivity) === 0) {
          console.log('ll', sampleActivity);
          return false; 
        }

        if (sampleActivity > 15) {
          console.log('sampleActivity3', sampleActivity);
          return false;
        } else {
          let k = Math.log(2) / HALF_LIFE_PERIOD;
          let x = MODERN_ACTIVITY / sampleActivity;
          t = Math.log(x) / k;
          let age = Math.ceil(t);
          console.log('k', age);
        }
      }
    }
  }

  return age;
};
dateSample('1');




module.exports = {
  dateSample
};
