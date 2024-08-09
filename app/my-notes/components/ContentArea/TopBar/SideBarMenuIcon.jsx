"use client";
import { useGlobalContext } from "@/ContextApi";
import MenuIcon from "@mui/icons-material/Menu";
import { IconCross } from "@tabler/icons-react";
function SideBarMenuIcon() {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useGlobalContext();
  return (
    <>
      {!openSideBar ? (
        <MenuIcon className="text-slate-500 cursor-pointer hidden max-md:block" />
      ) : (
        <IconCross
          onClick={() => setOpenSideBar(!openSideBar)}
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      )}
    </>
  );
}
export default SideBarMenuIcon;
