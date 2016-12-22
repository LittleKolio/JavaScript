function result() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon)
                throw new Error(
                    'Abstract class cannot be instantiated directly'
                );
            this.weight = weight;
            this.melonSort = melonSort;
            this.element = this.constructor.nameObj.slice(0, -5);
        }
        get elementIndex() {
            return this.weight * this.melonSort.length;
        }
        toString() {
            return `Element: ${this.element}\n` +
                `Sort: ${this.melonSort}\n` +
                `Element Index: ${this.elementIndex}`;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
        }
    }
    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
            this.array = ['Fire', 'Earth', 'Air', 'Water'];
        }
        morph() {
            let currElement = this.array.shift();
            this.element = currElement;
            this.array.push(currElement);
        }
    }
    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}
