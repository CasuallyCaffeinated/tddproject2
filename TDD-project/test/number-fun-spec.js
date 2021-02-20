const assert = require("assert");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { isContext } = require("vm");
const { returnsThree } = require("../problems/number-fun.js");
const { reciprocal } = require("../problems/number-fun.js");

describe("returnsThree()", function () {
  it("should return number 3", () => {
    //   const num = 3;
    const res = returnsThree();
    assert.deepStrictEqual(res, 3);
    // expect(res).to.equal(3);
  });
});

describe("reciprocal()", () => {
  context("calls the reciprocal function", () => {
    it("should return the reciprocal of a num provided", () => {
      const num = 4;
      const res = reciprocal(num);
      assert.strictEqual(res, 0.25);
    });
  });
  context("throw a TypeError", () => {
    it("should throw a TypeError if the num provided is < 1 || > 1,000,000", () => {
      const min = -1;
      const max = 5000000;

      //   const resMin = reciprocal(4);
      //   const resMax = reciprocal(max);

      assert.throws(() => reciprocal(min), TypeError);
      assert.throws(() => reciprocal(max), TypeError);
    });
  });
});
