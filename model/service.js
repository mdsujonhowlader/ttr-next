import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    imageId: {
      type: Schema.Types.ObjectId,
      ref: "images",
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

export default models.Services || model("Services", ServiceSchema);
