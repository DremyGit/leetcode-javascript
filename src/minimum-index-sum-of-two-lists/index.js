/**
 * Suppose Andy and Doris want to choose a restaurant for dinner,
 * and they both have a list of favorite restaurants represented by strings.
 */
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = (list1, list2) => {
  const lists = list1.length < list2.length ? [list1, list2] : [list2, list1];
  const [smallList, bigList] = lists;
  const smallMap = smallList.reduce((prev, value, index) => {
    prev[value] = index;
    return prev;
  }, {});
  const unionMap = bigList.reduce((prev, value, index) => {
    if (typeof smallMap[value] !== 'undefined') {
      prev[value] = smallMap[value] + index;
    }
    return prev;
  }, {});
  const minSumIndex = Math.min(...Object.values(unionMap));
  return Object.keys(unionMap).filter((name) => unionMap[name] === minSumIndex);
};

export default findRestaurant;
