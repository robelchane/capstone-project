// Reference
// https://www.mortgagecalculator.org/
// https://apps.royalbank.com/apps/mortgages/mortgage-payment-calculator/#top-page-content-2
// https://www.geeksforgeeks.org/build-a-loan-calculator-using-next-js/

"use client";
import { useState } from "react";

export default function MortgageCalculator() {
  const [mortgageAmount, setMortgageAmount] = useState();
  const [downPayment, setDownPayment] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState(25);
  const [startDate, setStartDate] = useState("");
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [annualPayment, setAnnualPayment] = useState(0);
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [loanPayOffDate, setLoanPayOffDate] = useState("");
  const [error, setError] = useState("");

  const calculateMortgage = () => {
    if (parseFloat(downPayment) > parseFloat(mortgageAmount)) {
      setError("Down payment cannot be greater than the mortgage amount.");
      return;
    } else {
      setError("");
    }

    const principal = parseFloat(mortgageAmount) - parseFloat(downPayment);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(loanTerm) * 12;

    let adjustedPayments;
    let adjustedInterest;
    if (paymentFrequency === "weekly") {
      adjustedPayments = loanTerm * 52;
      adjustedInterest = parseFloat(interestRate) / 100 / 52;
    } else if (paymentFrequency === "bi-weekly") {
      adjustedPayments = loanTerm * 26;
      adjustedInterest = parseFloat(interestRate) / 100 / 26;
    } else {
      adjustedPayments = payments;
      adjustedInterest = interest;
    }

    const x = Math.pow(1 + adjustedInterest, adjustedPayments);
    const mortgage = (principal * x * adjustedInterest) / (x - 1);

    const calculatedMonthlyPayment = mortgage ? mortgage.toFixed(2) : 0;
    setMonthlyPayment(calculatedMonthlyPayment);

    if (paymentFrequency === "monthly") {
      setAnnualPayment((calculatedMonthlyPayment * 12).toFixed(2));
    } else if (paymentFrequency === "bi-weekly") {
      setAnnualPayment((calculatedMonthlyPayment * 26).toFixed(2));
    } else {
      setAnnualPayment((calculatedMonthlyPayment * 52).toFixed(2));
    }

    setTotalInterestPaid((mortgage * adjustedPayments - principal).toFixed(2));

    const start = new Date(startDate);
    const payoffDate = new Date(start);
    payoffDate.setFullYear(payoffDate.getFullYear() + parseInt(loanTerm)); // Adding loan term to the start year
    setLoanPayOffDate(payoffDate.toLocaleDateString());
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center p-8 max-w-6xl mx-auto mt-20">
      <div className="w-full border-b border-gray-300 pb-6 mb-6">
        <h3 className="text-2xl text-[#001f3f] font-serif mb-8 mt-5 text-left">Mortgage Calculator</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 dark:text-white">Mortgage Amount:</label>
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
              className="bg-white w-full p-2 border text-black"
              placeholder="Enter mortgage amount"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white">Down Payment:</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="bg-white w-full p-2 border text-black"
              placeholder="Enter down payment"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white">Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="bg-white w-full p-2 border text-black"
              placeholder="Enter interest rate"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white">Amortization Period (years):</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="bg-white w-full p-2 border text-black"
              placeholder="Enter loan term"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-white w-full p-2 border text-black"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-white">Payment Frequency:</label>
            <select
              value={paymentFrequency}
              onChange={(e) => setPaymentFrequency(e.target.value)}
              className="bg-white w-full p-2 border text-black"
            >
              <option value="monthly">Monthly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button onClick={calculateMortgage} className="px-6 py-2 bg-[#001f3f] border border-[#001f3f] text-white hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] dark:text-white dark:border-white transition-colors duration-300">
            Calculate
          </button>
        </div>
      </div>

      <div className="w-full pb-6 mb-6">
        <h3 className="text-2xl text-[#001f3f] font-serif mb-8 mt-5 text-left">Mortgage Repayment Summary</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-700 dark:text-white">Mortgage Amount:</p>
            <p className="font-bold text-lg">${mortgageAmount}</p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white">Down Payment:</p>
            <p className="font-bold text-lg">${downPayment}</p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white">Payment ({paymentFrequency}):</p>
            <p className="font-bold text-lg">${monthlyPayment}</p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white">Annual Payment:</p>
            <p className="font-bold text-lg">${annualPayment}</p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white">Total Interest Paid:</p>
            <p className="font-bold text-lg">${totalInterestPaid}</p>
          </div>
          <div>
            <p className="text-gray-700 dark:text-white">Loan Payoff Date:</p>
            <p className="font-bold text-lg">{loanPayOffDate}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end w-full">
        <button onClick={handlePrint} className="px-6 py-2 bg-[#001f3f] border border-[#001f3f] text-white hover:bg-transparent hover:text-[#001f3f] hover:border-[#001f3f] dark:text-white dark:border-white transition-colors duration-300">
          Print
        </button>
      </div>
    </div>
  );
}
