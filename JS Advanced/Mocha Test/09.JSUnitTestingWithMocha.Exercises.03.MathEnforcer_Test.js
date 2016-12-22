let mathEnforcer = require(
    '../09.JSUnitTestingWithMocha.Exercises/03.MathEnforcer'
).mathEnforcer;

let expect = require('chai').expect;

describe('mathEnforcer Test group #1', function() {
    it('pass num [4] should return undefined', function () {
        expect(mathEnforcer.addFive([4])).to.equal(undefined);
    });
    it('pass num 3.14 should return 8.14', function () {
        expect(mathEnforcer.addFive(3.14)).to.equal(8.14);
    });
    it('pass num -2.11 should return 5', function () {
        expect(mathEnforcer.addFive(-2.11)).to.equal(5 - 2.11);
    });
    it('pass num null should return 5', function () {
        expect(mathEnforcer.addFive()).to.equal(undefined);
    });
});

describe('mathEnforcer Test group #1', function() {
    it('pass num [4] should return undefined', function () {
        expect(mathEnforcer.subtractTen([4])).to.equal(undefined);
    });
    it('pass num 3.14 should return 6.85(9)', function () {
        expect(mathEnforcer.subtractTen(3.14)).to.equal(3.14 - 10);
    });
    it('pass num -2.11 should return -12.11', function () {
        expect(mathEnforcer.subtractTen(-2.11)).to.equal(-12.11);
    });
    it('pass num null should return 5', function () {
        expect(mathEnforcer.subtractTen()).to.equal(undefined);
    });
});

describe('mathEnforcer Test group #1', function() {
    it('pass num -2.11 and 1 should return -1.10(9)', function () {
        expect(mathEnforcer.sum(-2.11, 1)).to.equal(1 - 2.11);
    });
    it('pass num [4] and {num: 6} should return undefined', function () {
        expect(mathEnforcer.sum([4], {num: 6})).to.equal(undefined);
    });
    it('pass num 7 and 3 should return 3.14', function () {
        expect(mathEnforcer.sum(7, 3)).to.equal(10);
    });
    it('pass num 3.14 and 0 should return 3.14', function () {
        expect(mathEnforcer.sum()).to.equal(undefined);
    });
    it('pass num 3.14 should return 3.14', function () {
        expect(mathEnforcer.sum(3.14)).to.equal(undefined);
    });
});