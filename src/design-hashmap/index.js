/**
 * Your MyHashMap object will be instantiated and called as such:
 * ```js
  var obj = Object.create(MyHashMap).createNew()

  obj.put(key,value)
  var param_2 = obj.get(key)
  obj.remove(key)
 ```
 * @author Dremy <dremy@dremy.cn>
 */
class MyHashMap {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.hashMap = {};
  }

  /**
   * value will always be non-negative.
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.hashMap[key] = value;
  }

  /**
   * Returns the value to which the specified key is mapped,
   * or -1 if this map contains no mapping for the key
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (typeof this.hashMap[key] === 'undefined') {
      return -1;
    }
    return this.hashMap[key];
  }

  /**
   * Removes the mapping of the specified value key
   * if this map contains a mapping for the key
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    delete this.hashMap[key];
  }

  /**
   * instantiate
   */
  static createNew() {
    return new MyHashMap();
  }
}

export default MyHashMap;
