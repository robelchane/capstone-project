"use client";
import { useState, useEffect } from "react";

export default function Subscription() {
  const [SubscriptionPlans, setSubscriptionPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubscriptionPlans = async () => {
      try {
        const response = await fetch("/api/subscriptions");
        const data = await response.json();
        setSubscriptionPlans(data.subscriptionPlans); // API에서 가져온 구독 데이터 저장
      } catch (error) {
        console.error("Failed to fetch subscription plans", error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchSubscriptionPlans();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Subscription Details</h1>
      <hr className="mb-5"/>

      {loading ? (
        <p>Loading subscription plans...</p>
      ) : SubscriptionPlans.length > 0 ? (
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Plan Name</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Property Limit</th>
              <th className="border border-gray-300 p-2">Image Per Property Limit</th>
              <th className="border border-gray-300 p-2">Features</th>
            </tr>
          </thead>
          <tbody>
            {SubscriptionPlans.map((plan) => (
              <tr key={plan._id} className="border-b border-gray-300">
                <td className="border border-gray-300 p-2">{plan.name}</td>
                <td className="border border-gray-300 p-2">${plan.price}</td>
                <td className="border border-gray-300 p-2">{plan.propertyLimit}</td>
                <td className="border border-gray-300 p-2">{plan.imagePerPropertyLimit}</td>
                <td className="border border-gray-300 p-2">
                  <ul>
                    {plan.features.map((feature, index) => (
                      <li key={index}>{feature}</li> // features 배열의 각 항목을 나열
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No subscription plans found.</p>
      )}
    </div>
  );
}
