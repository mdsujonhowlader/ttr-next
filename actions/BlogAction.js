"use server";
import connectMongo from "@/lib/mongoose";
import blogModel from "@/model/blogs";
import imageModel from "@/model/image";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import { blogSchema } from "@/validation/validationSchema";

export async function createBlog(formData) {
  const tags = JSON.parse(formData.get("tags") || "[]");

  const data = {
    title: formData.get("title"),
    imageId: formData.get("imageId"),
    slug: formData.get("slug"),
    blogshortdesc: formData.get("blogshortdesc"),
    bloglongDescription: formData.get("bloglongDescription"),
    tags,
  };

  const validation = blogSchema.safeParse(data);
  if (!validation.success) {
    const errors = validation?.error?.issues.map((issue) => ({
      path: issue.path,
      message: issue.message,
    }));

    return { success: false, errors };
  }
  try {
    await connectMongo();
    await blogModel.create(validation.data);
    return { success: true, msg: "Blog Created Successfully" };
  } catch (err) {
    console.error("blog failed:", err);
    return { success: false, message: "Blog add failed" };
  }
}

export async function getBlogs() {
  try {
    await connectMongo();

    const blogData = await blogModel
      .find({})
      .select(["_id", "title", "slug", "imageId", "tags", "blogshortdesc"])
      .populate({
        path: "imageId",
        select: "url",
        model: imageModel,
      })
      .lean();
    return replaceMongoIdInArray(blogData);
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getBlogBySlug(slug) {
  try {
    await connectMongo();

    const blogData = await blogModel
      .findOne({ slug })
      .populate({
        path: "imageId",
        select: "url",
        model: imageModel,
      })
      .lean();

    if (!blogData) {
      return { error: "Blog not found" };
    }

    return replaceMongoIdInObject(blogData);
  } catch (error) {
    console.error("MongoDB Error:", error);
    return { error: error.message || "Something went wrong" };
  }
}

export async function deleteBlogById(id) {
  try {
    await connectMongo();
    const deleteBlog = await blogModel.findByIdAndDelete({ id });
    return deleteBlog;
  } catch (error) {
    console.error("MongoDB Error:", error);
    return { error: error.message || "Something went wrong" };
  }
}
