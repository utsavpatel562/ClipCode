"use client";
import { useGlobalContext } from "@/ContextApi";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";

function SideBarMenuIcon() {
  const {
    openSideBarObject: { openSideBar, setOpenSideBar },
  } = useGlobalContext();

  return (
    <>
      {!openSideBar ? (
        <MenuIcon
          onClick={() => setOpenSideBar(!openSideBar)}
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      ) : (
        <CancelIcon
          onClick={() => setOpenSideBar(!openSideBar)}
          className="text-slate-500 cursor-pointer hidden max-md:block"
        />
      )}
    </>
  );
}

export default SideBarMenuIcon;
