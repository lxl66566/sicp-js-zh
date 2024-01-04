const {
	pair,
	head,
	tail,
	is_pair,
	to_string,
	print,
	list,
	index,
	length,
	append,
	assert_eq,
} = require("./2");

assert_eq(list(1, 2, 3), pair(1, pair(2, pair(3, null))));
assert_eq(length(list(1, 2, 3)), 3);
assert_eq(index(list(1, 2, 3), 1), 2);
assert_eq(append(list(1, 2, 3), list(4, 5, 6)), list(1, 2, 3, 4, 5, 6));
