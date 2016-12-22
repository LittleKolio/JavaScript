class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite(otherRat) {
        if (otherRat.constructor.nameObj == this.constructor.nameObj)
            this.unitedRats.push(otherRat);
    }
    getRats() {
        return this.unitedRats;
    }
    toString() {
        let text = this.name;
        this.unitedRats.forEach(r => {
            text += `\n##${r.nameObj}`
        });
        return text;
    }
}

let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
