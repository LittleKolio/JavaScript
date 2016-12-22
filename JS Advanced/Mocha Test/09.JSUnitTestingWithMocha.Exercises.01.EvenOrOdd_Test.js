let isOddOrEven = require('../09.JSUnitTestingWithMocha.Exercises/01.EvenOrOdd').isOddOrEven;

let expect = require('chai').expect;


describe("Test group #1", function() {
    // it("should return … when …", function() {
    //     expect(isOddOrEven('123456')).to.equal('even');
    // });

    // it("should return … when …", function() {
    //     expect(isOddOrEven('12345')).to.equal('odd');
    // });
    //
    // it("should return … when …", function() {
    //     expect(isOddOrEven(null)).to.equal(undefined);
    // });
    //
    it("should return … when …", function() {
        expect(isOddOrEven('klkjkl')).to.equal(undefined, 'blablabblabla');
    });

    it("should return … when …", function() {
        expect(isOddOrEven({name: '1234'}).to.equal(undefined);
    });
});

// describe("Test group #2", function() {
//     it("should return … when …", function() {
//         expect(actual).to.equal(expected);
//     });
// });