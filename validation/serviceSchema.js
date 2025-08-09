import z from "zod";

export const serviceSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  iconId: z.string().min(1, { message: "Icon is Required" }),
  imageId: z.string().min(1, { message: "Image is required" }),
  description: z.string().min(1, { message: "Description is Required" }),
});
