const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = (domains) => {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log('1');
  // const arr = [...domains];
  // let newArr = [];
  // let itemList = [];

  // arr.forEach((item) => {
  //   const arrString = item.split('.');
  //   newArr.push(arrString);
  //   // console.log('newArr', newArr);

  // })
  // newArr.forEach((elem) => {
  //   elem.forEach((item) => {
  //     console.log('item', item);
  //     itemList.push(item);
  //   })
  // })
};


module.exports = {
  getDNSStats
};
