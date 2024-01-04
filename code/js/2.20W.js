const { print, head, tail, list, index, assert_eq } = require("./2");

function plus_curried(x) {
	return (y) => x + y;
}
assert_eq(plus_curried(3)(4), 7);

function brooks(f, l) {
	if (l === null) return 0;
	return f(head(l))(brooks(f, tail(l)));
}

assert_eq(brooks(plus_curried, list(1, 2, 3, 4, 5)), 15);

function brooks_curried(l) {
	return brooks(head(l), tail(l));
}
// 疑问：这里的操作真的是柯里化吗？

print(brooks_curried(list(plus_curried, 3, 4)));

print(brooks_curried(list(brooks_curried, list(plus_curried, 3, 4))));

// print(
// 	brooks_curried(
// 		list(brooks_curried, list(brooks_curried, list(plus_curried, 3, 4))),
// 	),
// );
