const { pair, print, head, tail, list, index, assert_eq, map } = require("./2");

function square(x) {
	return x * x;
}

// 1 一定跟 null 绑在一个 pair 里。
function square_list(items) {
	function iter(things, answer) {
		return things == null
			? answer
			: iter(tail(things), pair(answer, square(head(things))));
	}
	return iter(items, null);
}

print(square_list(list(1, 2, 3, 4)));
