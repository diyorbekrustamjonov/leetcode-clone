function createElements (...array) {
	return array.map(el => document.createElement(el))
}