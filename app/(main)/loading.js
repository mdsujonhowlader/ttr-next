"use client";
import FullScreenLoader from "../(dashboard)/_components/ui-common/FullscreenLoader";

export default function LoadingFullApp() {
  return (
    <>
      <div className="pt-40 w-xs mx-auto">
        <FullScreenLoader />
      </div>
    </>
  );
}
