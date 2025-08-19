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
