"use client";
import { useRef } from "react";
import { subscribeNewsletter } from "@/actions/newsletterAction";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

export default function NewsletterForm() {
  const formRef = useRef(null);

  async function handleSubmit(formData) {
    const res = await subscribeNewsletter(formData);
    if (res.success) {
      toast.success(res.message);
      formRef.current?.reset();
    } else {
      toast.error(res.error);
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="flex">
      <input
        name="email"
        type="email"
        placeholder="Your email"
        className="flex-1 px-4 py-3 outline-0 border dark:bg-gray-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
      />
      <button
        type="submit"
        className="px-4 py-3 bg-primary rounded-r-lg hover:bg-primary/90 transition-colors"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
