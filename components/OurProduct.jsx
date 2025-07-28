import {
  Button,
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
          {ourproducts.map(({ icon, name, des }) => (
            <Tab
              key={name}
              className="shrink-0 list-none bg-button p-5 md:w-full rounded-lg dark:bg-button cursor-pointer hover:bg-button/95 transition-all duration-300 data-selected:bg-button/70 data-selected:data-hover:bg-button/95"
            >
              <div className="flex items-center space-x-3">
                <span>{icon}</span>
                <h5 className="text-sm font-medium">{name}</h5>
              </div>
              <p className="text-justify tex-wrap text-sm">{des}</p>
            </Tab>
          ))}
        </TabList>

        {/* Tab Panels */}
        <TabPanels className="md:col-span-2 overflow-hidden rounded-lg ">
          {ourproducts.map(({ name, contents, des }) => (
            <TabPanel key={name} className="flex justify-center items-center ">
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
                <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 items-center p-4">
                  {contents.map((content) => (
                    <div
                      key={content.id}
                      className="relative group w-full overflow-hidden shadow-lg rounded-lg bg-card"
                    >
                      <Image
                        src={content.src}
                        alt={name}
                        width={1200}
                        height={800}
                        className="object-cover aspect-square rounded-t-lg"
                      />
                      <div className="p-4">
                        <h2 className="text-xl font-bold mb-2">
                          {content.contentName}
                        </h2>
                        <span className="text-sm  text-center">{des}</span>
                        <Button className="mt-4 px-4 py-2 w-full cursor-pointer bg-button text-white rounded hover:bg-button/70 transition-colors duration-300">
                          Read Case Studies
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Transition>
              {/*  <Link
                className="float-end px-4 text-muted py-2 bg-button shadow-black shadow-2xl font-semibold hover:bg-button/70 rounded-lg mt-3 md:mt-5 mr-4"
                href="#"
              >
                preview
              </Link> */}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </section>
  );
}
