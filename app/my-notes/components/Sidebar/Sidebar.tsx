"use client";

import React from "react";
import Code from "@mui/icons-material/Code";
import { useGlobalContext } from "../../../../ContextApi";
import {
  IconBorderAll,
  IconBrandJavascript,
  IconBrandPython,
  IconBrandTypescript,
  IconHeart,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 border-r">
        <Logo />
        <QuickLinks />
        <Languages />
      </div>
    </>
  );
};
function Logo() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <div className={`bg-green-1 p-[6px] rounded-md`}>
          <Code sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span className={`font-bold text-green-1`}>Clip</span>
          <span className="text-slate-600">Code</span>
        </div>
      </div>
    </>
  );
}
function QuickLinks() {
  const {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
  } = useGlobalContext();
  console.log(sideBarMenu);

  function clickedMenu(index: number) {
    const updatedSideBarMenu = sideBarMenu.map((menu, i) => {
      if (i === index) {
        return { ...menu, isSelected: true };
      } else {
        return { ...menu, isSelected: false };
      }
    });
    setSideBarMenu(updatedSideBarMenu);
  }
  return (
    <>
      <div className="mt-10 text-base">
        <div className="font-bold text-slate-400">Quick Links</div>
        <ul className="text-slate-400 mt-4 flex flex-col gap-2">
          {sideBarMenu.map((menu, index) => (
            <li
              key={index}
              onClick={() => clickedMenu(index)}
              style={{
                fontSize: 18,
              }}
              className={`flex cursor-pointer select-none gap-1 items-center ${
                menu.isSelected
                  ? "bg-green-600 text-white w-[100%] px-2 p-[7px] rounded-md"
                  : "text-slate-500 p-[7px] px-2 rounded-md"
              }`}
            >
              {menu.icons}
              <span>{menu.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
function Languages() {
  return (
    <>
      <div className="mt-10 text-base">
        <div className="font-bold text-slate-400">Languages</div>
        <div className="mt-5 ml-2 text-slate-400 flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <IconBrandJavascript style={{ fontSize: 15 }} /> JavaScript
            </div>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <IconBrandPython style={{ fontSize: 15 }} /> Python
            </div>
            <span className="font-bold">11</span>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              <IconBrandTypescript style={{ fontSize: 15 }} /> TypeScript
            </div>
            <span className="font-bold">9</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
