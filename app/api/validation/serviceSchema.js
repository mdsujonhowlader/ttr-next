import z from "zod";

export const serviceSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
  icon: z.string().min(1, { message: "Icon is Required" }),
  description: z.string().min(1, { message: "Description is Required" }),
});
