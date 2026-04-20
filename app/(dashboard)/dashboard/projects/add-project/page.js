import { getImages } from "@/actions/gellaryAction";
import AddProjectWrapper from "./_components/AddProjectWrapper";

function serializeImages(images) {
  return (images || []).map((img) => ({
    _id: img._id?.toString(),
    filename: img.filename,
    url: img.url,
  }));
}

export default async function AddProjectPage() {
  const images = await getImages();

  return <AddProjectWrapper safeImages={serializeImages(images)} />;
}