import React from "react";
import Code from "@mui/icons-material/Code";
import {
  IconBorderAll,
  IconHeart,
  IconLogout,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";
import { UserButton } from "@clerk/nextjs";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] p-5 flex flex-col gap-2 h-screen pt-7 border-r">
        <Logo />
        <QuickLinks />
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
  return (
    <>
      <div className="mt-10 text-base">
        <div className="font-bold text-slate-400">Quick Links</div>
        <ul className="text-slate-400 mt-4 flex flex-col gap-2">
          <li className="flex gap-1 items-center bg-green-600 text-white p-[7px] px-2 rounded-md w-[60%] cursor-pointer">
            <IconBorderAll
              style={{
                fontSize: 18,
              }}
            />
            <span>All Snippets</span>
          </li>
          <li className="flex gap-1 items-center p-[7px] px-2 rounded-md w-[60%] hover:bg-green-600 hover:text-white cursor-pointer">
            <IconHeart
              style={{
                fontSize: 18,
              }}
            />
            <span>Favorites</span>
          </li>
          <li className="flex gap-1 items-center p-[7px] px-2 rounded-md w-[60%] hover:bg-green-600 hover:text-white cursor-pointer">
            <IconTrash
              style={{
                fontSize: 18,
              }}
            />
            <span>Tarsh</span>
          </li>
          <li className="flex gap-1 items-center p-[7px] px-2 rounded-md w-[60%] hover:bg-green-600 hover:text-white cursor-pointer">
            <IconSettings
              style={{
                fontSize: 18,
              }}
            />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
