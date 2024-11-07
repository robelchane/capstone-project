// models/subscription.js
import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  plan: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  endDate: Date,
  status: {
    type: String,
    enum: ["active", "canceled"],
    default: "active",
  },
  stripeSubscriptionId: String, // Stripe subscription ID (used for Premium subscription)
});

export default mongoose.models.Subscription || mongoose.model("Subscription", SubscriptionSchema);

