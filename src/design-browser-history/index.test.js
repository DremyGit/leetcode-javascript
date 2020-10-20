import BrowserHistory from './';

describe('1472. Design Browser History:', () => {
  test('Example 1', () => {
    const obj = new BrowserHistory('leetcode.com');
    obj.visit('google.com');
    obj.visit('facebook.com');
    obj.visit('youtube.com');
    expect(obj.back(1)).toEqual('facebook.com');
    expect(obj.back(1)).toEqual('google.com');
    expect(obj.forward(1)).toEqual('facebook.com');
    obj.visit('linkedin.com');
    expect(obj.forward(2)).toEqual('linkedin.com');
    expect(obj.back(2)).toEqual('google.com');
    expect(obj.back(2)).toEqual('leetcode.com');
  });
});
