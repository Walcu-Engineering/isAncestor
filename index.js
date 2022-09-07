const isJsonPointer = require('@walcu-engineering/isjsonpointer');
const assert = require('assert');
/**
 * This function returns true if path1 is an ancestor path of path2
 * Example:
 * path1 = "/this/path
 * path2 = "/this/path/is/deeper
 * The function returns true because path1 is ancestor of path2
 *
 * Example:
 * path1 = "/this/path/is/deeper
 * path2 = "/this/path
 *
 * @path1: String representing a JSON Pointer path
 * @path2: String representing a JSON Pointer path
 * return: Boolean
 */

const isAncestor = (path1, path2) => {
  assert(isJsonPointer(path1), `${path1} is not a JSON pointer path`);
  assert(isJsonPointer(path2), `${path2} is not a JSON pointer path`);
  return path2.startsWith(path1) && (!path2.at(path1.length) || path2.at(path1.length) === '/');
}

module.exports = isAncestor;
