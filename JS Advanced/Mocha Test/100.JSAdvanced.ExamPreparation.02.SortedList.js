let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

class SortedList {
    constructor() { this.list = []; }
    add(element) {
        this.list.push(element);
        this.sort();
    }
    remove(index) {
        this.vrfyRange(index);
        this.list.splice(index, 1);
    }
    get(index) {
        this.vrfyRange(index);
        return this.list[index];
    }
    vrfyRange(index) {
        if (this.list.length == 0) throw new Error("Collection is empty.");
        if (index < 0 || index >= this.list.length) throw new Error("Index was outside the bounds of the collection.");
    }
    sort() {
        this.list.sort((a, b) => a - b);
    }
    get size() {
        return this.list.length;
    }
}

describe('Test group #1', function() {
    let testList;
    beforeEach(function() {
        testList = new SortedList();
    });

    // 1.
    it('constructor', function() {
        expect(typeof SortedList)
            .to.equal('function');
        expect(SortedList.prototype.hasOwnProperty('add'))
            .to.true;
        expect(SortedList.prototype.hasOwnProperty('remove'))
            .to.true;
        expect(SortedList.prototype.hasOwnProperty('get'))
            .to.true;
        expect(SortedList.prototype.hasOwnProperty('size'))
            .to.true;
    });
    // 2.
    it('size', function() {
        expect(testList.size)
            .to.equal(0);
    });

    it('add(7) then size = 1', function() {
        testList.add(7);
        expect(testList.size)
            .to.equal(1);
    });

    it('get(0) before add(7) then size = 7', function() {
        testList.add(7);
        expect(testList.get(0))
            .to.equal(7);
    });

    it('sort() before add(7,3.14,-2,99) then get(0,1,2,3)', function() {
        testList.add(7);
        testList.add(3.14);
        testList.add(-2);
        testList.add(99);
        expect(testList.get(0)).to.equal(-2);
        expect(testList.get(1)).to.equal(3.14);
        expect(testList.get(2)).to.equal(7);
        expect(testList.get(3)).to.equal(99);
        expect(testList.size).to.equal(4);
    });

    it('sort() before add(7,3.14,-2,99) and remove(1) then get(0,1,2,3)', function() {
        testList.add(7);
        testList.add(3.14);
        testList.add(-2);
        testList.add(99);
        testList.remove(1);
        expect(testList.get(0)).to.equal(-2);
        expect(testList.get(1)).to.equal(7);
        expect(testList.get(2)).to.equal(99);
        expect(testList.size).to.equal(3);
    });

    it('Error before add(7,3.14,-2) then get() and remove()', function() {
        testList.add(7);
        testList.add(3.14);
        testList.add(-2);

        expect(() => testList.get(-1))
            .to.throw(Error);
        expect(() => testList.remove(99))
            .to.throw(Error);
    });

    it('empty list then get() and remove()', function() {
        expect(() => testList.get(0))
            .to.throw(Error);
        expect(() => testList.remove(0))
            .to.throw(Error);
    });
});
