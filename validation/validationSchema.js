import z from "zod";

export const serviceSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  iconId: z.string().min(1, { message: "Icon is Required" }),
  imageId: z.string().min(1, { message: "Image is required" }),
  shortdescription: z
    .string()
    .min(1, { message: "short Description is Required" }),
  longDescription: z
    .string()
    .min(1, { message: "Long Description is Required" }),
});

export const projectSchema = z.object({
  projectName: z.string().min(1, { message: "Project name is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  projectImage: z.string().min(1, { message: "Thumbnail is required" }),
  tags: z.array(z.string()).optional().default([]),
  projectShortDesc: z.string().min(1, { message: "Short description is required" }),
  projectLongDesc: z.string().optional().default(""),
});

export const projectTabSchema = z.object({
  tabName: z.string().min(1, { message: "Category name is required" }),
  tabSlug: z.string().min(1, { message: "Category slug is required" }),
  tabIcon: z.string().min(1, { message: "Category icon is required" }),
  tabShortDes: z.string().min(1, { message: "Category description is required" }),
});

export const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export const blogSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  imageId: z.string().min(1, { message: "Thumbnail is required" }),
  slug: z.string().min(1, { message: "Slug is Required" }),
  tags: z.array(z.string().min(1)).max(3, "You can only add up to 3 tags"),
  blogshortdesc: z
    .string()
    .min(1, { message: "short Description is Required" }),
  bloglongDescription: z
    .string()
    .min(1, { message: "Long Description is Required" }),
});
