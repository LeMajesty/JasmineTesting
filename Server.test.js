const {
    setupInitialValues,
    getCurrentUIValues,
    update,
    calculateMonthlyPayment,
    updateMonthly
  } = require('./server');
  
  describe('setupInitialValues function', () => {
    beforeEach(() => {
      document.body.innerHTML = `
        <form id="calc-form">
          <input id="loan-amount" type="number">
          <input id="loan-years" type="number">
          <input id="loan-rate" type="number">
        </form>
      `;
    });
  
    test('it should set up initial values in the form inputs', () => {
      setupInitialValues();
      expect(document.getElementById('loan-amount').value).toBe('10000');
      expect(document.getElementById('loan-years').value).toBe('5');
      expect(document.getElementById('loan-rate').value).toBe('3.5');
    });
  });
  
  describe('getCurrentUIValues function', () => {
    test('it should return an object with current UI values', () => {
      document.body.innerHTML = `
        <input id="loan-amount" type="number" value="10000">
        <input id="loan-years" type="number" value="5">
        <input id="loan-rate" type="number" value="3.5">
      `;
      const values = getCurrentUIValues();
      expect(values).toEqual({
        amount: 10000,
        years: 5,
        rate: 3.5
      });
    });
  });
  
  describe('calculateMonthlyPayment function', () => {
    test('it should calculate the monthly payment correctly', () => {
      const values = {
        amount: 10000,
        years: 5,
        rate: 3.5
      };
      const monthlyPayment = calculateMonthlyPayment(values);
      expect(monthlyPayment).toBe('181.48');
    });
  });
  
  describe('updateMonthly function', () => {
    test('it should update the UI with the monthly payment', () => {
      document.body.innerHTML = '<div id="monthly-payment"></div>';
      updateMonthly('181.48');
      expect(document.getElementById('monthly-payment').innerText).toBe('$181.48');
    });
  });
  