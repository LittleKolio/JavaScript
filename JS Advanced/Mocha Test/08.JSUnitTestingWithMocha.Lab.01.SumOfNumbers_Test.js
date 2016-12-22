let sum = require('../08.JSUnitTestingWithMocha.Lab/01.SumOfNumbers').sum;

// console.log(
//     sum([2, 3])
// );

let expect = require('chai').expect;
describe('sum(arr) - sum array of numbers', function () {
    it('should return 3 for [1, 2]', function () {
        expect(sum([1, 2])).to.equal(3);
    });
    it('should return 1 for [1]', function () {
        expect(sum([1])).to.equal(1);
    });
    it('should return 0 for empty array', function () {
        expect(sum([])).to.equal(0);
    });
    it('should return 3 for [1.5, 2.5, -1]', function () {
        expect(sum([1.5, 2.5, -1])).to.equal(3);
    });
    it('should return NaN for invalid data', function () {
        expect(sum(['a', 'fdsfsd'])).to.equal.NaN;
    });
});
