"use server";

import connectMongo from "@/lib/mongoose";
import AppearanceModel from "@/model/appearance";

export async function postAppearance(formData) {
  const types = formData.getAll("type[]");
  const values = formData.getAll("value[]");

  const appearances = types.map((type, i) => ({
    type,
    value: values[i],
  }));

  console.log(appearances);

  try {
    await connectMongo();
    await AppearanceModel.insertMany(appearances);
    return {
      success: true,
    };
  } catch (err) {
    console.error("Failed to save appearance:", err.message);
    return {
      success: false,
      message: err.message,
    };
  }
}

export async function getAppearances() {
  try {
    await connectMongo();
    const primaryColor = await AppearanceModel.find();
    return primaryColor;
  } catch (e) {
    console.log(e);
  }
}
