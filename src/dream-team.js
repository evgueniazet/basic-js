const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

// let members = ['Matt', 'Ann', 'Dmitry', 'Max'];
// let members = ['Ol   via', 1111, 'Lily', 'oscar', true, null, 'volodia'];
// let members = [
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]

const createDreamTeam = (members) => {
  let nameDreamTeam = '';

  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        let name = members[i].replaceAll(' ', '');
        let firstLetter = name.charAt(0);

        nameDreamTeam += firstLetter;
      }
    };
  } else {
    return false;
  }

  let nameDreamTeamArray = nameDreamTeam.toUpperCase().split('');
  nameDreamTeamArray.sort();

  return nameDreamTeamArray.join('');
};

module.exports = {
  createDreamTeam
};
