import TiptapEditor from "../_components/rich-text-editor/TiptapEditor";

export default function DashboardPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full mb-5">
        <div className="font-medium text-gray-500">Long Description</div>
        <TiptapEditor />
      </div>
    </div>
  );
}
