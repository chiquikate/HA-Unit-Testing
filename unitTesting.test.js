const bmiCalculator = require("./unitTesting");

test("Check if BMI Calculator gives correct calculation", () => {
  expect(bmiCalculator.calculate(55, 1.52)).toBe(23.80540166204986);
});
