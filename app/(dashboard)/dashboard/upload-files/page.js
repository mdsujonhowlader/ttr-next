import Gallery from "../../_components/Gallery";

export default function UploadFilePages() {
  return (
    <div className="mt-10 mb-30 px-4 z-20 overflow-auto ">
      <div className="space-y-6 ">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold tracking-tight">
            All uploaded files
          </h2>
          <button className="inline-flex text-white bg-emerald-600  dark:bg-emerald-800/40 rounded-lg font-semibold tracking-tight hover:bg-emerald-800 hover:text-white  transition-colors duration-200 focus:outline-none px-4 py-2 dark:text-emerald-500">
            Upload New File
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="bg-white border border-gray-300 dark:bg-white/10  rounded-lg p-5 overflow-auto">
          <div className="flex justify-between  gap-4 space-y-4">
            <h3>All Files</h3>
            <div className="flex justify-between gap-2">
              <h4>Delete Image</h4>
              <h4>Search Image by Name</h4>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}
