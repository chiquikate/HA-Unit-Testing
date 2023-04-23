const bmiCalculator = {
  calculate: (weight, height) => {
    return weight / Math.pow(height, 2);
  },
};

console.log(bmiCalculator.calculate(55, 1.52));

module.exports = bmiCalculator;
