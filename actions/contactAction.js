"use server";

import connectMongo from "@/lib/mongoose";
import ContactModel from "@/model/contact";
import { contactSchema } from "@/validation/validationSchema";
import { sendContactNotification, sendAutoReply } from "@/lib/email";

export async function submitContact(formData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validation = contactSchema.safeParse(data);
  if (!validation.success) {
    const errors = {};
    for (const issue of validation.error.issues) {
      errors[issue.path[0]] = issue.message;
    }
    return { success: false, errors };
  }

  try {
    await connectMongo();
    await ContactModel.create(validation.data);

    let emailWarnings = [];

    try {
      await sendContactNotification(validation.data);
    } catch (emailErr) {
      console.error("Failed to send admin notification:", emailErr);
      emailWarnings.push("admin notification");
    }

    try {
      await sendAutoReply(validation.data);
    } catch (emailErr) {
      console.error("Failed to send auto-reply:", emailErr);
      emailWarnings.push("auto-reply");
    }

    const msg =
      emailWarnings.length > 0
        ? "Message saved. Note: " + emailWarnings.join(" & ") + " email failed."
        : "Message sent successfully! We'll get back to you soon.";

    return { success: true, message: msg };
  } catch (err) {
    console.error("Contact form error:", err);
    return { success: false, errors: { _form: "Failed to send message. Please try again." } };
  }
}
