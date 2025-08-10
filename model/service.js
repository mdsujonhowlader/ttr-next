import { Schema, model, models } from "mongoose";

const ServiceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    iconId: {
      type: Schema.Types.ObjectId,
      ref: "images",
      required: true,
    },
    imageId: {
      type: Schema.Types.ObjectId,
      ref: "images",
      required: true,
    },
    shortdescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const serviceModel = models.Services || model("Services", ServiceSchema);

export default serviceModel;
