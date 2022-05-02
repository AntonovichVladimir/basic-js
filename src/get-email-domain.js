const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let domen = "";
  let index = 1;
  index += email.lastIndexOf("@");
  domen = email.slice(index);
  return domen;
}

module.exports = {
  getEmailDomain,
};
