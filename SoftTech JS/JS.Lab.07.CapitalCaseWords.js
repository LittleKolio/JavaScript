function capitalLetters (arr) {
	let text = arr.join (',');
	let words = text.split (/\W+/).filter (x => x != '');
	let capital = words.filter (x => x.toUpperCase () == x);
	console.log (capital.join (', '));
}
