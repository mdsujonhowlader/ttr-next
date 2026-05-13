"use client";

import { deleteProject, updateProject } from "@/actions/projectsAction";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Trash2,
  Save,
  Plus,
  X,
  Folder,
  ExternalLink,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";
import AllFileGellary from "../../../../../_components/gallery/AllFileGellary";

export default function ManageTabProjects({ tab, safeImages }) {
  const router = useRouter();
  const [editingSlug, setEditingSlug] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [galleryTarget, setGalleryTarget] = useState(null);
  const [editForm, setEditForm] = useState({});

  function startEdit(project) {
    setEditingSlug(project.slug);
    setEditForm({
      projectName: project.projectName,
      slug: project.slug,
      projectShortDesc: project.projectShortDesc,
      projectLongDesc: project.projectLongDesc || "",
      tags: project.tags?.join(", ") || "",
      projectImage: project.projectImage,
    });
  }

  function cancelEdit() {
    setEditingSlug(null);
    setEditForm({});
  }

  async function handleUpdate(e) {
    e.preventDefault();
    setSaving(true);
    const fd = new FormData();
    fd.append("projectName", editForm.projectName);
    fd.append("slug", editForm.slug);
    fd.append("projectImage", editForm.projectImage);
    fd.append("tags", editForm.tags);
    fd.append("projectShortDesc", editForm.projectShortDesc);
    fd.append("projectLongDesc", editForm.projectLongDesc);

    const res = await updateProject(tab._id, editingSlug, fd);
    setSaving(false);

    if (res.success) {
      toast.success(res.msg);
      setEditingSlug(null);
      router.refresh();
    } else {
      toast.error(res.msg);
    }
  }

  async function handleDelete(slug, projectName) {
    if (!confirm(`Delete "${projectName}"? This cannot be undone.`)) return;
    setDeleting(slug);
    const res = await deleteProject(tab._id, slug);
    setDeleting(null);
    if (res.success) {
      toast.success(res.msg);
      router.refresh();
    } else {
      toast.error(res.msg);
    }
  }

  function openGalleryFor(project) {
    setGalleryTarget(project.slug);
    setShowGallery(true);
  }

  function handleGallerySelect(img) {
    setEditForm((prev) => ({ ...prev, projectImage: img._id }));
    setShowGallery(false);
  }

  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={handleGallerySelect}
        showGallery={showGallery}
      />

      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <Link
            href="/dashboard/projects/view-projects"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {tab.tabIcon?.url ? (
                  <div className="w-14 h-14 relative rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={tab.tabIcon.url}
                      alt={tab.tabName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                    <Folder className="w-7 h-7 text-primary" />
                  </div>
                )}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {tab.tabName}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    {tab.projects?.length || 0} projects
                  </p>
                </div>
              </div>
              <Link
                href={`/dashboard/projects/add-project-to-tab`}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Project
              </Link>
            </div>
          </div>

          {tab.projects?.length > 0 ? (
            <div className="p-6 space-y-4">
              {tab.projects.map((project) => (
                <div
                  key={project.slug}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-200 dark:border-gray-600 overflow-hidden"
                >
                  {editingSlug === project.slug ? (
                    <form onSubmit={handleUpdate} className="p-5 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Project Name
                          </label>
                          <input
                            type="text"
                            value={editForm.projectName}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                projectName: e.target.value,
                              }))
                            }
                            required
                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Slug
                          </label>
                          <input
                            type="text"
                            value={editForm.slug}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                slug: e.target.value,
                              }))
                            }
                            required
                            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary font-mono text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Tags (comma separated)
                        </label>
                        <input
                          type="text"
                          value={editForm.tags}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              tags: e.target.value,
                            }))
                          }
                          placeholder="React, Node.js, MongoDB"
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Short Description
                        </label>
                        <textarea
                          value={editForm.projectShortDesc}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              projectShortDesc: e.target.value,
                            }))
                          }
                          rows={2}
                          required
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Full Description
                        </label>
                        <textarea
                          value={editForm.projectLongDesc}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              projectLongDesc: e.target.value,
                            }))
                          }
                          rows={4}
                          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Thumbnail
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => openGalleryFor(project)}
                            className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                          >
                            <ImageIcon className="w-4 h-4" />
                            Change Image
                          </button>
                          <input
                            type="hidden"
                            name="projectImage"
                            value={editForm.projectImage}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-end gap-3 pt-2 border-t border-gray-200 dark:border-gray-600">
                        <button
                          type="button"
                          onClick={cancelEdit}
                          className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          disabled={saving}
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                        >
                          <Save className="w-4 h-4" />
                          {saving ? "Saving..." : "Save Changes"}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="p-4 flex items-start gap-4">
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-600 flex-shrink-0">
                        {project.projectImage ? (
                          <Image
                            src={project.projectImage}
                            alt={project.projectName}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-400">
                            No Img
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {project.projectName}
                            </h3>
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                              /projects/{project.slug}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {project.slug && (
                              <Link
                                href={`/projects/${project.slug}`}
                                target="_blank"
                                className="p-2 text-gray-400 hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                            )}
                            <button
                              onClick={() => startEdit(project)}
                              className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDelete(project.slug, project.projectName)
                              }
                              disabled={deleting === project.slug}
                              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        {project.tags?.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                          {project.projectShortDesc}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-12 text-center">
              <Folder className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No projects in this category yet
              </p>
              <Link
                href="/dashboard/projects/add-project-to-tab"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add First Project
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
