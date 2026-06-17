import { Schema, model, models } from "mongoose";

const SubscriberSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true, versionKey: false }
);

const SubscriberModel = models.Subscriber ?? model("Subscriber", SubscriberSchema);
export default SubscriberModel;
