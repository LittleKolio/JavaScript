function symmetricNums (arr) {
	let n = Number (arr [0]);

	for (let i = 1; i <= n; i++) {
		if (isSymmetric ('' + i)) {
			console.log (i);
		}		
	}
	function isSymmetric (str) {
		for (let i = 0; i <= str.length / 2; i++) {
			if (str [i] != str [str.length - 1 - i]) {
				return false;
			}
		}
		return true;
	}
}