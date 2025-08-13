import { model, models, Schema } from "mongoose";

const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    imageId: {
      type: Schema.Types.ObjectId,
      ref: "images",
      required: true,
    },
    blogshortdesc: {
      type: String,
      required: true,
    },
    bloglongDescription: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
      index: true,
    },
  },
  { timestamps: true, versionKey: false }
);
const blogModel = models.blogs ?? model("blogs", BlogSchema);
export default blogModel;
