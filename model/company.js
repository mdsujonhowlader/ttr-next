import { Schema, model, models } from "mongoose";

const companySchema = new Schema(
  {
    logo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const companyModel = models.companies ?? model("companies", companySchema);

export default companyModel;
