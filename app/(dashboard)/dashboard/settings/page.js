import { getAppearances } from "@/actions/appearanceAction";
import { getImages } from "@/actions/gellaryAction";
import SettingsWrapper from "../../_components/settings/SettingsWrapper";

function serializeImages(images) {
  return (images || []).map((img) => ({
    _id: img._id?.toString(),
    filename: img.filename,
    url: img.url,
  }));
}

function serializeAppearances(appearances) {
  const map = {};
  (appearances || []).forEach((item) => {
    map[item.type] = item.value;
  });
  return map;
}

export default async function SettingsPage() {
  const images = await getImages();
  const appearances = await getAppearances();

  return (
    <SettingsWrapper
      safeImages={serializeImages(images)}
      getAppearances={serializeAppearances(appearances)}
    />
  );
}