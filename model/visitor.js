import { Schema, model, models } from "mongoose";

const VisitorSchema = new Schema(
  {
    ip: { type: String, required: true },
    userAgent: { type: String },
    page: { type: String },
    visitedAt: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false }
);

const Visitor = models.Visitor || model("Visitor", VisitorSchema);

export default Visitor;