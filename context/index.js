"use client";
const { createContext, useState, useEffect } = require("react");

import Notification from "@/components/test/Toast";
import { setToastAlertFunction } from "@/lib/toastalert";
const ToastAlertContext = createContext(null);

export const ToastAlertProvider = ({ children, position = "bottom-right" }) => {
  const [messages, setMessages] = useState([]);

  const addToastAlert = (type, title, message, duration = 3000) => {
    setMessages((prev) => [
      ...prev,
      { type, title, message, id: Date.now(), duration },
    ]);
  };

  useEffect(() => {
    setToastAlertFunction(addToastAlert);
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;
    const timers = messages.map((msg) =>
      setTimeout(() => {
        setMessages((prev) => prev.filter((m) => m.id !== msg.id));
      }, msg.duration)
    );

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [messages]);

  const positions = {
    "top-right": "top-5 right-5",
    "top-left": "top-5 left-5",
    "bottom-right": "bottom-5 right-5",
    "bottom-left": "bottom-5 left-5",
  };

  return (
    <ToastAlertContext.Provider value={addToastAlert}>
      {children}
      <div className={`fixed ${positions[position]} z-50 flex flex-col gap-3`}>
        {messages.map((msg) => (
          <Notification
            key={msg.id}
            type={msg.type}
            title={msg.title}
            message={msg.message}
            duration={msg.duration}
            onClose={() =>
              setMessages((prev) => prev.filter((m) => m.id !== msg.id))
            }
          />
        ))}
      </div>
    </ToastAlertContext.Provider>
  );
};
