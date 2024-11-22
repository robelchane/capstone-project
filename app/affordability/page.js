'use client'; // Mark as a Client Component

import { useState } from 'react';

export default function AffordabilityPage() {
  // State to hold user inputs
  const [income, setIncome] = useState('');
  const [incomeFrequency, setIncomeFrequency] = useState('monthly');
  const [budget, setBudget] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [city, setCity] = useState('Calgary');
  const [monthlyExpenses, setMonthlyExpenses] = useState('');

  // Handle input changes
  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleIncomeFrequencyChange = (e) => {
    setIncomeFrequency(e.target.value);
    if (e.target.value === 'monthly' && income !== '') {
      setBudget(calculateRentBudget(income));
    } else if (e.target.value === 'annual' && income !== '') {
      setBudget(calculateRentBudget(income / 12)); // Convert annual income to monthly
    }
  };

  const handleMonthlyExpensesChange = (e) => {
    setMonthlyExpenses(e.target.value);
  };

  const handleBedroomsChange = (e) => {
    setBedrooms(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Calculate Rent Budget
  const calculateRentBudget = (monthlyIncome) => {
    const lowerLimit = monthlyIncome * 0.3;
    const upperLimit = monthlyIncome * 0.375;
    return `${lowerLimit.toFixed(2)} - ${upperLimit.toFixed(2)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income && !isNaN(income)) {
      setBudget(calculateRentBudget(income));
    }
  };

  return (
    <section id="affordability" className="mt-24 p-8 bg-gray-50">
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#001f3f] mb-6">Rent Affordability Tool</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Income Input */}
          <div className="flex flex-col">
            <label htmlFor="income" className="text-lg font-medium text-gray-700">Enter Your Income</label>
            <div className="flex space-x-4">
              <input
                type="number"
                id="income"
                value={income}
                onChange={handleIncomeChange}
                className="p-3 border border-gray-300 rounded-md shadow-sm w-full"
                placeholder="Enter income"
                required
              />
              <select
                value={incomeFrequency}
                onChange={handleIncomeFrequencyChange}
                className="p-3 border border-gray-300 rounded-md shadow-sm"
              >
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
          </div>

          {/* Number of Bedrooms Input */}
          <div className="flex flex-col">
            <label htmlFor="bedrooms" className="text-lg font-medium text-gray-700">Number of Bedrooms</label>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={handleBedroomsChange}
              className="p-3 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter number of bedrooms"
              min="1"
            />
          </div>

          {/* City Selection */}
          <div className="flex flex-col">
            <label htmlFor="city" className="text-lg font-medium text-gray-700">Select Your City</label>
            <select
              value={city}
              onChange={handleCityChange}
              className="p-3 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="Calgary">Calgary</option>
              <option value="Edmonton">Edmonton</option>
              <option value="Vancouver">Vancouver</option>
              {/* Add more cities as needed */}
            </select>
          </div>

          {/* Monthly Expenses Input */}
          <div className="flex flex-col">
            <label htmlFor="monthly-expenses" className="text-lg font-medium text-gray-700">Monthly Expenses</label>
            <input
              type="number"
              id="monthly-expenses"
              value={monthlyExpenses}
              onChange={handleMonthlyExpensesChange}
              className="p-3 border border-gray-300 rounded-md shadow-sm"
              placeholder="Enter your monthly expenses"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#001f3f] text-white py-3 px-4 rounded-md shadow-md hover:bg-[#003366] transition"
            >
              Calculate Rent Budget
            </button>
          </div>
        </form>

        {/* Display Results */}
        {budget && (
          <div className="mt-8 p-4 bg-[#f1f5f9] rounded-md text-lg text-gray-700">
            <p>Your upper limit for what you can afford is between <span className="font-bold text-[#001f3f]">${budget}</span> in monthly rent.</p>
          </div>
        )}
      </div>
    </section>
  );
}
