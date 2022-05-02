const { NotImplementedError } = require("../extensions/index.js");

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
function getSeason(date) {
  let count = Array.from(arguments); //создаём массив из переданных аргументов в функцию (date)

  if (count.length < 1) {
    //проверяем наличие элементов в массиве (count)
    return "Unable to determine the time of year!";
  }
  if (!(date instanceof Date) || Object.keys(date).length > 0) {
    //проверяем объект (date) переданный в функцию, относится ли он к классу Date и и если да, то проверить на наличие разведчика )))
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  if (month === 11 || (month >= 0 && month < 2)) {
    return "winter";
  } else if (month > 1 && month < 5) {
    return "spring";
  } else if (month > 4 && month < 8) {
    return "summer";
  } else {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
