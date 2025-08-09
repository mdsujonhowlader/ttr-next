"use server";
import connectMongo from "@/lib/mongoose";
import imageModel from "@/model/image";
import { writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";
export async function uploadImages(formData) {
  const file = formData.get("image");

  if (!file || typeof file === "string") {
    return { success: false, message: "No file uploaded" };
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const fileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2)}-${file.name.replace(/\s+/g, "_")}`;
  const filePath = path.join(uploadDir, fileName);
  const url = `/uploads/${fileName}`;
  try {
    await connectMongo();
    await writeFile(filePath, buffer);
    revalidatePath("/");
    await imageModel.create({
      filename: file.name,
      path: url,
    });
    return { success: true, url };
  } catch (e) {
    return { success: false, message: "File upload failed" };
  }
}

export async function getImages() {
  try {
    await connectMongo();
    const images = await imageModel.find({}, "_id filename path").lean();
    return images.map((img) => ({
      _id: img._id.toString(),
      filename: img.filename,
      path: img.path,
    }));
  } catch (e) {
    console.log(e);
    return [];
  }
}
