"use server";

import { connectDB } from "@/lib/mongodb";
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);

export async function submitContactForm(formData) {
  try {
    await connectDB();

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await Message.create({ name, email, message });

    return {
      message: "Thanks for your message, Sohil will get back to you soon!",
    };
  } catch (error) {
    console.error("Error saving message:", error);
    return { message: "Something went wrong. Please try again later." };
  }
}
