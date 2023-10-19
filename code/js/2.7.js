const { pair, head, tail, is_pair, print } = require("./2");
const assert = require("assert");

function add_interval(x, y) {
	return make_interval(
		lower_bound(x) + lower_bound(y),
		upper_bound(x) + upper_bound(y),
	);
}
function mul_interval(x, y) {
	const p1 = lower_bound(x) * lower_bound(y);
	const p2 = lower_bound(x) * upper_bound(y);
	const p3 = upper_bound(x) * lower_bound(y);
	const p4 = upper_bound(x) * upper_bound(y);
	return make_interval(Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4));
}
function div_interval(x, y) {
	return mul_interval(x, make_interval(1 / upper_bound(y), 1 / lower_bound(y)));
}
function make_interval(x, y) {
	return pair(x, y);
}

function lower_bound(x) {
	assert(is_pair(x));
	return Math.min(head(x), tail(x));
}
function upper_bound(x) {
	assert(is_pair(x));
	return Math.max(head(x), tail(x));
}

// const a = make_interval(1, 2);
// const b = make_interval(3, 4);
// console.log(lower_bound(a));
// console.log(upper_bound(b));
// print(mul_interval(a, b));
// print(div_interval(a, b));

// 1
// 4
// [3, 8]
// [0.25, 0.6666666666666666]

module.exports = {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
};
