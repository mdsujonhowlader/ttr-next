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
    redirect("/dashboard");
  } catch (e) {
    console.log(e.message);
    return { error: "Something went wrong" };
  }
}

export async function logoutAdmin() {
  await cookies().delete("admin-auth");
}
