"use client";
import { Button, Field, Input, Label, Textarea } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import toast from "react-hot-toast";
import ServiceImageModal from "../../_components/ServiceImageModal";

export default function ServiceLayout() {
  const [isOpen, setIsOpen] = useState(false);

  async function handleSubmitService(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/service`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!data.success) {
        if (data.errors && Array.isArray(data.errors)) {
          data.errors.forEach((err) => {
            toast.error(`${err.message}`);
          });
        } else {
          toast.error(data.error || "Something went wrong");
        }
        return;
      }
      event.target.reset();
      toast.success(data.msg);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <section className="mt-5 mb-30 z-50 overflow-auto">
      <ServiceImageModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h2 className="text-3xl text-center font-medium mb-4">
        Add <span className="text-gray-400 dark:text-primary">Service</span>
      </h2>
      <form
        onSubmit={handleSubmitService}
        className="flex flex-col justify-center items-center mx-auto w-1/2 bg-card p-4 rounded-lg"
      >
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Service Title
          </Label>
          <Input
            name="title"
            type="text"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Service Icon
          </Label>
          <Input
            name="icon"
            type="text"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>
        <Field as="div" className="flex flex-col  w-full mb-5">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Service Image
          </Label>
          <Input
            name="image"
            type="file"
            readOnly
            onClick={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
          />
        </Field>
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Description
          </Label>

          <Textarea
            name="description"
            className={clsx(
              "mt-3 block w-full resize-none rounded-lg border-none dark:bg-white/5 bg-black/10  px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
            rows={3}
          />
        </Field>
        <Button
          type="submit"
          className="inline-flex w-full justify-center cursor-pointer items-center gap-2 rounded-md bg-button px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-button/90 data-open:bg-button/95"
        >
          Submit Service
        </Button>
      </form>
    </section>
  );
}
