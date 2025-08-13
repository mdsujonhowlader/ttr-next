"use client";

import { Button } from "@headlessui/react";

export default function Services() {
  return (
    <section className="mt-10 px-4 z-20">
      <div className="overflow-x-auto ">
        <table className="min-w-full table-auto border border-gray-400  shadow-md rounded-lg">
          <thead className="dark:bg-white/5 bg-gray-100 text-left text-sm font-semibold text-gray-700 dark:text-white">
            <tr>
              <th className="px-4 py-3 border border-gray-700 ">Id</th>
              <th className="px-4 py-3 border border-gray-700 ">Title</th>
              <th className="px-4 py-3 border border-gray-700 ">Description</th>
              <th className="px-4 py-3 border border-gray-700 ">Icon</th>
              <th className="px-4 py-3 border border-gray-700 ">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white/20 text-sm divide-y text-black dark:text-white divide-gray-200">
            <tr>
              <td className="px-4 py-2 border border-gray-700 ">1</td>
              <td className="px-4 py-2 border border-gray-700 ">Website</td>
              <td className="px-4 py-2 border border-gray-700 ">descript</td>
              <td className="px-4 py-2 border border-gray-700 ">🖥️</td>
              <td className="px-4 py-2 space-x-2 border border-gray-700 ">
                <Button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Edit
                </Button>
                <Button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
