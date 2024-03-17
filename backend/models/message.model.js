import mongoose from "mongoose";
import User from "./user.model.js";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  // createdAt , updatedAt => message.createdAt 15:30
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
