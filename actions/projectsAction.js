"use server";
import connectMongo from "@/lib/mongoose";
import projectModel from "@/model/project";
import imageModel from "@/model/image";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import { revalidatePath } from "next/cache";

export async function getProjectTabs() {
  try {
    await connectMongo();
    const tabs = await projectModel
      .find({})
      .populate("tabIcon", "url")
      .populate("projects.projectImage", "url")
      .lean();
    return replaceMongoIdInArray(tabs);
  } catch (error) {
    console.error("Error fetching project tabs:", error);
    return [];
  }
}

export async function getProjectsByTab(tabId) {
  try {
    await connectMongo();
    const tab = await projectModel
      .findById(tabId)
      .populate("tabIcon", "url")
      .populate("projects.projectImage", "url")
      .lean();
    return tab ? replaceMongoIdInObject(tab) : null;
  } catch (error) {
    console.error("Error fetching projects by tab:", error);
    return null;
  }
}

export async function createProject(formData) {
  const data = {
    tabName: formData.get("tabName"),
    tabIcon: formData.get("tabIcon"),
    tabShortDes: formData.get("tabShortDes"),
    projects: [],
  };

  try {
    await connectMongo();
    await projectModel.create(data);
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project category created successfully" };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, msg: error.message };
  }
}

export async function addProjectToTab(tabId, formData) {
  const projectData = {
    projectImage: formData.get("projectImage"),
    projectName: formData.get("projectName"),
    projectShortDesc: formData.get("projectShortDesc"),
  };

  try {
    await connectMongo();
    await projectModel.findByIdAndUpdate(tabId, {
      $push: { projects: projectData },
    });
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project added successfully" };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, msg: error.message };
  }
}

export async function updateProject(tabId, formData) {
  const data = {
    tabName: formData.get("tabName"),
    tabIcon: formData.get("tabIcon"),
    tabShortDes: formData.get("tabShortDes"),
  };

  try {
    await connectMongo();
    await projectModel.findByIdAndUpdate(tabId, data);
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project updated successfully" };
  } catch (error) {
    console.error("Error updating project:", error);
    return { success: false, msg: error.message };
  }
}

export async function deleteProjectTab(tabId) {
  try {
    await connectMongo();
    await projectModel.findByIdAndDelete(tabId);
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project deleted successfully" };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { success: false, msg: error.message };
  }
}

export async function deleteProject(tabId, projectIndex) {
  try {
    await connectMongo();
    const tab = await projectModel.findById(tabId);
    tab.projects.splice(projectIndex, 1);
    await tab.save();
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project removed successfully" };
  } catch (error) {
    console.error("Error removing project:", error);
    return { success: false, msg: error.message };
  }
}