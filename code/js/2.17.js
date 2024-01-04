const { head, tail, print, list, assert_eq } = require("./2");
function last_pair(l) {
	return tail(l) === null ? l : last_pair(tail(l));
}
assert_eq(last_pair(list(1, 2, 3, 4)), list(4));
