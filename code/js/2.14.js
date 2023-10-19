const { pair, head, tail, is_pair, print } = require("./2");
const {
	add_interval,
	mul_interval,
	div_interval,
	make_interval,
	lower_bound,
	upper_bound,
} = require("./2.7");

function par1(r1, r2) {
	return div_interval(mul_interval(r1, r2), add_interval(r1, r2));
}
const one = make_interval(1, 1);
function par2(r1, r2) {
	return div_interval(
		one,
		add_interval(div_interval(one, r1), div_interval(one, r2)),
	);
}

const a = make_interval(3, 4);
const b = make_interval(4, 5);
print(par1(a, b)); // [1.3333333333333333, 2.8571428571428568]
print(par2(a, b)); // [1.7142857142857144, 2.2222222222222223]

// 加法乘法会不同程度地“扩张”区间
