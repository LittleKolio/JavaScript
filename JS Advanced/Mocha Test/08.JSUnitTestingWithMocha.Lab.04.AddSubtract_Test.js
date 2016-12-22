let createCalculator = require('../08.JSUnitTestingWithMocha.Lab/04.AddSubtract').createCalculator;

let expect = require('chai').expect;

describe('createCalculator Test group #1', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it('get() should return 0', function () {
        expect(calc.get()).to.equal(0);
    });
    it('get() should return 5', function () {
        calc.add(3); calc.add(2);
        expect(calc.get()).to.equal(5);
    });
    it('get() should return 4.1(9)', function () {
        calc.add(5.3); calc.subtract(1.1);
        expect(calc.get()).to.equal(5.3 - 1.1);
    });
    it('get() should return -5', function () {
        calc.subtract(3); calc.subtract(2);
        expect(calc.get()).to.equal(-5);
    });
    it('get() should return 2', function () {
        calc.add(10);calc.subtract('7');calc.add('-2');calc.subtract(-1);
        expect(calc.get()).to.equal(2);
    });
    it('get() should return 2', function () {
        calc.add('haha');
        expect(calc.get()).to.equal(NaN);
    });
    it('get() should return 2', function () {
        calc.subtract('haha');
        expect(calc.get()).to.equal(NaN);
    });
});