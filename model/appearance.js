import { Schema, model, models } from "mongoose";

const AppearanceSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const AppearanceModel =
  models.Appearance ?? model("Appearance", AppearanceSchema);
export default AppearanceModel;
