const { print, head, tail, list, index, assert_eq } = require("./2");

const us_coins = list(50, 25, 10, 5, 1);
function cc(amount, coin_values) {
	return amount === 0
		? 1
		: amount < 0 || coin_values === null
		? 0
		: cc(amount, tail(coin_values)) +
		  cc(amount - head(coin_values), coin_values);
}
print(cc(100, us_coins));

// 不影响。
