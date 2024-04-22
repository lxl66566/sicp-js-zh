const {
	list,
	is_null,
	head,
	tail,
	append,
	pair,
	print,
	map,
	assert_eq,
} = require("./2");

const x = list(1, 2, 3);

// 不会，看了题解
function subsets(s) {
	if (is_null(s)) {
		return list(null);
	} else {
		const rest = subsets(tail(s));
		return append(
			map((x) => pair(head(s), x), rest),
			rest,
		);
	}
}

const ret = subsets(x);

print(ret);
