//References
//ChatGPT
'use client';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { loadStripe } from '@stripe/stripe-js';

// Stripe public key
const stripePromise = loadStripe("pk_test_51Q8qIWRpN1tC1oLYSu8ZlvL21N6ypVvg3RBdbrpa4C3nNB8Nh9PQ1i1pwMRz3YCwNbQFcCqac62UFjuLdiw7urRg00pXT0dR8Y");

export default function PaymentCard() {
    const [loading, setLoading] = useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            // Fetch a Checkout session from your server-side endpoint
            const response = await fetch("/api/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const session = await response.json();

            if (session.id) {
                // Redirect to Stripe Checkout
                const stripe = await stripePromise;
                await stripe.redirectToCheckout({ sessionId: session.id });
            } else {
                alert("Failed to create a checkout session");
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Payment failed, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="cursor-pointer max-w-md ml-4 mt-10">
            <CardHeader>
                <CardTitle>Make a Deposit</CardTitle>
                <CardDescription>Secure your payment with Stripe</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Click below to proceed with your deposit.</p>
            </CardContent>
            <CardFooter>
                <Button 
                    onClick={handlePayment} 
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Proceed to Payment"}
                </Button>
            </CardFooter>
        </Card>
    );
}