"use client";
import { useEffect, useState } from "react";

export default function FullScreenLoader({ loading }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (loading) {
      setAnimate(true);
    } else {
      setTimeout(() => setAnimate(false), 500);
    }
  }, [loading]);

  return (
    <>
      {animate && (
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-1 bg-green-500 w-1/4 animate-loadingBar"
            style={{ willChange: "transform" }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-loadingBar {
          animation: loadingBar 2s linear infinite;
        }
      `}</style>
    </>
  );
}
