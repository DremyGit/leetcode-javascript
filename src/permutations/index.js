const permute = (nums) => {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return [nums];
  }
  return nums.reduce((list, num, index) => {
    return list.concat(
        permute([
          ...nums.slice(0, index),
          ...nums.slice(index + 1),
        ]).map((res) =>
          [num].concat(res)
        )
    );
  }, []);
};

export default permute;
