function makeArray(firstArray, secondArray, maxLength) {
	const jointArray = firstArray.concat(secondArray)
	if (jointArray.length > maxLength) {
		return jointArray.slice(0, maxLength)
	} else {
		return jointArray
	}
}