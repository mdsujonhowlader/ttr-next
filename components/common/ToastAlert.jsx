"use client";

export default function ToastAlert({ type, title, message, onClose }) {
  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`${
        colors[type] || "bg-gray-500"
      } text-white px-4 py-3 rounded-lg shadow-lg min-w-[250px]`}
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <p className="font-bold">{title}</p>
          {message && <p className="text-sm opacity-90">{message}</p>}
        </div>
        <button onClick={onClose} className="font-bold text-lg leading-none">
          ×
        </button>
      </div>
    </div>
  );
}
