const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let unnecessaryIndexes = []; //сюда будем добавлять индексы элементов(переданного в функцию массива), которые равняются -1
  let sortArr; //сюда добавим скорректированный массив, который вернёт функция

  for (let i = 0; i < arr.length; i++) {
    //перебираем переданный в функцию массив и ищем элементы которые равняютя -1
    if (arr[i] == -1) {
      unnecessaryIndexes.push(i); //добавляем индексы элементов, передданного в функцию массива, которые равняются -1
    }
  }
  sortArr = arr.filter((number) => number !== -1); //ищем в передданом массиве в функцию, все элементы которые не равняются -1 и создаём новый массив и возвращаем в переменную
  sortArr.sort((a, b) => a - b); //сортируем в правильном порядке созданный нами новый массив
  for (let key of unnecessaryIndexes) {
    //делаем перебор массива unnecessaryIndexes(который имеет индексы элементов (-1) с передданого в функцию массива)
    sortArr.splice(key, 0, -1); //при каждой итерации добавляем по индексу (key) значение -1 в наш скорректированный массив, который вернёт функцию
  }
  return sortArr;
}

module.exports = {
  sortByHeight,
};
