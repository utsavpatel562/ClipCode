"use client";
import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/DarkMode";
import { useGlobalContext } from "@/ContextApi";
function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`w-[80%] ${
        darkMode[1].isSelected ? "bg-slate-950" : "bg-slate-100"
      } p-5`}
    >
      <TopBar />
    </div>
  );
}
export default ContentArea;

function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`p-3 w-full ${
        darkMode[1].isSelected ? "bg-slate-900 text-whit" : "bg-white"
      } rounded-lg flex justify-between items-center`}
    >
      <ProfileUser />
      <SearchBar />
      <DarkMode />
    </div>
  );
}
