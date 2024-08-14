// 2.5
function pair(x, y) {
	return 2 ** x * 3 ** y;
}
function head(z) {
	const iter = (t, m) => (m === 0 || m % 2 !== 0 ? t : iter(t + 1, m / 2));
	return iter(0, z);
}
function tail(z) {
	const iter = (t, m) => (m === 0 || m % 3 !== 0 ? t : iter(t + 1, m / 3));
	return iter(0, z);
}
console.log(pair(2, 3));
console.log(head(pair(2, 3)));
console.log(tail(pair(2, 3)));
