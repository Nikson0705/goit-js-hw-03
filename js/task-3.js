function filterArray(numbers, value) {
	const clearnArray = []
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] > value) {
			clearnArray.push(numbers[i])
		}
	}
	return clearnArray
}