# isAncestor
Check if a JSON Pointer path is ancestor of another path

## API
### `isAncestor(path1, path2)`
Both `path1` and `path2` are expected to be strings that are paths in JSON Pointer format as defined by the RFC6901.
This function returns `true` if the `path1` is an ancestor of `path2`, `false` if not. And if any of the arguments are not
a valid JSON Pointer strings, then the function will throw an error.
