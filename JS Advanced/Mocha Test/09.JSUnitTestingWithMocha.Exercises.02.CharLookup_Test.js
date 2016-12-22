let lookupChar = require(
    '../09.JSUnitTestingWithMocha.Exercises/02.CharLookup'
).lookupChar;

let expect = require('chai').expect;

describe('Test roup #1', function() {
    it('passing "0123456" should return 3', function () {
        expect(lookupChar('0123456', 0)).to.equal('0');
    });
    it('passing "0123456" should return 3', function () {
        expect(lookupChar('0123456', 6)).to.equal('6');
    });

    it('passing "0123456" should return 3', function () {
        expect(lookupChar('0123456', -1)).to.equal('Incorrect index');
    });
    it('passing "0123456" should return 3', function () {
        expect(lookupChar('0123456', 7)).to.equal('Incorrect index');
    });

    it('passing "0123456" should return 3', function () {
        expect(lookupChar('0123456', 3.14)).to.equal(undefined);
    });
    it('passing "0123456" should return 3', function () {
        expect(lookupChar('0123456', '6')).to.equal(undefined);
    });
    it('passing "0123456" should return 3', function () {
        expect(lookupChar(['0123456'], 6)).to.equal(undefined);
    });

    it('passing "0123456" should return 3', function () {
        expect(lookupChar()).to.equal(undefined);
    });
});