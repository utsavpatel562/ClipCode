"use client";

import {
  IconBorderAll,
  IconHeart,
  IconLighter,
  IconLogout,
  icons,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import React, { createContext, useContext, useState } from "react";
import StarHalf from "@mui/icons-material/StarHalf";

interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}
interface DarkModeType {
  id: number;
  icon: React.ReactNode;
  isSelected: boolean;
}
interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };
  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };
  openContentNoteObject: {
    openContentNote: boolean;
    setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
const ContextProvider = createContext<GlobalContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
  darkModeObject: {
    darkMode: [],
    setDarkMode: () => {},
  },
  openSideBarObject: {
    openSideBar: false,
    setOpenSideBar: () => {},
  },
  openContentNoteObject: {
    openContentNote: false,
    setOpenContentNote: () => {},
  },
});
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    {
      id: 1,
      name: "Snippets",
      isSelected: true,
      icons: <IconBorderAll style={{ fontSize: 18 }} />,
    },
    {
      id: 2,
      name: "Favorites",
      isSelected: false,
      icons: <IconHeart style={{ fontSize: 18 }} />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icons: <IconTrash style={{ fontSize: 18 }} />,
    },
    {
      id: 4,
      name: "Settings",
      isSelected: false,
      icons: <IconSettings style={{ fontSize: 18 }} />,
    },
    {
      id: 5,
      name: "Logout",
      isSelected: false,
      icons: <IconLogout style={{ fontSize: 18 }} />,
    },
  ]);
  const [darkMode, setDarkMode] = useState<DarkModeType[]>([
    {
      id: 1,
      icon: <WbSunnyIcon sx={{ fontSize: 18 }} />,
      isSelected: true,
    },
    {
      id: 2,
      icon: <StarHalf sx={{ fontSize: 18 }} />,
      isSelected: false,
    },
  ]);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openContentNote, setOpenContentNote] = useState(false);
  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSideBarObject: { openSideBar, setOpenSideBar },
        openContentNoteObject: { openContentNote, setOpenContentNote },
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
}
export const useGlobalContext = () => {
  const context = useContext(ContextProvider);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used with in GlobalContextProvider"
    );
  }
  return context;
};
