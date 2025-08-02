"use server";

import connectMongo from "@/lib/mongoose";
import Admin from "@/model/admin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAdmin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await connectMongo();
    const admin = await Admin.findOne({ email });

    if (!admin) {
      console.error("Admin not found");
      throw new Error("Invalid email");
    }

    if (admin.password !== password) {
      console.error("Password mismatch");
      throw new Error("Invalid password");
    }
  } catch (e) {
    console.log(e.message);
  }

  await cookies().set({
    name: "admin-auth",
    value: "true",
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  redirect("/dashboard");
}

export async function logoutAdmin() {
  await cookies().delete("admin-auth");
}
