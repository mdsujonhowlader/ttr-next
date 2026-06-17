import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs";

const AdminSchema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: "admin" }
);

AdminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

AdminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default models.Admin ?? model("Admin", AdminSchema);
