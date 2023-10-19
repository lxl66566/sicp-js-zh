const { pair, head, tail, is_pair, print } = require("./2");
const {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
} = require("./2.7");

print(div_interval(make_interval(1, 10), make_interval(0, 0)));
// [Infinity, Infinity]
function div_interval_warning(x, y) {
	if (lower_bound(y) === 0 || upper_bound(y) === 0)
		return "divided by 0 interval!";
	return div_interval(x, y);
}

print(div_interval_warning(make_interval(1, 10), make_interval(0, 0)));
