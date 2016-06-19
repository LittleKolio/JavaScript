function printObj(arr) {
	let objects = arr.map (JSON.parse);
	let townSum = {};
	for (let obj of objects) {
		townSum [obj.town] = townSum [obj.town] || 0;
		townSum [obj.town] += obj.income
	}
	let towns = Object.keys (townSum);
	towns.sort ();
	for (let t of towns) {
		console.log (`${t} -> ${townSum [t]}`);
	}
}