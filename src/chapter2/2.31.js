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

const square = (x) => x * x;

function tree_map(func, tree) {
	return tree === null
		? null
		: !is_pair(tree)
		? func(tree)
		: pair(tree_map(func, head(tree)), tree_map(func, tail(tree)));
}

function square_tree(tree) {
	return tree_map(square, tree);
}

square_tree(list(1, list(2, list(3, 4), 5), list(6, 7)));

const x = list(1, list(2, list(3, 4), 5), list(6, 7));

const ret = square_tree(x);
print(ret);

assert_eq(ret, list(1, list(4, list(9, 16), 25), list(36, 49)));
