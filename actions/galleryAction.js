"use server";
import connectMongo from "@/lib/mongoose";
import imageModel from "@/model/image";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImages(formData) {
  const file = formData.get("image");

  if (!file || typeof file === "string") {
    return { success: false, msg: "No file uploaded" };
  }

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "my_uploads" }, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        })
        .end(buffer);
    });

    await connectMongo();
    await imageModel.create({
      filename: file.name,
      url: uploadResult.secure_url,
      public_id: uploadResult.public_id,
    });

    revalidatePath("/");

    return { success: true, url: uploadResult.secure_url };
  } catch (e) {
    console.error("Upload Error:", e);
    return { success: false, msg: "File upload failed" };
  }
}

export async function getImages() {
  try {
    await connectMongo();
    const images = await imageModel.find({}, "_id filename url").lean();

    return images.map((img) => ({
      _id: img._id.toString(),
      filename: img.filename,
      url: img.url,
    }));
  } catch (e) {
    console.log(e);
    return [];
  }
}
export async function deleteImageAction(imageId) {
  try {
    await connectMongo();
    const image = await imageModel.findById(imageId);
    if (!image) {
      return { success: false, msg: "Image not found" };
    }

    await cloudinary.uploader.destroy(image.public_id);
    await imageModel.findByIdAndDelete(imageId);
    return { success: true };
  } catch (err) {
    console.error("Delete failed:", err);
    return { success: false, msg: "Delete failed" };
  }
}
