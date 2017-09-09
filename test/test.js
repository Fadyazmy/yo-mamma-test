'use strict';

var expect = require('chai').expect;
var fs = require("fs");
var jokes = fs.readFileSync('yo_mama_jokes.txt').toString().split("\n");
var numFormatter = require('../index');

describe('#numFormatter', function() {
    it('retrieve the first joke', function() {
        var result = jokes[0];
        expect(result).to.equal('Yo mama is so fat that her bellybutton gets home 15 minutes before she does.');
    });

    it('should convert double digits', function() {
        var result = numFormatter(12);
        expect(result).to.equal('12');
    });

    it('should convert triple digits', function() {
        var result = numFormatter(123);
        expect(result).to.equal('123');
    });

    it('should convert 4 digits', function() {
        var result = numFormatter(1234);
        expect(result).to.equal('1,234');
    });

    it('should convert 5 digits', function() {
        var result = numFormatter(12345);
        expect(result).to.equal('12,345');
    });

    it('should convert 6 digits', function() {
        var result = numFormatter(123456);
        expect(result).to.equal('123,456');
    });

    it('should convert 7 digits', function() {
        var result = numFormatter(1234567);
        expect(result).to.equal('1,234,567');
    });

    it('should convert 8 digits', function() {
        var result = numFormatter(12345678);
        expect(result).to.equal('12,345,678');
    });
});