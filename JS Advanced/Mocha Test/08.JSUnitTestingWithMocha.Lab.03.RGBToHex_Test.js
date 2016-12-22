let rgbToHexColor = require('../08.JSUnitTestingWithMocha.Lab/02.CheckForSymmetry').isSymmetric;

let expect = require('chai').expect;

describe('rgbToHexColor Test group False', function () {
    it('should return false for -1,0,0', function () {
        expect(rgbToHexColor(-1,0,0)).to.equal(undefined);
    });
    it('should return false for 0,-1,0', function () {
        expect(rgbToHexColor(0,-1,0)).to.equal(undefined);
    });
    it('should return false for 0,0,-1', function () {
        expect(rgbToHexColor(0,0,-1)).to.equal(undefined);
    });

    it('should return false for 256,0,0', function () {
        expect(rgbToHexColor(256,0,0)).to.equal(undefined);
    });
    it('should return false for 0,256,0', function () {
        expect(rgbToHexColor(0,256,0)).to.equal(undefined);
    });
    it('should return false for 0,0,256', function () {
        expect(rgbToHexColor(0,0,256)).to.equal(undefined);
    });

    it('should return false for 3.14,0,0', function () {
        expect(rgbToHexColor(3.14,0,0)).to.equal(undefined);
    });
    it('should return false for 0,3.14,0', function () {
        expect(rgbToHexColor(0,3.14,0)).to.equal(undefined);
    });
    it('should return false for 0,0,3.14', function () {
        expect(rgbToHexColor(0,0,3.14)).to.equal(undefined);
    });

    it('should return false for "5",[3],{8:9},(empty input)', function () {
        expect(rgbToHexColor("5",[3],{8:9},null)).to.equal(undefined);
    });
});

describe('rgbToHexColor Test group True', function () {
    it('should return true for 255, 158, 170', function () {
        expect(rgbToHexColor(255, 158, 170)).to.equal('#FF9EAA');
    });
    it('should return true for 12, 13, 14', function () {
        expect(rgbToHexColor(12, 13, 14)).to.equal('#0C0D0E');
    });
    it('should return true for 0, 0, 0', function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('should return true for 255, 255, 255', function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    })
});