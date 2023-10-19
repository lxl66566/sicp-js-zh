const { pair, head, tail, is_pair, print } = require("./2");
const {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
} = require("./2.7");

function make_center_width(c, w) {
	return make_interval(c - w, c + w);
}
function center(i) {
	return (lower_bound(i) + upper_bound(i)) / 2;
}
function width(i) {
	return (upper_bound(i) - lower_bound(i)) / 2;
}

function percent(interval) {
	return width(interval) / center(interval);
}

function make_center_percent(center, percent) {
	return make_center_width(center, center * percent);
}

// print(make_center_percent(10, 0.1));
// print(percent(make_center_percent(10, 0.1)));

// [9, 11]
// 0.1

module.exports = {
	make_center_percent,
	percent,
	make_center_width,
	center,
	width,
};
