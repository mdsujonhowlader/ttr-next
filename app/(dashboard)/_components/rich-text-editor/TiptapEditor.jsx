"use client";

import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import MenuBar from "./MenuBar";

export default function TiptapEditor({ onContentChange, editorRef }) {
  const [_, setForceUpdate] = useState(0);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Image,
    ],
    immediatelyRender: false,
    content: "",
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base m-5 focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      if (onContentChange) {
        onContentChange(editor.getHTML());
      } else {
        onContentChange("");
      }

      setForceUpdate(Date.now());
    },
  });

  // Assign editor instance to ref
  if (editorRef) {
    editorRef.current = editor;
  }

  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-700">
      <MenuBar editor={editor} />
      <div className="h-64 overflow-y-auto">
        {" "}
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
