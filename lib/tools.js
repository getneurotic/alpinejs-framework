function kebabize(str) {
	return str.split('').map((letter, idx) => {
		return letter.toUpperCase() === letter
			? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
			: letter;
	}).join('');
}

function uniqid() {
	return 'a' + (Date.now() * 1000 + Math.random() * 1000)
		.toString(16)
		.replace(/\./g, '')
		.padEnd(14, '0')
}

module.exports = { kebabize, uniqid }