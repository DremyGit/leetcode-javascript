/**
 * 迭代计算法
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const mapList = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  const roman = [];
  while (num > 0) {
    const [value, s] = mapList.find(([value]) => value <= num);
    num -= value;
    roman.push(s);
  }
  return roman.join('');
};

// 字符串映射法
/* istanbul ignore next */ // eslint-disable-next-line no-unused-vars
const intToRoman2 = (num) => {
  const str = num.toString(10);
  const x1Arr = ['I', 'X', 'C', 'M']; // pow(10, i)
  const x5Arr = ['V', 'L', 'D']; // 5 * pow(10, i)
  let roman = [];

  for (let i = 0, len = str.length; i < len; i++) {
    const index = len - i - 1;

    switch (str[i]) {
      case '5':
      case '6':
      case '7':
      case '8':
        roman.push(x5Arr[index]);
        break;

      case '4':
        roman.push(x1Arr[index], x5Arr[index]);
        continue;

      case '9':
        roman.push(x1Arr[index], x1Arr[index + 1]);
        continue;
    }

    switch (str[i]) {
      case '1':
      case '2':
      case '3':
      case '6':
      case '7':
      case '8':
        let j = str[i] % 5;
        while (j--) {
          roman.push(x1Arr[index]);
        }
        break;
    }
  }
  return roman.join('');
};
export default intToRoman;
