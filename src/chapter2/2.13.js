const { pair, head, tail, is_pair, print } = require("./2");
const {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
} = require("./2.7");
const {
	make_center_percent,
	percent,
	make_center_width,
	center,
	width,
} = require("./2.12");

function percent_of_mul_interval(x, y) {
	return percent(x) + percent(y);
}

let a = make_center_percent(100, 0.15); // 0.15999999999999995
let b = make_center_percent(20, 0.01); // 0.1597603594608088
print(percent_of_mul_interval(a, b));
print(percent(mul_interval(a, b)));

a = make_center_percent(100, 0.3); // 0.15999999999999995
b = make_center_percent(20, 0.2); // 0.1597603594608088
print(percent_of_mul_interval(a, b)); //0.5
print(percent(mul_interval(a, b))); //0.4716981132075472
