const {
	list,
	is_pair,
	head,
	tail,
	append,
	pair,
	print,
	map,
	assert_eq,
} = require("./2");

// 递归解法
// function square_tree(tree) {
// 	return tree === null
// 		? null
// 		: !is_pair(tree)
// 		? tree * tree
// 		: pair(square_tree(head(tree)), square_tree(tail(tree)));
// }

// 高阶解法
function square_tree(tree) {
	return map(
		(x) => (x === null ? null : is_pair(x) ? square_tree(x) : x * x),
		tree,
	);
}

square_tree(list(1, list(2, list(3, 4), 5), list(6, 7)));

const x = list(1, list(2, list(3, 4), 5), list(6, 7));

const ret = square_tree(x);
print(ret);

assert_eq(ret, list(1, list(4, list(9, 16), 25), list(36, 49)));
