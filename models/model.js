import mongoose, { Schema } from "mongoose";

// Message Schema
const messageSchema = new Schema(
  {
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User model
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User model
    messageBody: { type: String, required: true },  // The actual message content
    isRead: { type: Boolean, default: false },  // Flag to indicate if the message has been read
    timestamp: { type: Date, default: Date.now },  // Automatically set timestamp
    attachment: { type: String, required: false },  // URL or file path of the attachment, if any
    conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation', required: false },  // For handling threaded conversations
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt timestamps
  }
);

// User Schema
const userSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    savedProperties: [{ type: Schema.Types.ObjectId, ref: "Property" }],  // Reference to saved properties
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt timestamps
  }
);

// Models
const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);
const User = mongoose.models.User || mongoose.model("User", userSchema);

export { Message, User };
