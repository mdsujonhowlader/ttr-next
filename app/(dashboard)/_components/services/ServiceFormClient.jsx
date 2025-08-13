"use client";
import { postServices } from "@/actions/servicAction";
import { cn } from "@/lib/utils";
import { Button, Field, Input, Label, Textarea } from "@headlessui/react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import TiptapEditor from "../rich-text-editor/TiptapEditor";
import FileUploaderButton from "./FileUploaderButton";
import IconUploaderButton from "./IconUploaderButton";

export default function ServiceFormClient({ safeImages }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState("");
  return (
    <form
      action={async (formData) => {
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
        }
      }}
      className="flex flex-col justify-center items-center mx-auto w-3/4 bg-white p-4 rounded-lg"
    >
      <Field as="div" className="flex flex-col w-full mb-5">
        <Label className=" font-medium text-gray-500">Service Title</Label>
        <Input
          name="title"
          type="text"
          placeholder="Service Name"
          className={cn(
            "mt-1 block w-full rounded-lg border-none  bg-black/5 px-3 py-2 text-md text-gray-600",
            "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
          )}
        />
      </Field>
      <IconUploaderButton
        safeImages={safeImages}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />

      <FileUploaderButton
        safeImages={safeImages}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <Field as="div" className="flex flex-col w-full mb-5">
        <Label className="font-medium  text-gray-500">Description</Label>

        <Textarea
          name="shortdescription"
          placeholder="Service Description"
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
          onContentChange={setEditorContent}
          editorRef={editorRef}
        />
        <textarea
          name="longDescription"
          value={editorContent}
          className="hidden"
          readOnly
        />
      </div>
      <Button
        type="submit"
        className="inline-flex w-full justify-center cursor-pointer items-center gap-2 rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-button/90 data-open:bg-button/95"
      >
        Submit Service
      </Button>
    </form>
  );
}
