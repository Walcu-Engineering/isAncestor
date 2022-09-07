const isAncestor = require('./index.js'); 

describe('isAncestor', () => {
  test('Empty string is ancestor of a longer path', () => {
    expect(isAncestor('', '/a')).toBe(true);
  });
  test('The path "/a" is ancestor of path "/a/b"', () => {
    expect(isAncestor('/a', '/a/b')).toBe(true);
  });
  test('The path "/a/b" is not ancestor of path "/a"', () => {
    expect(isAncestor('/a/b', '/a')).toBe(false);
  });
  test('Paths that starts the same way dont mean to be ancestors', () => {
    expect(isAncestor('/a', '/aa/b')).toBe(false);
  });
});
