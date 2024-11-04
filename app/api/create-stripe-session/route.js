// app/api/create-stripe-session.js
import { NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  try {
    const { item } = await request.json();

    const redirectURL = 'http://localhost:3000';

      const transformedItem = {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100), 
        },
        quantity: 1,
      };      

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [transformedItem],
      mode: 'payment',
      success_url: `${redirectURL}?status=success`,
      cancel_url: `${redirectURL}?status=cancel`,
      metadata: {
        images: item.image,
      },
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json({ error: "Failed to create Stripe session" }, { status: 500 });
  }
}
