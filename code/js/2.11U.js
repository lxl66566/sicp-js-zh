const { pair, head, tail, is_pair, print } = require("./2");
const {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
} = require("./2.7");

function mul_interval(x, y) {
	// alias
	const x1 = lower_bound(x);
	const x2 = upper_bound(x);
	const y1 = lower_bound(y);
	const y2 = upper_bound(y);
	if (x1 < 0 && y1 < 0 && x2 > 0 && y2 > 0)
		return make_interval(y1 * y2, x1 * x2);
}
