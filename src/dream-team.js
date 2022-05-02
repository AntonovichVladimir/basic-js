const { NotImplementedError } = require("../extensions/index.js");

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
function createDreamTeam(members) {
  let firstLetters = "";
  let teamName = "";

  if (!Array.isArray(members)) {
    return false;
  } else {
    for (let value of members) {
      if (typeof value === "string") {
        firstLetters += value.trim()[0].toUpperCase(); //Удаляем в каждом элементе массива пробелы вначале и в конце, берём первый символ каждого элемента, возводим в верхний регистр и добавляем в переменную firstLetters
      }
      teamName = firstLetters
        .split("") // делим строку на массив из букв
        .sort((a, b) => a.localeCompare(b)) // сортируем массив букв по алфавиту
        .join(""); // возводим из массива букв обратно в строку
    }
  }
  // console.log(typeof teamName);
  // console.log(teamName);
  return teamName;
}

module.exports = {
  createDreamTeam,
};
