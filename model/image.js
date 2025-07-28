import { Schema, model, models } from "mongoose";

const imagesSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const imageModel = models.images ?? model("images", imagesSchema);

export default imageModel;
