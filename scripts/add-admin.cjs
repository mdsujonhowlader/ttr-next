const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const envPath = path.resolve(__dirname, "..", ".env");
const envContent = fs.readFileSync(envPath, "utf-8");
envContent.split("\n").forEach((line) => {
  const [key, ...rest] = line.split("=");
  if (key && rest.length) {
    process.env[key.trim()] = rest.join("=").trim();
  }
});

const ADMIN_EMAIL = "admin@thetechresolver.com";
const ADMIN_PASSWORD = crypto.randomBytes(4).toString("hex") + "-" + crypto.randomBytes(2).toString("hex");

const AdminSchema = new mongoose.Schema(
  { email: { type: String, required: true }, password: { type: String, required: true } },
  { collection: "admin" }
);

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

async function main() {
  const uri = process.env.MONGO_DB;
  if (!uri) {
    console.error("MONGO_DB env var not set");
    process.exit(1);
  }
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  const hashed = await bcrypt.hash(ADMIN_PASSWORD, 12);

  const existing = await Admin.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    console.log("Admin already exists. Updating password...");
    await Admin.updateOne({ email: ADMIN_EMAIL }, { password: hashed });
  } else {
    await Admin.create({ email: ADMIN_EMAIL, password: hashed });
    console.log("Admin created.");
  }

  console.log("\n--- ADMIN CREDENTIALS ---");
  console.log("Email:    " + ADMIN_EMAIL);
  console.log("Password: " + ADMIN_PASSWORD);
  console.log("-------------------------\n");

  await mongoose.disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
