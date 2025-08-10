"use server";

import connectMongo from "@/lib/mongoose";
import Admin from "@/model/admin";
import { cookies } from "next/headers";

export async function loginAdmin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await connectMongo();
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return { error: "Invalid Email" };
    }

    if (admin.password !== password) {
      return { error: "Invalid password" };
    }

    await cookies().set({
      name: "admin-auth",
      value: "true",
      httpOnly: true,
      path: "/",

      maxAge: 60 * 60 * 24,
    });
    return { success: true };
  } catch (error) {
    console.error("Login action failed:", error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}

export async function logoutAdmin() {
  await cookies().delete("admin-auth");
}
