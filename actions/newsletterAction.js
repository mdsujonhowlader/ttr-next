"use server";

import connectMongo from "@/lib/mongoose";
import SubscriberModel from "@/model/subscriber";

export async function subscribeNewsletter(formData) {
  const email = formData.get("email");

  if (!email) {
    return { success: false, error: "Email is required" };
  }

  try {
    await connectMongo();
    const existing = await SubscriberModel.findOne({ email });
    if (existing) {
      return { success: false, error: "This email is already subscribed" };
    }
    await SubscriberModel.create({ email });
    return { success: true, message: "Subscribed successfully!" };
  } catch (err) {
    console.error("Newsletter subscribe error:", err);
    return { success: false, error: "Subscription failed. Please try again." };
  }
}
