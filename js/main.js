let calculateAmortization = (principal, years, rate) => {
  let { monthlyRate, monthlyPayment } = calculateMonthlyPayment(principal, years, rate);
  let balance = principal;
  let amortization = [];
  for (let i = 0; i < years; i++) {
    let interestI = 0;
    let principalI = 0;
    for (let j = 0; j < 12; j++) {
      let interestJ = balance * monthlyRate;
      let principalJ = monthlyPayment - interestJ;
      interestI = interestI + interestJ;
      principalI = principalI + principalJ;
      balance = balance - principalJ;
    }
    amortization.push({ principalI, interestI, balance});
  }
  return { monthlyPayment, monthlyRate, amortization};
}
let calculateMonthlyPayment = (principal, years, rate) => {
  let monthlyRate = 0;
  if (rate) {
    monthlyRate = rate / 100 / 12;
  }
  let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
  return {
    principal,
    years,
    rate,
    monthlyPayment,
    monthlyRate
  };
};

document.getElementById('calcBtn').addEventListener('click', function () {
  let principal = document.getElementById("principal").value;
  let years = document.getElementById("years").value;
  let rate = document.getElementById("rate").value;
  let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);
  document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
  document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
  amortization.forEach(month => console.log(month));
});
