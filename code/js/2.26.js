const { list, is_pair, head, tail, append, pair, print } = require("./2");

const x = list(1, 2, 3);
const y = list(4, 5, 6);

print(append(x, y));
print(pair(x, y));
print(list(x, y));

// list(1, 2, 3, 4, 5, 6)
// pair(list(1, 2, 3), list(4, 5, 6))
//

// [1, [2, [3, [4, [5, [6, null]]]]]]
// [[1, [2, [3, null]]], [4, [5, [6, null]]]]
// [[1, [2, [3, null]]], [[4, [5, [6, null]]], null]]
