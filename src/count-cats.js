const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(items) {
  let count = 0;
  for (let value of items) {
    //проходимся по каждому массиву внутри переданного массива в функцию
    value.forEach((item) => {
      // проходимся по каждому элементу массива, внутри каждого массива
      if (item === "^^") {
        // если содержит "^^", то прибавляем +1 в переменную count
        count++;
      }
    });
  }
  return count;
}

module.exports = {
  countCats,
};
