"use client";

export default function FullScreenLoader() {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div className="h-1 bg-green-500 w-1/4 animate-loadingBar" />
    </div>
  );
}
