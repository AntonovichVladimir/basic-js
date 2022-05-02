const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let test = []; // сюда будем помещать буквы которые присутствуют в первой и во второй строке (которые не будут повторяться)
  let result = 0; //наш счётчик

  let s1Array = s1.split(""); //делим нашу первую строку на буквы и помещаем в массив
  let s2Array = s2.split(""); //делим нашу вторую строку на буквы и помещаем в массив

  for (let i = 0; i < s1Array.length; i++) {
    if (!test.includes(s1Array[i]) && s2Array.includes(s1Array[i])) {
      //делаем проверку на буквы в строках, чтобы небыло повторяющихся
      let s1ArrayI = s1Array.filter((letter) => letter == s1Array[i]); //ищем все одинаковые повторяющиеся буквы (которые равняются [i] позиции в массиве) в первом массиве
      let s1ArrayLength = s1ArrayI.length; // определяем длину первого массива из найденных одинаковых повторяющихся букв (которые равняются [i] позиции в массиве)
      let s2ArrayI = s2Array.filter((letter) => letter == s1Array[i]); //ищем все одинаковые повторяющиеся буквы (которые равняются [i] позиции в массиве) во втором массиве
      let s2ArrayLength = s2ArrayI.length; // определяем длину второго массива из найденных одинаковых повторяющихся букв (которые равняются [i] позиции в массиве)
      result += Math.min(s1ArrayLength, s2ArrayLength); //определяем минимальное колличество повторений по массивам и добавляем в наш результат
      test.push(s1Array[i]); //добавляем нашую неповторяющую букву в массив ( с помощью которого будем далее в цикле проводить проверку на существование уже буквы в массиве)
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount,
};
