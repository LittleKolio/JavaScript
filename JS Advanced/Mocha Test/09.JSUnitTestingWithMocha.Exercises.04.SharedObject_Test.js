
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');


document.body.innerHTML = '<div id="wrapper">\n' +
    '<input type="text" id="name">\n' +
    '<input type="text" id="income">\n' +
    '</div>';


// let sharedObject = require(
//     '../09.JSUnitTestingWithMocha.Exercises/04.SharedObject'
// );

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('changeName Text group #1', function() {
    it('ne6o 1', function () {
        expect(sharedObject.name).to.equal(null);
    });
    it('ne6o 2', function () {
        expect(sharedObject.income).to.equal(null,  'hha');
    });

    it('ne6o 3', function () {
        sharedObject.changeName('');
        expect(sharedObject.name).to.equal(null);
    });
    it('ne6o 4', function () {
        sharedObject.name = 'Papi';
        sharedObject.changeName('');
        expect(sharedObject.name).to.equal('Papi');
    });

    it('ne6o 5', function () {
        sharedObject.changeName('Kaka');
        expect(sharedObject.name).to.equal('Kaka', 'adive');
    });
    it('ne6o 6', function () {
        sharedObject.changeName('Kaka');
        expect($('#name').val()).to.equal('Kaka', 'adive');
    });
    it('ne6o 7', function () {
        $('#name').val('Kaka')
        sharedObject.changeName('');
        expect($('#name').val()).to.equal('Kaka', 'adive');
    });
});

describe('changeIncome Text group #2', function() {
    it('ne6o 1', function () {
        expect(sharedObject.income).to.equal(null);
    });
    it('ne6o 2', function () {
        sharedObject.income = 12;
        sharedObject.changeIncome([3]);
        expect(sharedObject.income).to.equal(12,  'hha');
    });

    it('ne6o 3', function () {
        sharedObject.income = 12;
        sharedObject.changeIncome(3.14);
        expect(sharedObject.income).to.equal(12);
    });
    it('ne6o 4', function () {
        sharedObject.income = 12;
        sharedObject.changeIncome(-5);
        expect(sharedObject.income).to.equal(12);
    });
    it('ne6o 5', function () {
        sharedObject.income = 12;
        sharedObject.changeIncome(0);
        expect(sharedObject.income).to.equal(12);
    });
    it('ne6o 6', function () {
        sharedObject.changeIncome(54);
        expect(sharedObject.income).to.equal(54);
    });
    //
    it('ne6o 7', function () {
        $('#income').val('22');
        sharedObject.changeIncome(12);
        expect($('#income').val()).to.equal('12');
    });
    it('ne6o 8', function () {
        $('#income').val('22');
        sharedObject.changeIncome('4');
        expect($('#income').val()).to.equal('22');
    });
    it('ne6o 9', function () {
        $('#income').val('22');
        sharedObject.changeIncome(-2);
        expect($('#income').val()).to.equal('22');
    });
    it('ne6o 10', function () {
        $('#income').val('22');
        sharedObject.changeIncome(0);
        expect($('#income').val()).to.equal('22');
    });
});

describe('updateName Test group #3', function () {
    it('ne6o 1', function () {
        sharedObject.name = 'Kaka';
        $('#name').val('');
        sharedObject.updateName();
        expect(sharedObject.name).to.equal('Kaka');
    });

    it('ne6o 2', function () {
        $('#name').val("{name: 'sas'}");
        sharedObject.updateName();
        expect(sharedObject.name).to.equal("{name: 'sas'}");
    });
});

describe('updateIncome Test group #4', function () {
    it('ne6o 1', function () {
        $('#income').val('45');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(45);
    });
    it('ne6o 1', function () {
        sharedObject.income = 45;
        $('#income').val('kaka');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(45);
    });
    it('ne6o 1', function () {
        sharedObject.income = 45;
        $('#income').val('3.14');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(45);
    });
    it('ne6o 1', function () {
        sharedObject.income = 45;
        $('#income').val('-1');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(45);
    });
    it('ne6o 1', function () {
        sharedObject.income = 45;
        $('#income').val('');
        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(45);
    });
});