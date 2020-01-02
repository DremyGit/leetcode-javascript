/**
 * Initialize your data structure here.
 */
const RandomizedSet = function() {
  this.map = {};
};

/**
 * Inserts a value to the set.
 * Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.map[val]) {
    return false;
  }
  return this.map[val] = true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (this.map[val]) {
    delete this.map[val];
    return true;
  }
  return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  const keys = Object.keys(this.map);
  const len = keys.length;
  const randomIndex = Math.floor(Math.random() * len);
  return +keys[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export default RandomizedSet;
