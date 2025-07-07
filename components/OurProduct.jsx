import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

import ourproducts from "@/utils/ourproducts";
import Link from "next/link";

export default function OurProduct() {
  return (
    <section className="py-8 ">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Our Creative Works</h1>
        <p className="text-secondary">
          We provide powerful digital solutions tailored for various industries.
        </p>
      </div>

      <TabGroup className="grid grid-cols-1 md:grid-cols-3  gap-4 my-10">
        {/* Tab List */}
        <TabList className="flex bg-card rounded-lg text-white flex-row md:flex-col items-start gap-4 md:gap-2 overflow-x-auto md:overflow-visible whitespace-nowrap px-2 py-2">
          {ourproducts.map(({ name }) => (
            <Tab
              key={name}
              className="shrink-0 list-none bg-button px-4 py-2 md:w-full rounded-lg dark:bg-button cursor-pointer hover:bg-button/95 transition-all duration-300"
            >
              {name}
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        <TabPanels className="md:col-span-2 relative bg-card overflow-hidden min-h-[240px] md:min-h-[440px] rounded-lg bg-gradient-to-tr from-green-200 to-green-400">
          {ourproducts.map(({ name, contents }) => (
            <TabPanel key={name}>
              <Transition
                as={Fragment}
                appear
                show={true}
                enter="transition ease-in duration-500"
                enterFrom="opacity-0 translate-y-4 scale-95"
                enterTo="opacity-100 translate-y-0 scale-100"
                leave="transition ease-out duration-300"
                leaveFrom="opacity-100 translate-y-0 scale-100"
                leaveTo="opacity-0 translate-y-4 scale-95"
              >
                <div className=" border-2 border-border rounded-lg absolute top-1/4 -right-1/3 left-1/6 w-full">
                  {contents.map((content) => (
                    <Image
                      key={content.id}
                      src={content.src}
                      alt={name}
                      width={1200}
                      height={800}
                      className="object-cover aspect-video rounded-sm"
                    />
                  ))}
                </div>
              </Transition>
              <Link
                className="float-end px-4 text-muted py-2 bg-button shadow-black shadow-2xl font-semibold hover:bg-button/70 rounded-lg mt-3 md:mt-5 mr-4"
                href="#"
              >
                preview
              </Link>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </section>
  );
}
