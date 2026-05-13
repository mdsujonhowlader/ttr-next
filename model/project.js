import { Schema, model, models } from "mongoose";

const ProjectSubSchema = new Schema({
  projectImage: {
    type: Schema.Types.ObjectId,
    ref: "images",
    required: true,
  },
  projectName: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    trim: true,
  },
  tags: [{ type: String, trim: true }],
  projectShortDesc: {
    type: String,
    required: true,
  },
  projectLongDesc: {
    type: String,
    default: "",
  },
});

const ProjectSchema = new Schema(
  {
    tabName: {
      type: String,
      required: true,
      trim: true,
    },
    tabSlug: {
      type: String,
      required: true,
      trim: true,
    },
    tabIcon: {
      type: Schema.Types.ObjectId,
      ref: "images",
      required: true,
    },
    tabShortDes: {
      type: String,
      required: true,
    },
    projects: [ProjectSubSchema],
  },
  { timestamps: true, versionKey: false }
);

const ProjectModel = models.Project ?? model("Project", ProjectSchema);
export default ProjectModel;
