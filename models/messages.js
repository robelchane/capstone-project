import mongoose, { Schema } from "mongoose";

// Message Schema
const messageSchema = new Schema(
  {
    senderId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User model
    receiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to User model
    messageBody: { type: String, required: true },  // The actual message content
    isRead: { type: Boolean, default: false },  // Flag to indicate if the message has been read
    attachment: { type: String, required: false },  // URL or file path of the attachment, if any
    conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation', required: false },  // For handling threaded conversations
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt timestamps
  }
);



// Models
const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);

export { Message };
