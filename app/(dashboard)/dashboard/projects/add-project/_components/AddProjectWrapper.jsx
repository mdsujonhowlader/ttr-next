"use client";

import { createProjectTab } from "@/actions/projectsAction";
import { Button, Field, Input, Label, Textarea } from "@headlessui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Save, ArrowLeft, ImageIcon, Folder, Check, Plus, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AllFileGellary from "../../../../_components/gallery/AllFileGellary";

export default function AddProjectWrapper({ safeImages }) {
  const [saving, setSaving] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [formData, setFormData] = useState({
    tabName: "",
    tabShortDes: "",
  });

  async function handleSubmit(formDataSubmit) {
    setSaving(true);
    formDataSubmit.append("tabIcon", selectedIcon?._id || "");
    const res = await createProjectTab(formDataSubmit);
    if (res.success) {
      toast.success(res.msg);
    } else {
      toast.error(res.msg);
    }
    setSaving(false);
  }

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <>
      <AllFileGellary
        images={safeImages}
        setShowGallery={setShowGallery}
        onSelect={(img) => {
          setSelectedIcon(img);
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
                <Folder className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Create Project Category
                </h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Organize your projects into categories for better display
                </p>
              </div>
            </div>
          </div>

          <form action={handleSubmit} className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Step 1: Basic Info
                </div>
                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    name="tabName"
                    type="text"
                    placeholder="e.g., Web Development, Mobile Apps"
                    value={formData.tabName}
                    onChange={(e) => handleChange("tabName", e.target.value)}
                    required
                    className="mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </Field>

                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    name="tabShortDes"
                    placeholder="Describe what type of projects are in this category"
                    value={formData.tabShortDes}
                    onChange={(e) => handleChange("tabShortDes", e.target.value)}
                    rows={4}
                    required
                    className="mt-2 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </Field>
              </div>

              <div className="space-y-6">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Step 2: Choose Icon
                </div>
                <Field>
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Category Icon
                  </Label>
                  <input type="hidden" name="tabIcon" value={selectedIcon?._id || ""} />

                  <div className="mt-3">
                    {selectedIcon ? (
                      <div className="relative group">
                        <div className="w-32 h-32 bg-gray-50 dark:bg-gray-700 rounded-2xl overflow-hidden border-2 border-primary">
                          <Image
                            src={selectedIcon.url}
                            alt="Selected icon"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                          <button
                            type="button"
                            onClick={() => setSelectedIcon(null)}
                            className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                          >
                            <X className="w-5 h-5 text-white" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="grid grid-cols-3 gap-3">
                        <button
                          type="button"
                          onClick={() => setShowGallery(true)}
                          className="col-span-3 h-32 flex flex-col items-center justify-center gap-3 bg-gray-50 dark:bg-gray-700 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-600 hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                        >
                          <Plus className="w-8 h-8 text-gray-400" />
                          <span className="text-sm text-gray-500">Select from Gallery</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-400 mt-2">
                    Recommended: 128x128px or larger, PNG/SVG format
                  </p>
                </Field>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-2xl">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                Preview
              </div>
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                {selectedIcon ? (
                  <div className="w-12 h-12 relative rounded-xl overflow-hidden">
                    <Image
                      src={selectedIcon.url}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <Folder className="w-6 h-6 text-gray-400" />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {formData.tabName || "Category Name"}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                    {formData.tabShortDes || "Category description will appear here..."}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700 flex items-center justify-end gap-4">
              <Link
                href="/dashboard/projects/view-projects"
                className="px-6 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors font-medium"
              >
                Cancel
              </Link>
              <Button
                type="submit"
                disabled={saving || !formData.tabName || !formData.tabShortDes}
                className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {saving ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Create Category
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}