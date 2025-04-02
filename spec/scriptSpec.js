const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../script');

describe("Interest Rate Calculator Tests", () => {
  
  it("Calculate Simple Interest", () => {
    let actual = calculateSimpleInterest(1000, 5, 1);
    expect(actual).toBe(50);
  });

  it("Calculate Total Payable Amount", () => {
    let actual = calculateTotalPayableAmount(1000, 50);
    expect(actual).toBe(1050);
  });

});
