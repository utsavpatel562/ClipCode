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
          className={`flex ${darkMode[1].isSelected ? "bg-black" : "bg-white"}`}
        >
          <Sidebar />
          <ContentArea />
        </div>
      </div>
    </>
  );
}
