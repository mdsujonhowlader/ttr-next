"use server";

import connectMongo from "@/lib/mongoose";
import AppearanceModel from "@/model/appearance";
// get color:name-> primaryColor
export async function postAppearance(formData) {
  const primaryColor = formData.get("primaryColor")?.toString();
  try {
    await connectMongo();

    const appearances = await AppearanceModel.create({ primaryColor });
    return {
      success: true,
      appearances: JSON.parse(JSON.stringify(appearances)),
    };
  } catch (e) {
    console.log(e.message);
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
