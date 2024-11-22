// app/affordability/affordability-form.js

'use client';

import { useState } from 'react';

const AffordabilityForm = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [debt, setDebt] = useState('');
  const [creditScore, setCreditScore] = useState('');
  const [dependents, setDependents] = useState('');
  const [preferredRentRatio, setPreferredRentRatio] = useState(30); // default to 30%
  const [location, setLocation] = useState('');
  const [utilitiesIncluded, setUtilitiesIncluded] = useState('no');
  const [rentalType, setRentalType] = useState('studio');
  const [expectedIncrease, setExpectedIncrease] = useState('');
  const [emergencySavings, setEmergencySavings] = useState('');

  const calculateAffordableRent = () => {
    // Calculate affordable rent based on income, expenses, debt, and rent ratio
    const availableIncome = income - expenses - debt - emergencySavings;
    const affordableRent = (availableIncome * (preferredRentRatio / 100)).toFixed(2);
    return affordableRent;
  };

  const affordableRent = calculateAffordableRent();

  return (
    <div className="max-w-3xl mx-auto my-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-[#001f3f] mb-4">Affordability Tool</h2>
      <form className="space-y-6">
        {/* Monthly Income */}
        <div>
          <label htmlFor="income" className="block text-gray-700">Monthly Income</label>
          <input
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your monthly income"
          />
        </div>

        {/* Monthly Expenses */}
        <div>
          <label htmlFor="expenses" className="block text-gray-700">Monthly Expenses</label>
          <input
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your monthly expenses"
          />
        </div>

        {/* Existing Debt Payments */}
        <div>
          <label htmlFor="debt" className="block text-gray-700">Existing Debt Payments</label>
          <input
            type="number"
            id="debt"
            value={debt}
            onChange={(e) => setDebt(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your monthly debt payments"
          />
        </div>

        {/* Number of Dependents */}
        <div>
          <label htmlFor="dependents" className="block text-gray-700">Number of Dependents</label>
          <input
            type="number"
            id="dependents"
            value={dependents}
            onChange={(e) => setDependents(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter the number of dependents"
          />
        </div>

        {/* Preferred Rent-to-Income Ratio */}
        <div>
          <label htmlFor="rent-ratio" className="block text-gray-700">Preferred Rent-to-Income Ratio (%)</label>
          <input
            type="number"
            id="rent-ratio"
            value={preferredRentRatio}
            onChange={(e) => setPreferredRentRatio(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter preferred rent-to-income ratio"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-gray-700">Location</label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter the neighborhood or city"
          />
        </div>

        {/* Utility Costs */}
        <div>
          <label htmlFor="utilities" className="block text-gray-700">Are utilities included?</label>
          <select
            id="utilities"
            value={utilitiesIncluded}
            onChange={(e) => setUtilitiesIncluded(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* Desired Rental Type */}
        <div>
          <label htmlFor="rental-type" className="block text-gray-700">Desired Rental Type</label>
          <select
            id="rental-type"
            value={rentalType}
            onChange={(e) => setRentalType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          >
            <option value="studio">Studio</option>
            <option value="1-bedroom">1-Bedroom</option>
            <option value="2-bedroom">2-Bedroom</option>
            <option value="family-home">Family Home</option>
          </select>
        </div>

        {/* Expected Rent Increase */}
        <div>
          <label htmlFor="expected-increase" className="block text-gray-700">Expected Rent Increase (%)</label>
          <input
            type="number"
            id="expected-increase"
            value={expectedIncrease}
            onChange={(e) => setExpectedIncrease(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter the expected rent increase percentage"
          />
        </div>

        {/* Emergency Savings */}
        <div>
          <label htmlFor="emergency-savings" className="block text-gray-700">Emergency Savings</label>
          <input
            type="number"
            id="emergency-savings"
            value={emergencySavings}
            onChange={(e) => setEmergencySavings(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your monthly emergency savings"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="bg-[#001f3f] text-white px-6 py-2 rounded-lg"
          >
            Calculate Affordability
          </button>
        </div>
      </form>

      {/* Display Result */}
      <div className="mt-6">
        <p className="text-lg text-[#001f3f]">
          Based on the information you provided, you can afford a monthly rent of up to:
        </p>
        <p className="text-2xl font-bold text-[#001f3f]">${affordableRent}</p>
      </div>
    </div>
  );
};

export default AffordabilityForm;
