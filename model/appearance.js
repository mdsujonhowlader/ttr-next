import mongoose, { model, models } from "mongoose";

const AppearanceSchema = new mongoose.Schema(
  {
    primaryColor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const AppearanceModel =
  models.Appearance ?? model("Appearance", AppearanceSchema);
export default AppearanceModel;
