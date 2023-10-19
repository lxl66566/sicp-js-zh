const zero = (f) => (x) => x;

function add_1(n) {
	return (f) => (x) => f(n(f)(x));
}

const one = (f) => (x) =>
	f(
		(
			(f) => (x) =>
				x
		)(f)(x),
	);

// uncompleted
