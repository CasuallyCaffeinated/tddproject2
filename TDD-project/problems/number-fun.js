const returnsThree = () => {
  return 3;
};

const reciprocal = (num) => {
  if (num < 1 || num > 1000000) {
    throw new TypeError("number must be between 1 and 1,000,000");
  } else {
    return 1 / num;
  }
};




module.exports = { returnsThree, reciprocal };
