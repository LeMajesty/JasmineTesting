function calculateInterest(principal, rate, time) {
    return (principal * rate * time) / 100;
  }
  
  module.exports = {
    calculateInterest
  };
  