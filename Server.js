window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupInitialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  
  function setupInitialValues() {
    
    const amountInput = document.getElementById("loan-amount");
    const yearsInput = document.getElementById("loan-years");
    const rateInput = document.getElementById("loan-rate");
  
  
    amountInput.value = 10000;
    yearsInput.value = 5;
    rateInput.value = 3.5;
  
  
    update();
  }
  
  
  function update() {  
    const values = getCurrentUIValues();
  
    
    const monthlyPayment = calculateMonthlyPayment(values);
  
  
    updateMonthly(monthlyPayment);
  }
  
  
  function calculateMonthlyPayment(values) {
    const { amount, years, rate } = values;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;
    const monthlyPayment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    return monthlyPayment.toFixed(2);
  }
  
  
  function updateMonthly(monthly) {
    document.getElementById("monthly-payment").innerText = `$${monthly}`;
  }
  
  module.exports = {
    setupInitialValues,
    getCurrentUIValues,
    update,
    calculateMonthlyPayment,
    updateMonthly
  };
  