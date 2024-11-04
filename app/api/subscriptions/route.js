// app/api/subscriptions/route.js
import { NextResponse } from "next/server";
import connectToDatabase from "../../../libs/mongodb";
import Subscription from "../../../models/subscription";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST method: Create a new subscription
export async function POST(req) {
  await connectToDatabase();

  try {
    const { userId, plan } = await req.json();

    if (plan === "Basic") {
      // Store Basic subscriptions in the DB
      const subscription = new Subscription({
        userId,
        plan,
        startDate: new Date(),
        status: "active",
      });
      await subscription.save();
      return NextResponse.json({ message: "Basic plan subscribed successfully" }, { status: 200 });
    } else {
      // Stripe payment processing for Premium subscriptions
      const priceId = "price_1QHBZrRpN1tC1oLYAPiFbWv6"; // Actual Stripe pricing ID for Premium subscriptions

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "subscription",
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscription-success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/subscription-cancel`,
      });

      return NextResponse.json({ url: session.url }, { status: 200 });
    }
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json({ message: "Subscription failed" }, { status: 500 });
  }
}

// DELETE method: Delete a subscription
export async function DELETE(req) {
  await connectToDatabase();

  try {
    const { userId, plan } = await req.json();

    if (plan === "Basic") {
      const result = await Subscription.findOneAndDelete({ userId, plan });

      if (result) {
        return NextResponse.json({ message: "Subscription deleted successfully" }, { status: 200 });
      } else {
        return NextResponse.json({ message: "Subscription not found" }, { status: 404 });
      }
    } else {
      return NextResponse.json({ message: "Only Basic subscriptions can be deleted with this endpoint" }, { status: 400 });
    }
  } catch (error) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json({ message: "Failed to delete subscription" }, { status: 500 });
  }
}