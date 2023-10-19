function pair(x, y) {
	return (m) =>
		m === 0 ? x : m === 1 ? y : error(m, "argument not 0 or 1 – pair");
}
function head(iter) {
	return iter(0);
}
function tail(iter) {
	return iter(1);
}
function is_pair(z) {
	// 书中未给出具体实现。
	return typeof z === "function";
}
function print(z) {
	function to_string(z) {
		if (!is_pair(z)) {
			return z.toString();
		} else {
			return `[${to_string(head(z))}, ${to_string(tail(z))}]`;
		}
	}
	console.log(to_string(z));
}
module.exports = {
	pair,
	head,
	tail,
	is_pair,
	print,
};
