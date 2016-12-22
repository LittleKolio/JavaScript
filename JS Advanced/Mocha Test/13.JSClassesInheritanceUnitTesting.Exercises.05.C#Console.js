let expect = require('chai').expect;

class Console {
    static get placeholder() {return /{\d+}/g;}
    static writeLine() {
        let message = arguments[0];
        if (arguments.length === 1) {

            if (typeof (message) === 'object') {
                message = JSON.stringify(message);
                return message;
            } else if (typeof(message) === 'string') {
                return message;
            }

        } else {

            if (typeof (message) !== 'string') {
                throw new TypeError("No string format given!");
            } else {
                var placeholders = message.match(this.placeholder).sort(function (a, b) {
                    a = Number(a.substring(1, a.length - 1));
                    b = Number(b.substring(1, b.length - 1));
                    return a - b;
                });
                if (placeholders.length !== (arguments.length - 1)) {
                    throw new RangeError("Incorrect amount of parameters given!");
                } else {
                    for (let i = 0; i < placeholders.length; i++) {
                        let number = Number(placeholders[i].substring(1, placeholders[i].length - 1));
                        if (number !== i) {
                            throw new RangeError("Incorrect placeholders given!");
                        } else {
                            message = message.replace(placeholders[i], arguments[i + 1])
                        }
                    }
                    return message;
                }
            }
        }
    }
}

describe('Test group 1', function() {
    it('something 1', function() {
        expect(typeof Console)
            .to.equal('function', 'Test Passed!');
        expect(Console.hasOwnProperty('writeLine', 'Test Passed!'))
            .to.true;
    });
    it('something 2', function() {
        expect(Console.writeLine('#%{0}&')).to.equal('#%{0}&');
        expect(Console.writeLine({name: 'Bubu', animal: 'bear'}))
            .to.equal('{"name":"Bubu","animal":"bear"}');
    });

    it('something 3', function() {
        expect(() => {Console.writeLine({arg: 'test'},  '1234')})
            .to.throw(TypeError)
    });

    it('something 4', function() {
        expect(() => {Console.writeLine('#%{0}&', '1234', 12)})
            .to.throw(RangeError);
        expect(() => {Console.writeLine('{1}#%{0}& sdfg{2}', '1234', 12)})
            .to.throw(RangeError);
        expect(() => {Console.writeLine('{11}#%{0}& sdfg', '1234', 12)})
            .to.throw(RangeError);
    });

    it('something 5', function() {
        expect(Console.writeLine('{1}#%{0}& sdfg', '1234', 12))
            .to.equal('12#%1234& sdfg');
    });
});