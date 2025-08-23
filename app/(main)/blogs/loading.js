"use client";

import FullScreenLoader from "@/app/(dashboard)/_components/ui-common/FullScreeenLoading";

export default function LoadingFullApp() {
  return (
    <>
      <div className="pt-40 w-xs mx-auto">
        <FullScreenLoader />
      </div>
    </>
  );
}
