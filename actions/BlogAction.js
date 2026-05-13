"use server";
import connectMongo from "@/lib/mongoose";
import blogModel from "@/model/blogs";
import imageModel from "@/model/image";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";
import { blogSchema } from "@/validation/validationSchema";
import { generateSlug } from "@/utils/slugUtils";

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
    return { success: false, msg: "Blog add failed" };
  }
}

export async function getBlogs() {
  try {
    await connectMongo();

    const blogData = await blogModel
      .find({})
      .select(["_id", "title", "slug", "imageId", "tags", "blogshortdesc", "createdAt"])
      .populate({
        path: "imageId",
        select: "url",
        model: imageModel,
      })
      .lean();
    return replaceMongoIdInArray(blogData);
  } catch (error) {
    console.log(error);
    return [];
  }
}

function ensureBlogSlug(blog) {
  if (blog.slug) return blog.slug;
  const id = blog._id?.toString();
  const suffix = id ? id.slice(-6) : Math.random().toString(36).slice(2, 8);
  return generateSlug(blog.title || "blog") + "-" + suffix;
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

    if (blogData) {
      return replaceMongoIdInObject(blogData);
    }

    const allBlogs = await blogModel
      .find({})
      .populate({
        path: "imageId",
        select: "url",
        model: imageModel,
      })
      .lean();

    for (const blog of allBlogs) {
      if (ensureBlogSlug(blog) === slug) {
        return replaceMongoIdInObject(blog);
      }
    }

    return { success: false, error: "Blog not found" };
  } catch (error) {
    console.error("MongoDB Error:", error);
    return { success: false, error: error.message || "Something went wrong" };
  }
}

export async function deleteBlogById(id) {
  try {
    await connectMongo();
    await blogModel.findByIdAndDelete(id);
    return { success: true, msg: "Blog deleted successfully" };
  } catch (error) {
    console.error("MongoDB Error:", error);
    return { success: false, error: error.message || "Something went wrong" };
  }
}
