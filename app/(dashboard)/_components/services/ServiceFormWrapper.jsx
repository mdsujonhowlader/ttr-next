"use client";

import { postServices } from "@/actions/servicAction";
import { Button, Field, Input, Label, Textarea } from "@headlessui/react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import TiptapEditor from "../rich-text-editor/TiptapEditor";
import FileUploaderButton from "./FileUploaderButton";
import IconUploaderButton from "./IconUploaderButton";
import { Save, Layers, ImageIcon, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ServiceFormWrapper({ safeImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [saving, setSaving] = useState(false);
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState("");

  async function handleSubmit(formData) {
    setSaving(true);
    formData.append("longDescription", editorContent);
    
    const res = await postServices(formData);
    if (res.success) {
      toast.success(res.msg);
      setSelectedImage(null);
      setSelectedIcon(null);
      if (editorRef.current) {
        editorRef.current.commands.clearContent();
      }
    } else if (res.errors) {
      Object.values(res.errors).forEach((err) => {
        toast.error(typeof err === "string" ? err : err.message);
      });
    } else {
      toast.error(res.msg || "Failed to create service");
    }
    setSaving(false);
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <Link
          href="/dashboard/services/view-services"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Add New Service
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Create a new service for your clients
          </p>
        </div>

        <form action={handleSubmit} className="p-6 space-y-6">
          <Field className="w-full">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Service Title
            </Label>
            <Input
              name="title"
              type="text"
              placeholder="Enter service name"
              required
              className="mt-2 px-4 w-fullw-full py-2.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Service Icon
                </div>
              </Label>
              <IconUploaderButton
                safeImages={safeImages}
                selectedIcon={selectedIcon}
                setSelectedIcon={setSelectedIcon}
              />
            </Field>

            <Field>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <ImageIcon className="w-4 h-4" />
                  Featured Image
                </div>
              </Label>
              <FileUploaderButton
                safeImages={safeImages}
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            </Field>
          </div>

          <Field>
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Short Description
              </div>
            </Label>
            <Textarea
              name="shortdescription"
              placeholder="Brief description of the service"
              rows={3}
              required
              className="mt-2 px-4 py-2.5 w-full bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </Field>

          <Field>
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Long Description
            </Label>
            <div className="mt-2">
              <TiptapEditor
                onContentChange={setEditorContent}
                editorRef={editorRef}
              />
            </div>
          </Field>

          <div className="pt-4 flex items-center justify-between gap-4 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/dashboard/services/view-services"
              className="px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </Link>
            <Button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? "Saving..." : "Save Service"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}