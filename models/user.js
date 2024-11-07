import mongoose, { Schema } from "mongoose";


const userSchema = new Schema(
    {
      clerkId: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
      savedProperties: [{ type: Schema.Types.ObjectId, ref: "Property" }],
      createdAt,
      updatedAt,
      
    
    },
    {
      timestamps: true,  // Automatically adds createdAt and updatedAt timestamps
    }
  );

    const User = mongoose.models.User || mongoose.model("User", userSchema);

    export default User;