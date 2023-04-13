// const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
//  *
//  * @param {String} email
//  * @return {String}
//  *
//  * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
let email = 'prettyandsimple@example.com';
// let email = 'very.unusual.@.unusual.com@usual.com';

const getEmailDomain = (email) => {
  let arr = email.split('@');
  let result = arr[arr.length - 1];
  return result;
};

getEmailDomain(email);


module.exports = {
  getEmailDomain
};
