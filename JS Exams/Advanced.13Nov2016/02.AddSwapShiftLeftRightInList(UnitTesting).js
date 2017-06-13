describe('Test group #1', function() {
    let test;
    beforeEach(function() {test = createList()});

    // 0. function
    it('function', function() {
        expect(typeof test.add).to.equal('function');
        expect(typeof test.shiftLeft).to.equal('function');
        expect(typeof test.shiftRight).to.equal('function');
        expect(typeof test.swap).to.equal('function');
    });

    // 0. empty
    it('empty toString', function() {
        expect(test.toString()).to.empty;
    });
    it('empty shiftLeft', function() {
        expect(test.toString()).to.empty;
    });
    it('empty shiftRight', function() {
        expect(test.toString()).to.empty;
    });
    it('empty swap', function() {
        expect(test.swap()).to.empty;
    });

    // 1.
    it('add', function() {
        test.add(-55);
        test.add(3.14);
        test.add('srt1');

        expect(test.toString()).to.equal('-55, 3.14, srt1');
    });

    // 2.
    it('shiftLeft', function() {
        test.add(-55);
        test.add(3.14);
        test.add('srt1');
        test.shiftLeft();
        expect(test.toString()).to.equal('3.14, srt1, -55');
    });
    it('shiftLeft', function() {
        test.add(-55);
        expect(test.toString()).to.equal('-55');
    });

    // 3.
    it('shiftRight', function() {
        test.add(-55);
        test.add(3.14);
        test.add('srt1');
        test.shiftRight();
        expect(test.toString()).to.equal('srt1, -55, 3.14');
    });
    it('shiftRight', function() {
        test.add(-55);
        test.shiftRight();
        expect(test.toString()).to.equal('-55');
    });

    // 4.
    it('swap', function() {
        test.add(-55);
        test.add(3.14);
        test.add('srt1');
        test.swap(0, 1);
        expect(test.toString()).to.equal('3.14, -55, srt1');
    });
    it('swap', function() {
        test.add(-55);
        expect(test.swap(0, 1)).to.false;
        expect(test.swap(0, 0)).to.false;
        expect(test.toString()).to.equal('-55');
    });
    it('swap', function() {
        test.add(-55);
        expect(test.swap(-1, 1)).to.false;
        expect(test.swap(3.14, 0)).to.false;
        expect(test.toString()).to.equal('-55');

    });
});