const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nArray = Array.from("" + n); //из числа создаём массив элементов (где каждый элемент числа будет состоять в массиве ввиде строки)
  let newArray = nArray.map((number) => parseInt(number)); //из массива элементов убираем (обёртку элемента ввиде строки) и оставляем элементы ( ввиде чистого числа)
  let sum = 0; //создаём переменную, которая будет возвращать из функции конечное число

  for (let key of newArray) {
    sum += key; //перебираем элементы массива и каждый элемент складываем в переменной sum
  }

  while (sum > 9) {
    //создаём функцию, которая будет смотреть на нашу сумму элементов в переменной sum и если она больше 10, будет делить число и заного складывать его значения
    let temporary = Array.from("" + sum); //из числа создаём массив элементов (где каждый элемент числа будет состоять в массиве ввиде строки)
    sum = 0; // обнуляем переменную суммы, чтобы записать новый результат  получившегося числа
    temporary.map((number) => (sum += parseInt(number))); //из массива элементов убираем (обёртку элемента ввиде строки) и оставляем элементы ( ввиде чистого числа) и складываем каждый элемент в переменную sum
  }

  return sum;
}
getSumOfDigits(100);
module.exports = {
  getSumOfDigits,
};
