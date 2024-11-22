'use client';
import { useState } from 'react';

export default function AffordabilityPage() {
  // State to hold user inputs
  const [income, setIncome] = useState('');
  const [incomeFrequency, setIncomeFrequency] = useState('monthly');
  const [budget, setBudget] = useState('');

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
    <section id="affordability" className="p-8">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-semibold text-[#001f3f] mb-6">Rent Affordability Tool</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="income" className="text-lg font-medium">Enter Your Income</label>
            <div className="flex space-x-2">
              <input
                type="number"
                id="income"
                value={income}
                onChange={handleIncomeChange}
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Enter income"
                required
              />
              <select
                value={incomeFrequency}
                onChange={handleIncomeFrequencyChange}
                className="p-2 border border-gray-300 rounded-md"
              >
                <option value="monthly">Monthly</option>
                <option value="annual">Annual</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#001f3f] text-white py-2 px-4 rounded-md"
            >
              Calculate Rent Budget
            </button>
          </div>
        </form>

        {budget && (
          <div className="mt-6 text-lg">
            <p>Your upper limit for what you can afford is between ${budget} in monthly rent.</p>
          </div>
        )}
      </div>
    </section>
  );
}
