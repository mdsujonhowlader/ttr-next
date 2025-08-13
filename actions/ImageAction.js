import connectMongo from "@/lib/mongoose";
import imageModel from "@/model/image";

export async function getImages() {
  try {
    await connectMongo();
    const images = await imageModel.find({});
    const safeImages = images.map((image) => ({
      _id: image._id.toString(),
      filename: image.filename,
      url: image.url,
      public_id: image.public_id,
    }));
    return { success: true, images: safeImages };
  } catch (error) {
    console.error("Error fetching images:", error);
    return { success: false, error: "Failed to fetch images" };
  }
}