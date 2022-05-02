const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this); //привязывает методод calculateDepth в конструкторе (можно было использовать стрелочную функцию, тогда она бы не имела своего this и брала бы его из внешней функции и не нужно было бы писать функцию constructor)
  }
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0; //если внутри переданного массива не имеются массивы
    } else {
      let depth = 0;
      for (let item of arr) depth = Math.max(depth, this.calculateDepth(item)); //Данная функция вызывает сама себя для каждого элемента основного массива, и находит в этих элементах глубину массива и при каждой итерации с помощью Math.max сравнивает текущую максимальную глубину массива и высчитанную глубину элемента и после записывает в переменную depth
      return 1 + depth; //складываем (1 это сам переданный массив + depth это максимальная глубина массива)
    }
  }
}

module.exports = {
  DepthCalculator,
};
