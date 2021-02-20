const chai = require("chai");
const { interface } = require("chai-spies");
const expect = chai.expect;
const spy = require('chai-spies')
chai.use(spy)

const {myMap} = require('../problems/myMap.js')

describe('myMap()', () => {
    let array;
    let cb;

    beforeEach(() => {
        array = [1,2,3]
        cb = (el) => el *2
    })
    it('should function like the built-in Array.map()', () => {

        const res = myMap(array, cb)

        expect(res).to.eql([2,4,6])
    })
})
