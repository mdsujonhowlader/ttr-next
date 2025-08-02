import { postAppearance } from "@/actions/appearanceAction";
import { Button, Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";
export default function SettingsPage() {
  return (
    <section className="mt-5 mb-30 z-50 overflow-auto">
      <h2 className="text-3xl text-center font-medium mb-4">
        Add{" "}
        <span className="text-gray-400 dark:text-primary">
          Appearance your UI
        </span>
      </h2>
      <form
        action={postAppearance}
        className="flex flex-col justify-center items-center mx-auto w-1/2 bg-card p-4 rounded-lg"
      >
        <Field as="div" className="flex flex-col w-full mb-5">
          <Label className="text-sm/6 font-medium dark:text-white text-black">
            Primary Color
          </Label>
          <Input
            name="primaryColor"
            type="text"
            className={clsx(
              "mt-3 block w-full rounded-lg border-none dark:bg-white/5  bg-black/10 px-3 py-1.5 text-sm/6 dark:text-white text-black",
              "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-primary"
            )}
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
