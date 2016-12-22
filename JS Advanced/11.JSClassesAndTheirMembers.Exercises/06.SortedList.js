class something {
    constructor() {
        this.arrNums = [];
        // this.size = 0;
    }

    sort() {
        // this.size = this.arrNums.length;
        return this.arrNums.sort((f, s) => f - s);
    }
    add(num) {
        if (!(typeof num == 'number'))
            throw new Error('hahaha :P');
        else
            this.arrNums.push(num);
        return this.sort();
    }
    remove(index) {
        let arr = this.arrNums;
        if (!(Number.isInteger(index)) ||
            index > arr.length - 1 ||
            index < 0)
            throw new Error('hahaha :P');
        else
            this.arrNums = arr.filter(
                k => arr.indexOf(k) != index
            );
        return this.sort();
    }
    get(index) {
        let arr = this.arrNums;
        if (!(Number.isInteger(index)) ||
            index > arr.length - 1 ||
            index < 0)
            throw new Error('hahaha :P');
        else
            return arr[index];
    }
    get size() {
        return this.arrNums.length;
    }
}

let some = new something();
some.add(1);
some.add(-0.3);
some.add(33);
some.add(6);
some.add(9);
some.remove(2);
some.remove(0);
console.log(some.arrNums);
console.log(some.size);