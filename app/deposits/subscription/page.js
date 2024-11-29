//app/deposits/subscription.page.js
"use client";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart, faCreditCard } from "@fortawesome/free-solid-svg-icons";

export default function Subscription() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [subscriptionPlans] = useState([
    {
      _id: "671b2d837d5bd4b03aec6f79",
      name: "Basic",
      price: 0,
      propertyLimit: 5,
      imagePerPropertyLimit: 5,
      features: [
        "free for lifetime",
        "property listing",
        "property details",
        "5 images per property",
        "5 properties limit",
        "property in search",
      ],
    },
    {
      _id: "671b2d837d5bd4b03aec6f7b",
      name: "Premium",
      price: 19.99,
      propertyLimit: 50,
      imagePerPropertyLimit: 20,
      features: [
        "property listing",
        "property details",
        "50 images per property",
        "50 properties limit",
        "24/7 support on Email/Phone",
        "personal account manager",
      ],
    },
  ]);

  const [message, setMessage] = useState("");
  const [isBasicSubscribed, setIsBasicSubscribed] = useState(false);

  const handleSubscription = async (planName) => {
    try {
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: "testUser123", plan: planName }),
      });

      const data = await response.json();

      if (response.ok) {
        if (planName === "Basic") {
          setMessage(data.message);
          setIsBasicSubscribed(true);
        } else {
          window.location.href = data.url;
        }
      } else {
        setMessage("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const handleCancelSubscription = async () => {
    try {
      const response = await fetch("/api/subscriptions", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: "testUser123", plan: "Basic" }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        setIsBasicSubscribed(false);
      } else {
        setMessage("Failed to cancel subscription. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
  const stripePromise = loadStripe(publishableKey);

  const createCheckOutSession = async (item) => {
    setLoading(true);
    const stripe = await stripePromise;

    try {
      const checkoutSession = await axios.post("/api/create-stripe-session", {
        item: {
          name: item.name,
          description: item.features.join(", "),
          image: "https://yourdomain.com/path/to/premium-image.jpg", // example image url
          price: item.price,
          quantity: 1,
        },
      });

      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
      setMessage("Failed to create checkout session. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 mt-2">Subscription Details</h1>
      <hr className="mb-5" />

      <div className="flex flex-wrap gap-3 justify-center">
        {/* Subscription Plans */}
        {subscriptionPlans.map((plan) => (
          <div
            key={plan._id}
            className="border border-gray-300 rounded-lg p-5 shadow-md dark:bg-white"
            style={{ width: "380px" }}
          >
            <h2 className="text-xl text-black font-semibold mb-4 text-center">{plan.name}</h2>
            <p className="text-gray-700 mb-4">${plan.price} / month</p>
            <p className="text-gray-600">Property Limit: {plan.propertyLimit}</p>
            <p className="text-gray-600 mb-4">
              Images per Property: {plan.imagePerPropertyLimit}
            </p>

            <ul className="list-disc list-inside text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="flex flex-row items-center w-full justify-center space-x-4 mt-4">
            <button
              className="flex items-center justify-center space-x-2 py-2 rounded text-white bg-black hover:bg-gray-900"
              style={{ width: "200px" }}
              onClick={() => {
                plan.name === "Premium" ? createCheckOutSession(plan) : handleSubscription(plan.name);
              }}
            >
              {plan.name === "Basic" ? (
                <FontAwesomeIcon icon={faHandHoldingHeart} />
              ) : (
                <FontAwesomeIcon icon={faCreditCard} />
              )}
              <span>
                {plan.name === "Basic" ? "Subscribe for free!" : "Purchase subscription"}
              </span>
            </button>
              {plan.name === "Basic" && isBasicSubscribed && (
                <button
                  className="py-2 rounded text-white bg-red-500 hover:bg-red-800"
                  style={{ width: "200px" }}
                  onClick={handleCancelSubscription}
                >
                  Cancel Subscription
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Test Payment Information Box */}
        <div
          className="border border-blue-500 rounded-lg p-5 shadow-md bg-blue-50 text-center"
          style={{ width: "380px" }}
        >
          <h2 className="text-xl font-bold mb-4 text-blue-800">Test Mode</h2>
          <p className="text-blue-700">Card Number: 4242 4242 4242 4242</p>
          <p className="text-blue-700">MM/YY: 12/34</p>
          <p className="text-blue-700">CVC: 123</p>
        </div>
      </div>

      {message && <p className="mt-8 text-center text-xl">{message}</p>}
    </div>
  );
}