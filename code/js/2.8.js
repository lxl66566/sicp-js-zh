const { pair, head, tail, is_pair, print } = require("./2");
const {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
} = require("./2.7");

function sub_interval(x, y) {
	// x - y
	return make_interval(
		lower_bound(x) - upper_bound(y),
		upper_bound(x) - lower_bound(y),
	);
}

print(sub_interval(make_interval(1, 2), make_interval(1, 3)));
// [-2, 1]
