"use server";
import connectMongo from "@/lib/mongoose";
import serviceModel from "@/model/service";
import { serviceSchema } from "@/validation/serviceSchema";
export async function postServices(formData) {
  const data = {
    title: formData.get("title"),
    iconId: formData.get("iconId"),
    imageId: formData.get("imageId"),
    description: formData.get("description"),
  };

  const validation = serviceSchema.safeParse(data);
  if (!validation.success) {
    const errors = validation?.error?.issues.map((issue) => ({
      path: issue.path,
      message: issue.message,
    }));

    return { success: false, errors };
  }
  try {
    await connectMongo();

    await serviceModel.create(validation.data);

    return { success: true, msg: "Services Created Successfully" };
  } catch (err) {
    const msg = err.message;
    return { success: false, msg };
  }
}
