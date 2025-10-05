import { cn } from "@/lib/utils";
import { Button, Field, Input, Textarea } from "@headlessui/react";
import Image from "next/image";
export default function SmallContactSection() {
  return (
    <section className="mb-20">
      <h2 className="tracking-tight text-5xl font-bold mb-2 text-center">
        Join with us
      </h2>
      <p className="text-base  text-gray-400 mb-4 text-left  md:text-center">
        From custom websites to performance marketing, our team follows a proven
        process to ensure efficiency.
      </p>
      <div className="bg-green-300 dark:bg-green-900 relative max-w-6xl mx-auto overflow-hidden rounded-2xl">
        <Image
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          src="/developer-team.jpg"
          alt="People working on laptops"
          width={1000}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-300 via-green-300 dark:from-green-900 dark:via-green-900 to-transparent opacity-90"></div>
        <div className="relative mx-auto py-16 px-6 ">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start">
            <div>
              <h2 className="text-3xl font-extrabold text-black dark:text-gray-100 sm:text-4xl">
                <span className="block">Our Main Goal is to</span>
                <span className="block">Satisfied Local & Global Clients</span>
              </h2>
              <p className="mt-4 text-lg leading-6 dark:text-green-200/60 text-black/60">
                Committed to delivering outstanding results for clients
                everywhere. Our focus is on quality, trust, and continuous
                improvement.
              </p>
            </div>
            <div className="mx-auto max-w-5xl w-full sm:flex sm:flex-col sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto w-full">
                <form className="w-full max-w-4xl mx-auto space-y-4">
                  <Field className="w-full">
                    <Input
                      placeholder="Enter your email"
                      className={cn(
                        "mt-1 block w-full rounded-lg border-2 bg-black/5 border-green-600 dark:border-green-400 text-gray-800 dark:text-white px-3 py-2 text-md ",
                        "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-green-600"
                      )}
                    />
                  </Field>
                  <Field className="w-full">
                    <Textarea
                      placeholder="Describe your problem"
                      className={cn(
                        "mt-1 block w-full rounded-lg border-2 bg-black/5 border-green-600 dark:border-green-400 text-gray-800  dark:text-white px-3 py-2 text-md ",
                        "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-green-600"
                      )}
                    />
                  </Field>
                  <Button className="text-white bg-green-600 hover:bg-green-600/80 flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8 w-full max-w-4xl mx-auto">
                    Send Mail
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
