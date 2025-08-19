"use server";
import connectMongo from "@/lib/mongoose";
import "@/model/image";
import serviceModel from "@/model/service";
import { replaceMongoIdInArray } from "@/utils/data-utils";
import { serviceSchema } from "@/validation/validationSchema";
import { revalidatePath } from "next/cache";
export async function postServices(formData) {
  const data = {
    title: formData.get("title"),
    iconId: formData.get("iconId"),
    imageId: formData.get("imageId"),
    shortdescription: formData.get("shortdescription"),
    longDescription: formData.get("longDescription"),
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
    revalidatePath("/");
    return { success: true, msg: "Services Created Successfully" };
  } catch (err) {
    const msg = err.message;
    return { success: false, msg };
  }
}

export async function getServices() {
  try {
    await connectMongo();

    const servicedata = await serviceModel
      .find({}, "_id title iconId shortdescription")
      .populate("iconId", "url")
      .lean();

    return replaceMongoIdInArray(servicedata);
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getServicesById(id) {
  try {
    await connectMongo();
    const service = await serviceModel
      .findById(id)
      .populate("iconId", "url")
      .populate("imageId", "url")
      .lean();
    return service;
  } catch (error) {
    console.log(error);
    return { error };
  }
}
