"use client";

import React from "react";
import Code from "@mui/icons-material/Code";
import { useGlobalContext } from "../../../../ContextApi";
import {
  IconBrandJavascript,
  IconBrandPython,
  IconBrandTypescript,
} from "@tabler/icons-react";

export default function Sidebar() {
  const {
    darkModeObject: { darkMode },
    openSideBarObject: { openSideBar },
  } = useGlobalContext();

  const isDarkMode = darkMode[1].isSelected;
  const sidebarClasses = `${
    openSideBar ? "fixed w-[90%] shadow-lg" : "max-md:hidden"
  } pr-10 p-6 flex flex-col gap-2 h-screen pt-7 ${
    isDarkMode ? "bg-slate-950 border-r border-gray-800" : "bg-white border-r"
  }`;

  return (
    <div className={sidebarClasses}>
      <Logo />
      <QuickLinks />
      <Languages />
    </div>
  );

  function Logo() {
    return (
      <div className="flex gap-2 items-center">
        <div className="bg-green-1 p-[6px] rounded-md">
          <Code sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span className="font-bold text-green-1">Clip</span>
          <span className="text-slate-600">Code</span>
        </div>
      </div>
    );
  }

  function QuickLinks() {
    const {
      sideBarMenuObject: { sideBarMenu, setSideBarMenu },
    } = useGlobalContext();

    function clickedMenu(index: number) {
      const updatedSideBarMenu = sideBarMenu.map((menu, i) => ({
        ...menu,
        isSelected: i === index,
      }));
      setSideBarMenu(updatedSideBarMenu);
    }

    return (
      <div className="mt-10 text-base">
        <div className="font-bold text-slate-400">Quick Links</div>
        <ul className="text-slate-400 mt-4 flex flex-col gap-2">
          {sideBarMenu.map((menu, index) => (
            <li
              key={index}
              onClick={() => clickedMenu(index)}
              className={`flex cursor-pointer select-none gap-1 items-center ${
                menu.isSelected
                  ? "bg-green-600 text-white w-full px-2 py-2 rounded-md"
                  : "text-slate-500 px-2 py-2 rounded-md"
              }`}
              style={{ fontSize: 18 }}
            >
              {menu.icons}
              <span>{menu.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  function Languages() {
    return (
      <div className="mt-10 text-base">
        <div className="font-bold text-slate-400">Languages</div>
        <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
          {[
            { name: "JavaScript", icon: <IconBrandJavascript />, count: 3 },
            { name: "Python", icon: <IconBrandPython />, count: 11 },
            { name: "TypeScript", icon: <IconBrandTypescript />, count: 9 },
          ].map((language, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex gap-1 items-center">
                {language.icon} {language.name}
              </div>
              <span className="font-bold">{language.count}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
