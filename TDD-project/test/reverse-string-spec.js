const chai = require("chai")
const { interface } = require("chai-spies")
const expect = chai.expect
const reverseStr = require('../problems/reverse-string.js')

describe("reverseStr()", function() {
    it('should return the given string in reverse', function () {
        const str = 'fun'

        const res = reverseStr(str);

        expect(res).to.eql('nuf');
    })
    it('should throw a TypeError when provided an invalid argument', function() {

        expect(() => reverseStr(3)).to.throw(TypeError)
    })
})
