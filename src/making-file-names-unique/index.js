/**
 * @param {string[]} names
 * @return {string[]}
 */
const getFolderNames = (names) => {
  const indexMap = {};
  const nameSet = new Set();
  for (let i = 0, len = names.length; i < len; i++) {
    const name = names[i];
    if (nameSet.has(name)) {
      let index = (indexMap[name] || 0) + 1;

      while (nameSet.has(`${name}(${index})`)) {
        index++;
      }
      nameSet.add(`${name}(${index})`);

      // Cache
      indexMap[name] = index;
    } else {
      nameSet.add(name);
    }
  }
  return Array.from(nameSet);
};

export default getFolderNames;
