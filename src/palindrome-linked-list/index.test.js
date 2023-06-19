import isPalindrome from './';
import { makeLinkList } from '../utils';

describe('234. Palindrome Linked List:', () => {
  test('Example 1', () => {
    expect(isPalindrome(makeLinkList([1, 2, 2, 1]))).toBe(true);
  });
  test('Example 2', () => {
    expect(isPalindrome(makeLinkList([1, 2]))).toBe(false);
  });
  test('Example 3', () => {
    expect(isPalindrome(makeLinkList([1, 2, 3, 2, 1]))).toBe(true);
  });
  test('Example 4', () => {
    expect(isPalindrome(makeLinkList([1]))).toBe(true);
  });
});
