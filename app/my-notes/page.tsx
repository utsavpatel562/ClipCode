"use client";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentArea from "./components/ContentArea/ContentArea";
import { useGlobalContext } from "@/ContextApi";
export default function page() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <>
      <div>
        <div
          className={`flex ${
            darkMode[1].isSelected ? "bg-slate-950" : "bg-white"
          }`}
        >
          <div
            className={`w-[30%] ${
              darkMode[1].isSelected
                ? "border-r border-gray-900"
                : "border-r border-gray-200"
            }`}
          >
            <Sidebar />
          </div>
          <ContentArea />
        </div>
      </div>
    </>
  );
}
