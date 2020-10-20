/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.history = [homepage];
    this.index = 0;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    if (this.index < this.history.length - 1) {
      this.history.splice(this.index + 1, this.history.length - this.index - 1);
    }
    this.history.push(url);
    this.index++;
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    this.index = Math.max(0, this.index - steps);
    return this.history[this.index];
  }

  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    this.index = Math.min(this.history.length - 1, this.index + steps);
    return this.history[this.index];
  }
}

export default BrowserHistory;
