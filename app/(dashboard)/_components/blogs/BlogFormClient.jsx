"use client";
import { createBlog } from "@/actions/BlogAction";
import { toastify } from "@/lib/toastalert";
import { cn } from "@/lib/utils";
import { generateSlug } from "@/utils/slugUtils";
import { Button, Field, Input, Label, Textarea } from "@headlessui/react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import TiptapEditor from "../rich-text-editor/TiptapEditor";
import ThumbnailUpload from "./ThumbnailUploaderButton";

export default function BlogdFromClient({ safeImages }) {
  const [editorContentBlog, setEditorContentBlog] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const editorRef = useRef(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugEdited, setIsSlugEdited] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);

    if (!isSlugEdited) {
      setSlug(generateSlug(value));
    }
  };

  const handleSlugChange = (e) => {
    setSlug(e.target.value);
    setIsSlugEdited(true);
  };

  // Add tag on comma or Enter
  const handleTagKeyDown = (e) => {
    if ((e.key === "Enter" || e.key === ",") && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim().replace(/,/g, "");
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput("");
    }
  };

  // Remove tag
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <>
      <form
        action={async (formData) => {
          const res = await createBlog(formData);
          if (res.success) {
            toastify.success(res.msg);
            setSelectedImage(null);
            setEditorContentBlog("");
            if (editorRef.current) {
              editorRef.current.commands.clearContent();
            }
            setTitle(""); // Clear title
            setSlug(""); // Clear slug
            setIsSlugEdited(false); // Reset slug edited state
            setTags([]);
          } else if (res.errors) {
            Object.values(res.errors).forEach((err) => {
              toast.error(typeof err === "string" ? err : err.message);
            });
          }
        }}
        className="flex flex-col justify-center items-center mx-auto w-3/4 bg-white p-4 rounded-lg"
      >
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className=" font-medium text-gray-500">Blog Title</Label>
          <Input
            name="title"
            value={title}
            type="text"
            onChange={handleTitleChange}
            placeholder="Blog Title"
            className={cn(
              "mt-1 block w-full rounded-lg border-none  bg-black/5 px-3 py-2 text-md text-gray-600",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className=" font-medium text-gray-500">Slug </Label>
          <Input
            name="slug"
            value={slug}
            onChange={handleSlugChange}
            type="text"
            placeholder="Slug "
            className={cn(
              "mt-1 block w-full rounded-lg border-none  bg-black/5 px-3 py-2 text-md text-gray-600",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className="font-medium text-gray-500">Tags</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary text-white px-2 py-1 rounded-md text-sm flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-xs text-white/80 hover:text-white"
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            type="text"
            placeholder="Type and press Enter or comma"
            className={cn(
              "mt-1 block w-full rounded-lg border-none bg-black/5 px-3 py-2 text-md text-gray-600",
              "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
          />
          <input type="hidden" name="tags" value={JSON.stringify(tags)} />
        </Field>

        <ThumbnailUpload
          safeImages={safeImages}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className="font-medium  text-gray-500">
            Short Description
          </Label>

          <Textarea
            name="blogshortdesc"
            placeholder="Blog Short Description"
            className={cn(
              "mt-1 block w-full rounded-lg border-none  bg-black/5 px-3 py-2 text-md text-gray-600",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
            rows={3}
          />
        </Field>
        <div className="w-full mb-5">
          <div className="font-medium text-gray-500">Long Description</div>
          <TiptapEditor
            onContentChange={setEditorContentBlog}
            editorRef={editorRef}
          />
          <Textarea
            value={editorContentBlog}
            name="bloglongDescription"
            className="hidden"
            rows={3}
            readOnly
          />
        </div>
        <Button
          type="submit"
          className="inline-flex w-full justify-center cursor-pointer items-center gap-2 rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-button/90 data-open:bg-button/95"
        >
          Submit Blog
        </Button>
      </form>
    </>
  );
}
