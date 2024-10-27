import mongoose, { Schema } from "mongoose";

const subscriptionPlansSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    propertyLimit: { type: Number, required: true },
    imagePerPropertyLimit: { type: Number, required: true },
    features: { type: [String], required: true } // features를 배열로 변경
  },
  {
    timestamps: true,
  }
);

const SubscriptionPlans = mongoose.model("SubscriptionPlans", subscriptionPlansSchema);

export default SubscriptionPlans;
