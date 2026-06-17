"use server";
import connectMongo from "@/lib/mongoose";
import projectModel from "@/model/project";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import { generateSlug } from "@/utils/slugUtils";
import { projectSchema, projectTabSchema } from "@/validation/validationSchema";
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
    console.log(error);
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

function ensureSlug(project) {
  if (project.slug) return project.slug;
  const id = project._id?.toString();
  const suffix = id ? id.slice(-6) : Math.random().toString(36).slice(2, 8);
  return generateSlug(project.projectName || "project") + "-" + suffix;
}

export async function getAllProjects() {
  try {
    await connectMongo();
    const tabs = await projectModel
      .find({})
      .populate("tabIcon", "url")
      .populate("projects.projectImage", "url")
      .lean();

    const all = [];
    for (const tab of tabs) {
      for (const project of tab.projects || []) {
        all.push({
          id: project._id?.toString(),
          projectImage: project.projectImage?.url,
          projectName: project.projectName,
          slug: ensureSlug(project),
          tags: project.tags || [],
          projectShortDesc: project.projectShortDesc,
          projectLongDesc: project.projectLongDesc || "",
          category: tab.tabName,
          categorySlug: tab.tabSlug || generateSlug(tab.tabName),
          tabId: tab._id?.toString(),
        });
      }
    }
    return all;
  } catch (error) {
    console.error("Error fetching all projects:", error);
    return [];
  }
}

export async function getProjectBySlug(slug) {
  try {
    await connectMongo();
    const tabs = await projectModel
      .find({})
      .populate("tabIcon", "url")
      .populate("projects.projectImage", "url")
      .lean();

    for (const tab of tabs) {
      for (const project of tab.projects || []) {
        const projectSlug = ensureSlug(project);
        if (projectSlug === slug) {
          return {
            id: project._id?.toString(),
            projectImage: project.projectImage?.url,
            projectName: project.projectName,
            slug: projectSlug,
            tags: project.tags || [],
            projectShortDesc: project.projectShortDesc,
            projectLongDesc: project.projectLongDesc || "",
            category: tab.tabName,
            categorySlug: tab.tabSlug || generateSlug(tab.tabName),
            tabId: tab._id?.toString(),
          };
        }
      }
    }
    return null;
  } catch (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }
}

export async function createProjectTab(formData) {
  const data = {
    tabName: formData.get("tabName"),
    tabSlug: generateSlug(formData.get("tabName")),
    tabIcon: formData.get("tabIcon"),
    tabShortDes: formData.get("tabShortDes"),
  };

  const validation = projectTabSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, msg: validation.error.errors[0].message };
  }

  try {
    await connectMongo();
    const existing = await projectModel.findOne({ tabSlug: data.tabSlug });
    if (existing) {
      return { success: false, msg: "A category with this name already exists" };
    }
    await projectModel.create({ ...validation.data, projects: [] });
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project category created successfully" };
  } catch (error) {
    console.error("Error creating project:", error);
    return { success: false, msg: error.message };
  }
}

function generateUniqueSlug(baseSlug) {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return `${baseSlug}-${timestamp}${random}`;
}

export async function addProjectToTab(tabId, formData) {
  const projectName = formData.get("projectName");
  const baseSlug = generateSlug(projectName);
  const projectImage = formData.get("projectImage");
  const tagsRaw = formData.get("tags");
  const projectShortDesc = formData.get("projectShortDesc");
  const projectLongDesc = formData.get("projectLongDesc") || "";

  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()).filter(Boolean) : [];

  try {
    await connectMongo();

    let slug = baseSlug;
    const tabs = await projectModel.find({ "projects.slug": baseSlug });
    const slugExists = tabs.some((tab) =>
      (tab.projects || []).some((p) => p.slug === baseSlug)
    );
    if (slugExists) {
      slug = generateUniqueSlug(baseSlug);
    }

    const projectData = {
      projectName,
      slug,
      projectImage,
      tags,
      projectShortDesc,
      projectLongDesc,
    };

    const validation = projectSchema.safeParse(projectData);
    if (!validation.success) {
      return { success: false, msg: validation.error.errors[0].message };
    }

    await projectModel.findByIdAndUpdate(tabId, {
      $push: { projects: validation.data },
    });

    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project added successfully", slug };
  } catch (error) {
    console.error("Error adding project:", error);
    return { success: false, msg: error.message };
  }
}

export async function updateProject(tabId, projectSlug, formData) {
  const projectName = formData.get("projectName");

  const projectData = {
    projectName,
    slug: formData.get("slug") || generateSlug(projectName),
    projectImage: formData.get("projectImage"),
    tags: (formData.get("tags") || "")
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean),
    projectShortDesc: formData.get("projectShortDesc"),
    projectLongDesc: formData.get("projectLongDesc") || "",
  };

  const validation = projectSchema.safeParse(projectData);
  if (!validation.success) {
    return { success: false, msg: validation.error.errors[0].message };
  }

  try {
    await connectMongo();
    await projectModel.findOneAndUpdate(
      { _id: tabId, "projects.slug": projectSlug },
      { $set: { "projects.$": validation.data } }
    );
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

export async function deleteProject(tabId, projectSlug) {
  try {
    await connectMongo();
    await projectModel.findByIdAndUpdate(tabId, {
      $pull: { projects: { slug: projectSlug } },
    });
    revalidatePath("/dashboard/projects");
    revalidatePath("/projects");
    return { success: true, msg: "Project removed successfully" };
  } catch (error) {
    console.error("Error removing project:", error);
    return { success: false, msg: error.message };
  }
}

export async function backfillProjectSlugs() {
  try {
    await connectMongo();
    const tabs = await projectModel.find({}).lean();
    let updated = 0;

    for (const tab of tabs) {
      let changed = false;
      const tabUpdates = [];
      for (const [i, project] of (tab.projects || []).entries()) {
        const updates = {};
        if (!project.slug) {
          updates.slug = generateSlug(project.projectName || "project") + "-" + Date.now().toString(36).slice(-4);
        }
        if (!project.tags) {
          updates.tags = [];
        }
        if (!project.projectLongDesc && project.projectLongDesc !== "") {
          updates.projectLongDesc = "";
        }
        if (Object.keys(updates).length > 0) {
          tabUpdates.push({ index: i, updates });
          changed = true;
        }
      }
      if (changed) {
        const setFields = {};
        for (const { index, updates } of tabUpdates) {
          for (const [key, value] of Object.entries(updates)) {
            setFields[`projects.${index}.${key}`] = value;
          }
        }
        await projectModel.findByIdAndUpdate(tab._id, { $set: setFields });
        updated += tabUpdates.length;
      }
    }

    revalidatePath("/projects");
    revalidatePath("/dashboard/projects");
    return { success: true, msg: `Updated ${updated} projects` };
  } catch (error) {
    console.error("Error backfilling project data:", error);
    return { success: false, msg: error.message };
  }
}
