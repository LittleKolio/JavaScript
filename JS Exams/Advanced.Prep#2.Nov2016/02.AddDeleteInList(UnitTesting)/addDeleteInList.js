let expect = require('chai').expect;
let jsdom = require('jsdom-global');
let $ = require('jquery');

// let list = (function(){
//     let data = [];
//     return {
//         add: function(item) {
//             data.push(item);
//         },
//         delete: function(index) {
//             if (Number.isInteger(index) && index >= 0 && index < data.length) {
//                 return data.splice(index, 1)[0];
//             } else {
//                 return undefined;
//             }
//         },
//         toString: function() {
//             return data.join(", ");
//         }
//     };
// })();

function listCopy(){
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('Test group', function() {

    let list;
    beforeEach(function() {
        list = listCopy();
    });

    // func
    it('func', function() {
        expect(typeof list.add).to.equal('function');
        expect(typeof list.delete).to.equal('function');
    });

    // empty
    it('empty', function() {
        expect(list.toString()).to.empty;
    });

    // add
    it('add 1 elements', function() {
        list.add('str');
        expect(list.toString()).to.equal('str');
    });
    it('add 3 elements', function() {
        list.add('str1');
        list.add(4);
        list.add(['li', 3]);
        expect(list.toString()).to.equal('str1, 4, li,3');
    });

    // delete
    it('delete index < 0', function() {
        expect(list.delete(-1)).to.equal(undefined);
    });
    it('delete index > length', function() {
        expect(list.delete(99)).to.equal(undefined);
    });
    it('delete index = string', function() {
        expect(list.delete('str1')).to.equal(undefined);
    });
    it('delete index = length', function() {
        list.add('str1');
        list.add(4);
        list.delete(2);
        expect(list.toString()).to.equal('str1, 4');
    });
    it('delete index = length', function() {
        list.add('str1');
        list.add(4);
        list.delete(0);
        expect(list.toString()).to.equal('4');
    });
    it('delete index = length', function() {
        expect(list.delete(0)).to.equal(undefined);
    });
});