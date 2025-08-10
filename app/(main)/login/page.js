"use client";
import { loginAdmin } from "@/actions/loginAction";
import LoginButton from "@/components/LoginButton";
import { cn } from "@/lib/utils";
import { Field, Input, Label } from "@headlessui/react";
import toast from "react-hot-toast";

export default function LoginPage() {
  async function clientAction(formData) {
    const res = await loginAdmin(formData);
    if (res.error) {
      console.log(res.error);
      toast.error(res.error);
    } else if (res.success) {
      toast.success("Login successfully");
      window.location.href = "/dashboard";
    }
  }

  return (
    <section className="flex  flex-col justify-center items-center my-32">
      <h2 className="text-3xl font-medium mb-4">
        Are You <span className="text-gray-400 dark:text-primary">Admin?</span>
      </h2>
      <form
        action={clientAction}
        className="bg-white border border-gray-50 shadow-sm dark:bg-black/50 dark:border-gray-800 rounded-lg w-full md:w-1/3 p-5 flex flex-col gap-4"
      >
        <Field as="div" className="flex flex-col">
          <Label className=" font-medium dark:text-white">
            Enter your email
          </Label>
          <Input
            name="email"
            type="email"
            className={cn(
              "mt-3 block w-full rounded-lg border-1 dark:border-gray-700 border-gray-300 bg-white/5  px-3 py-1.5  dark:text-white",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
            )}
            required
          />
        </Field>
        <Field as="div" className="flex flex-col">
          <Label className=" font-medium dark:text-white">
            Enter your Password
          </Label>
          <Input
            name="password"
            type="password"
            className={cn(
              "mt-3 block w-full rounded-lg border-1 font-bold dark:border-gray-700 border-gray-300 bg-white/5 px-3 py-1.5  dark:text-white",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
            )}
            required
          />
        </Field>
        <LoginButton />
      </form>
    </section>
  );
}
