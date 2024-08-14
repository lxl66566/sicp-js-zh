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

function reverse(l) {
	return l === null ? null : append(reverse(tail(l)), list(head(l)));
}

function deep_reverse(l) {
	return l === null ? null : !is_pair(l) ? l : reverse(map(deep_reverse, l));
}

const x = list(list(1, 2), list(3, 4));
assert_eq(deep_reverse(x), list(list(4, 3), list(2, 1)));
