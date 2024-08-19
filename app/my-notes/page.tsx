"use client";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentArea from "./components/ContentArea/ContentArea";
import { useGlobalContext } from "@/ContextApi";

export default function Page() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;

  return (
    <div
      className={`flex ${
        isDarkMode ? "bg-slate-950 border-gray-900" : "bg-white border-gray-200"
      }`}
    >
      <div className="my-2 w-[30%] border-r">
        <Sidebar />
      </div>
      <ContentArea />
    </div>
  );
}
