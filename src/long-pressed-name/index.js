/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = (name, typed) => {
  const nameLen = name.length;
  const typedLen = typed.length;

  if (nameLen > typedLen) {
    return false;
  }

  let i = 0;
  let j = 0;

  while (i < nameLen && j < typedLen) {
    if (name[i] === typed[j]) {
      i++;
      j++;
    } else if (typed[j] !== typed[j - 1]) {
      return false;
    } else {
      j++;
    }
  }

  if (name[i]) {
    return false;
  }

  for (; j < typedLen; j++) {
    if (typed[j] !== typed[j - 1]) {
      return false;
    }
  }
  return true;
};

export default isLongPressedName;
