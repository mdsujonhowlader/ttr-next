"use client";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";

export default function TiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! </p>",
    editorProps: {
      attributes: {
        class:
          "mt-1 block w-full rounded-lg border-none min-h-[150px] bg-black/5 px-3 py-2 text-md text-gray-600",
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}
