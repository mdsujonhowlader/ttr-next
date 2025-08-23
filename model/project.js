import mongoose from "mongoose";

const { Schema } = mongoose;

const ProjectSchema = new Schema(
  {
    tabName: {
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
    projects: [
      {
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
        projectShortDesc: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
