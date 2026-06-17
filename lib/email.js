import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = "thetechresolver@gmail.com";
const FROM_ADDRESS = "The Tech Resolver <onboarding@resend.dev>";

export async function sendContactNotification({ name, email, message }) {
  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `New Contact from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;font-weight:bold">Name:</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email:</td><td style="padding:8px">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Message:</td><td style="padding:8px">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend admin notification error:", error);
    throw new Error(error.message);
  }

  return data;
}

export async function sendAutoReply({ name, email }) {
  const { data, error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: email,
    subject: "Thank you for reaching out!",
    html: `
      <h2>Hi ${name},</h2>
      <p>Thank you for contacting The Tech Resolver. <onboarding@resend.dev>We've received your message and will get back to you within 24 hours.</p>
      <p>Best regards,<br/>The Tech Resolver Team</p>
    `,
  });

  if (error) {
    console.error("Resend auto-reply error:", error);
    throw new Error(error.message);
  }

  return data;
}
