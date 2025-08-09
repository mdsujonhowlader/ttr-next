import { getImages } from "@/actions/gellaryAction";
import Gallery from "../../_components/gallery/Gallery";
import UploadButton from "../../_components/gallery/UploadButton";

export default async function UploadFilePages() {
  const images = await getImages();
  return (
    <div className="mt-10 mb-30 px-4 z-20 overflow-auto ">
      <div className="space-y-6 ">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-gray-600 font-semibold tracking-tight">
            All uploaded files
          </h2>
          <UploadButton />
        </div>

        {/* Gallery Grid */}
        <div className="bg-white border border-gray-300  rounded-lg p-5 overflow-auto">
          <div className="flex justify-between  gap-4 space-y-4">
            <h3 className="text-gray-500">All Files</h3>
            <div className="flex justify-between gap-2">
              <h4>Delete Image</h4>
              <h4>Search Image by Name</h4>
            </div>
          </div>
          <Gallery images={images} />
        </div>
      </div>
    </div>
  );
}
