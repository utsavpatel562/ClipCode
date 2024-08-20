"use client";
import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
import SearchBar from "./TopBar/SearchBar";
import DarkMode from "./TopBar/DarkMode";
import SideBarMenuIcon from "./TopBar/SideBarMenuIcon";
import { useGlobalContext } from "@/ContextApi";
import SwiperSelection from "./NotesArea/SwiperSelection";
import AllNotesSection from "./NotesArea/AllNotesSection";
import ContentNote from "../ContentNote/ContentNote";

export default function ContentArea() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;

  return (
    <div
      className={`w-full min-h-screen flex flex-col p-4 ${
        isDarkMode ? "bg-slate-950" : "bg-slate-100"
      }`}
    >
      <TopBar />
      <NotesArea />
    </div>
  );
}

function TopBar() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;

  return (
    <div
      className={`${
        isDarkMode ? "bg-slate-900 text-white" : "bg-white"
      } w-full rounded-lg flex justify-between items-center p-3`}
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

function NotesArea() {
  const {
    openContentNoteObject: { openContentNote },
    isMobileObject: { isMobile },
  } = useGlobalContext();

  const contentNoteWidth = openContentNote
    ? isMobile
      ? "w-full"
      : "w-1/2"
    : "w-full";

  return (
    <div className="flex flex-1 gap-2 mt-4">
      {/* Notes Section */}
      <div className={`flex-1 ${contentNoteWidth}`}>
        <SwiperSelection />
        <AllNotesSection />
      </div>

      {/* Content Note Section */}
      {openContentNote && (
        <div className={`flex-1 ${isMobile ? "w-full" : "w-1/2"} bg-slate-100`}>
          <ContentNote />
        </div>
      )}
    </div>
  );
}
