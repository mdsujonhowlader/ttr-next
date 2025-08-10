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
