const { pair, head, tail, print, list, append, assert_eq } = require("./2");
function reverse(l) {
	return l === null ? null : append(reverse(tail(l)), list(head(l)));
}
assert_eq(reverse(list(1, 2, 3, 4)), list(4, 3, 2, 1));
