// [INFO] See discussion of node.js exports here:
// https://www.sitepoint.com/understanding-module-exports-exports-node-js/

/**
 * Given a string `email`, return `true` if the string is in the form
 * of a valid Seneca College email address, `false` otherwise.
 */
exports.isValidEmail = function (email) {
  // Here is the regexp that must be checked
  const senecaEmailFormat = /^[a-z]{2,}\.?[a-z]{3,}[0-9]{0,3}@(myseneca|senecacollege|senecac\.on).ca$/;
  // var senecaEmailFormat = /@myseneca.ca$/;
  if (typeof email === 'string') {
    if (senecaEmailFormat.test(email)) {
      return true;
    }
    return false;
  }
  return false;
};

/**
 * Given a string `name`, return a formatted Seneca email address for
 * this person. NOTE: the email doesn't need to be real/valid/active.
 */
exports.formatSenecaEmail = function (name) {
  const userNameFormat = /^[a-z]{2,}\.?[a-z]{3,}[0-9]{0,3}$/;
  if (name && typeof name === 'string') {
    if (userNameFormat.test(name)) {
      const completeName = `${name}@myseneca.ca`;
      return completeName;
    }
    return false;
  }
  return false;
};