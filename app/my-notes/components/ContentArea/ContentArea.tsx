"use client";
import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/DarkMode";
import SideBarMenuIcon from "./TopBar/SideBarMenuIcon";
import { useGlobalContext } from "@/ContextApi";
function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();
  return (
    <div
      className={`w-full ${
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
      className={`${
        darkMode[1].isSelected ? "bg-slate-900 text-whit" : "bg-white"
      } rounded-lg flex justify-between items-center p-3`}
    >
      <ProfileUser />
      <SearchBar />
      <div className="flex gap-4 items-center">
        <DarkMode />
        <SideBarMenuIcon />
      </div>
    </div>
  );
}
