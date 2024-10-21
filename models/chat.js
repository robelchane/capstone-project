import mongoose, { Schema } from "mongoose";
import { boolean } from "zod";


const chatSchema = new Schema(
    {
        id: String,
        userId: String,
        seenBy: boolean,


    },
    {
        timestamps: true,
    }

);

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;