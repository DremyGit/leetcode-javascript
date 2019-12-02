/**
 * Given two strings representing two complex numbers.
 * You need to return a string representing their multiplication.
 * Note i2 = -1 according to the definition.
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const complexNumberMultiply = (a, b) => {
  const regex = /(-?\d+)\+(-?\d+)i/;

  const resultA = a.match(regex);
  const x = parseInt(resultA[1]);
  const xi = parseInt(resultA[2]);

  const resultB = b.match(regex);
  const y = parseInt(resultB[1]);
  const yi = parseInt(resultB[2]);

  const real = x * y - xi * yi;
  const imaginary = x * yi + y * xi;
  return `${real}+${imaginary}i`;
};

export default complexNumberMultiply;
