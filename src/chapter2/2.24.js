const { list, is_pair, head, tail } = require("./2");

// 图 2.6 太反直觉了吧。。

function count_leaves(x) {
	return x === null
		? 0
		: !is_pair(x)
		? 1
		: count_leaves(head(x)) + count_leaves(tail(x));
}

console.log(count_leaves(list(1, list(2, list(3, 4)))));
// 4
