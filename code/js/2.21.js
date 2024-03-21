const { print, head, tail, list, index, assert_eq, map } = require("./2");

function square_list(items) {
	return map((x) => x * x, items);
}

print(square_list(list(1, 2, 3, 4)));
