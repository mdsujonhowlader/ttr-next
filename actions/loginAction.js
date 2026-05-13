"use server";

import connectMongo from "@/lib/mongoose";
import Admin from "@/model/admin";
import { cookies } from "next/headers";

const LOGIN_COOLDOWN_MS = 1000;
const MAX_ATTEMPTS = 5;
const COOLDOWN_WINDOW_MS = 15 * 60 * 1000;

const attemptStore = new Map();

function getClientIp() {
  return "global";
}

function checkRateLimit(identifier) {
  const now = Date.now();
  const record = attemptStore.get(identifier);

  if (!record) {
    attemptStore.set(identifier, { count: 1, firstAttempt: now, lockedUntil: null });
    return { allowed: true };
  }

  if (record.lockedUntil && now < record.lockedUntil) {
    const remaining = Math.ceil((record.lockedUntil - now) / 1000);
    return { allowed: false, retryAfter: remaining };
  }

  if (now - record.firstAttempt > COOLDOWN_WINDOW_MS) {
    attemptStore.set(identifier, { count: 1, firstAttempt: now, lockedUntil: null });
    return { allowed: true };
  }

  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOGIN_COOLDOWN_MS * Math.pow(2, record.count - MAX_ATTEMPTS);
    return { allowed: false, retryAfter: Math.ceil(LOGIN_COOLDOWN_MS / 1000) };
  }

  record.count += 1;
  return { allowed: true };
}

export async function loginAdmin(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email || !password) {
    return { success: false, error: "Email and password are required" };
  }

  const ip = getClientIp();
  const rateCheck = checkRateLimit(ip);

  if (!rateCheck.allowed) {
    return { success: false, error: `Too many attempts. Try again in ${rateCheck.retryAfter} seconds.` };
  }

  try {
    await connectMongo();
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return { success: false, error: "Invalid email or password" };
    }

    const valid = await admin.comparePassword(password);

    if (!valid) {
      return { success: false, error: "Invalid email or password" };
    }

    attemptStore.delete(ip);

    const cookieStore = await cookies();
    cookieStore.set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return { success: true };
  } catch (error) {
    console.error("Login action failed:", error);
    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete("admin-auth");
  return { success: true };
}
