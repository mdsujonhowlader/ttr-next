"use client";

import { addProjectToTab } from "@/actions/projectsAction";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  Save,
  ArrowLeft,
  ImageIcon,
  Plus,
  X,
  Tags,
  Check,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AllFileGellary from "../../../../_components/gallery/AllFileGellary";

export default function AddProjectForm({ safeImages, safeTabs }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    projectName: "",
    projectShortDesc: "",
    projectLongDesc: "",
    tabId: safeTabs.length > 0 ? safeTabs[0]._id : "",
  });

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function addTag() {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags((prev) => [...prev, trimmed]);
      setTagInput("");
    }
  }

  function removeTag(tag) {
    setTags((prev) => prev.filter((t) => t !== tag));
  }

  function handleTagKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formData.tabId) {
      toast.error("Please select a category");
      return;
    }
    if (!formData.projectName.trim()) {
      toast.error("Project name is required");
      return;
    }
    if (!selectedImage) {
      toast.error("Please select a thumbnail");
      return;
    }

    setSaving(true);
    const fd = new FormData();
    fd.append("tabId", formData.tabId);
    fd.append("projectName", formData.projectName);
    fd.append("projectImage", selectedImage._id);
    fd.append("tags", tags.join(","));
    fd.append("projectShortDesc", formData.projectShortDesc);
    fd.append("projectLongDesc", formData.projectLongDesc);

    const res = await addProjectToTab(formData.tabId, fd);
    setSaving(false);

    if (res.success) {
      toast.success(res.msg);
      router.push("/dashboard/projects/view-projects");
    } else {
      toast.error(res.msg);
    }
  }

  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={(img) => {
          setSelectedImage(img);
          setShowGallery(false);
        }}
        showGallery={showGallery}
      />

      <div className="max-w-4xl mx-auto">
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
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center">
                <Plus className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Add New Project
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Add a project to one of your existing categories
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {safeTabs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  No categories exist yet. Create a category first.
                </p>
                <Link
                  href="/dashboard/projects/add-project"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  <Plus className="w-4 h-4" />
                  Create Category
                </Link>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.tabId}
                        onChange={(e) => handleChange("tabId", e.target.value)}
                        required
                        className="mt-2 w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a category</option>
                        {safeTabs.map((tab) => (
                          <option key={tab._id} value={tab._id}>
                            {tab.tabName}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Project Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., E-commerce Dashboard"
                        value={formData.projectName}
                        onChange={(e) =>
                          handleChange("projectName", e.target.value)
                        }
                        required
                        className="mt-2 w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Tags
                      </label>
                      <div className="mt-2 flex flex-wrap gap-2 mb-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tag}
                            <button
                              type="button"
                              onClick={() => removeTag(tag)}
                              className="hover:text-red-500 transition-colors"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Type a tag and press Enter"
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyDown={handleTagKeyDown}
                          className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                        <button
                          type="button"
                          onClick={addTag}
                          className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Short Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        placeholder="Brief description of the project"
                        value={formData.projectShortDesc}
                        onChange={(e) =>
                          handleChange("projectShortDesc", e.target.value)
                        }
                        rows={3}
                        required
                        className="mt-2 w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Full Description
                      </label>
                      <textarea
                        placeholder="Detailed description of the project, technologies used, challenges, etc."
                        value={formData.projectLongDesc}
                        onChange={(e) =>
                          handleChange("projectLongDesc", e.target.value)
                        }
                        rows={6}
                        className="mt-2 w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Project Thumbnail <span className="text-red-500">*</span>
                      </label>
                      <input type="hidden" name="projectImage" value={selectedImage?._id || ""} />

                      <div className="mt-3">
                        {selectedImage ? (
                          <div className="relative group">
                            <div className="aspect-video bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden border-2 border-primary">
                              <Image
                                src={selectedImage.url}
                                alt="Selected thumbnail"
                                width={600}
                                height={338}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                              <button
                                type="button"
                                onClick={() => setSelectedImage(null)}
                                className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                              >
                                <X className="w-5 h-5 text-white" />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowGallery(true)}
                            className="w-full aspect-video flex flex-col items-center justify-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                          >
                            <ImageIcon className="w-10 h-10 text-gray-400" />
                            <span className="text-sm text-gray-500">
                              Select from Gallery
                            </span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-end gap-4">
                  <Link
                    href="/dashboard/projects/view-projects"
                    className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors font-medium"
                  >
                    Cancel
                  </Link>
                  <button
                    type="submit"
                    disabled={
                      saving ||
                      !formData.projectName.trim() ||
                      !formData.projectShortDesc.trim() ||
                      !selectedImage
                    }
                    className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                  >
                    {saving ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Check className="w-5 h-5" />
                        Add Project
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
