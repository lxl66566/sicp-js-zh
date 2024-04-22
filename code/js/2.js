const assert = require("assert");
function pair(x, y) {
	const p = (m) =>
		m === 0 ? x : m === 1 ? y : error(m, "argument not 0 or 1 – pair");
	p.isPair = true;
	return p;
}
function head(iter) {
	return iter(0);
}
function tail(iter) {
	return iter(1);
}
function is_pair(z) {
	// 书中未给出具体实现。
	return typeof z === "function" && z.isPair === true;
}
function is_null(z) {
	return z === null;
}
function to_string(z) {
	if (z === null) return "null";
	else if (!is_pair(z)) {
		return z.toString();
	} else {
		return `[${to_string(head(z))}, ${to_string(tail(z))}]`;
	}
}
function print(z) {
	console.log(to_string(z));
}
function list(...temp) {
	let l = null;
	if (!temp) return l;
	for (const i of temp.toReversed()) {
		l = pair(i, l);
	}
	return l;
}
function index(items, n) {
	return n === 0 ? head(items) : index(tail(items), n - 1);
}
const length = (items) => (items === null ? 0 : 1 + length(tail(items)));
const append = (list1, list2) =>
	list1 === null ? list2 : pair(head(list1), append(tail(list1), list2));

// 本质上 pair 是 function, 因此需要转成 string 才能判断相等
const assert_eq = (a, b) => assert(to_string(a) === to_string(b));

const map = (func, items) => {
	return items === null
		? null
		: pair(func(head(items)), map(func, tail(items)));
};

const filter = (func, items) => {
	return items === null
		? null
		: func(head(items))
		? pair(head(items), filter(func, tail(items)))
		: filter(func, tail(items));
};

const for_each = (func, items) => {
	if (items === null) {
		return null;
	}
	func(head(items));
	return for_each(func, tail(items));
};

module.exports = {
	pair,
	head,
	tail,
	is_pair,
	is_null,
	to_string,
	print,
	list,
	index,
	length,
	append,
	assert_eq,
	filter,
	map,
	for_each,
};
