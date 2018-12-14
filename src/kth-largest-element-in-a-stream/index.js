/**
 * Design a class to find the kth largest element in a stream.
 * Note that it is the kth largest element in the sorted order,
 * not the kth distinct element.
 *
 * Your KthLargest object will be instantiated and called as such:
 * var obj = Object.create(KthLargest).createNew(k, nums)
 * var param_1 = obj.add(val)
 */
class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => b - a).slice(0, k);
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    // 记录数组初始长度
    let len = this.nums.length;

    // 遍历数组
    for (let i = 0; i < len && i < this.k; i++) {
      // 插入排序，查找到插入位置
      if (val > this.nums[i]) {
        // 如果遍历到第 k 个元素，则将该元素 pop
        if (len === this.k) {
          this.nums.pop();
        }
        // 将新元素插入
        this.nums.splice(i, 0, val);
        break;
      }
    }

    // 当插入前的数组长度小于 k 时
    if (len < this.k) {
      // 如果数字还未插入，则插入
      if (this.nums.length === len) {
        this.nums.push(val);
      }
      // 返回数组最后元素
      return this.nums[len];
    }

    // 返回数组最后元素
    return this.nums[len - 1];
  }

  /**
   * @param {number} k
   * @param {number[]} nums
   */
  static createNew(k, nums) {
    return new KthLargest(k, nums);
  }
}

export default KthLargest;
