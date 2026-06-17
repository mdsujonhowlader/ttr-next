import { getImages } from "@/actions/galleryAction";
import ServiceFormWrapper from "../../../_components/services/ServiceFormWrapper";

function serializeImages(images) {
  return (images || []).map((img) => ({
    _id: img._id?.toString(),
    filename: img.filename,
    url: img.url,
  }));
}

export default async function ServiceLayout() {
  const images = await getImages();

  
  return <ServiceFormWrapper safeImages={serializeImages(images)} />;
}