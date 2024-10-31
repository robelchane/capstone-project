"use client";
import { useState } from "react";

export default function MortgageCalculator() {
  const [mortgageAmount, setMortgageAmount] = useState();
  const [downPayment, setDownPayment] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState(30); // Default to 30 years
  const [startDate, setStartDate] = useState(""); // New state for start date
  const [paymentFrequency, setPaymentFrequency] = useState("monthly"); // Default payment frequency
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [annualPayment, setAnnualPayment] = useState(0); // New state for annual payment
  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [loanPayOffDate, setLoanPayOffDate] = useState("");
  const [error, setError] = useState(""); // New state for error messages

  const calculateMortgage = () => {
    if (parseFloat(downPayment) > parseFloat(mortgageAmount)) {
      setError("Down payment cannot be greater than the mortgage amount.");
      return;
    } else {
      setError(""); // Clear error if input is valid
    }

    const principal = parseFloat(mortgageAmount) - parseFloat(downPayment); // Loan amount after down payment
    const interest = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const payments = parseFloat(loanTerm) * 12; // Total payments for monthly frequency

    // Adjust payments based on selected frequency
    let adjustedPayments;
    let adjustedInterest;
    if (paymentFrequency === "weekly") {
      adjustedPayments = loanTerm * 52; // Total payments for weekly frequency
      adjustedInterest = parseFloat(interestRate) / 100 / 52; // Weekly interest rate
    } else if (paymentFrequency === "bi-weekly") {
      adjustedPayments = loanTerm * 26; // Total payments for bi-weekly frequency
      adjustedInterest = parseFloat(interestRate) / 100 / 26; // Bi-weekly interest rate
    } else {
      adjustedPayments = payments; // Monthly
      adjustedInterest = interest; // Monthly interest rate
    }

    // Mortgage calculation formula
    const x = Math.pow(1 + adjustedInterest, adjustedPayments);
    const mortgage = (principal * x * adjustedInterest) / (x - 1);

    const calculatedMonthlyPayment = mortgage ? mortgage.toFixed(2) : 0;
    setMonthlyPayment(calculatedMonthlyPayment);

    // Calculate annual payment based on frequency
    if (paymentFrequency === "monthly") {
      setAnnualPayment((calculatedMonthlyPayment * 12).toFixed(2));
    } else if (paymentFrequency === "bi-weekly") {
      setAnnualPayment((calculatedMonthlyPayment * 26).toFixed(2));
    } else {
      setAnnualPayment((calculatedMonthlyPayment * 52).toFixed(2));
    }

    setTotalInterestPaid((mortgage * adjustedPayments - principal).toFixed(2));

    // Set loan payoff date based on start date
    const start = new Date(startDate);
    const payoffDate = new Date(start);
    payoffDate.setFullYear(payoffDate.getFullYear() + loanTerm);
    setLoanPayOffDate(payoffDate.toLocaleDateString());
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto m-28">
      <h2 className="w-full flex justify-center text-2xl font-bold bg-emerald-400 text-white border border-gray-300 mb-4 p-2">
        Your Mortgage Payment Information
      </h2>

      <div className="flex justify-between w-full">
        <div className="w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4 flex justify-center">Mortgage Calculator</h2>
          <hr className="w-full border-gray-300 my-2" />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Inputs for Mortgage Calculator */}
          <div className="w-full mb-4">
            <label className="block text-gray-700">Mortgage Amount:</label>
            <input
              type="number"
              value={mortgageAmount}
              onChange={(e) => setMortgageAmount(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter mortgage amount"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Down Payment:</label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter down payment"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter interest rate"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Amortization Period (years):</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter loan term"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="w-full mb-4">
            <label className="block text-gray-700">Payment Frequency:</label>
            <select
              value={paymentFrequency}
              onChange={(e) => setPaymentFrequency(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="monthly">Monthly</option>
              <option value="bi-weekly">Bi-Weekly</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          <button
            onClick={calculateMortgage}
            className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
          >
            Calculate
          </button>
        </div>

        <div className="w-3/4 p-4 border-l border-gray-300">
          <h3 className="text-2xl font-semibold flex justify-center mb-4">Mortgage Repayment Summary</h3>
          <hr className="w-full border-gray-300 my-2" />
          
          {/* Displaying Mortgage Details */}
          <div className="mb-4">
            <p>Mortgage Amount:</p>
            <p className="font-bold text-xl mt-2">${mortgageAmount}</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />

          <div className="mb-4">
            <p>Down Payment:</p>
            <p className="font-bold text-xl mt-2">${downPayment}</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />

          <div className="mb-4">
            <p>Payment ({paymentFrequency}):</p>
            <p className="font-bold text-xl mt-2">${monthlyPayment}</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />

          <div className="mb-4">
            <p>Annual Payment:</p>
            <p className="font-bold text-xl mt-2">${annualPayment}</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />

          <div className="mb-4">
            <p>Total Interest Paid:</p>
            <p className="font-bold text-xl mt-2">${totalInterestPaid}</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />

          <div className="mb-4">
            <p>Loan Payoff Date:</p>
            <p className="font-bold text-xl mt-2">{loanPayOffDate}</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />
        </div>
      </div>

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="mt-8 px-4 py-2 bg-green-500 text-white rounded"
      >
        Print Page
      </button>
    </div>
  );
}
