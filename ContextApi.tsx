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
import React, { createContext, useContext, useEffect, useState } from "react";
import StarHalf from "@mui/icons-material/StarHalf";
import { SingleNoteType, SideBarMenu, DarkModeType } from "./app/Types";

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
  isMobileObject: {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allNotesObject: {
    allNotes: SingleNoteType[];
    setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>;
  };
  selectedNoteObject: {
    selectedNote: SingleNoteType | null;
    setSelectedNote: React.Dispatch<
      React.SetStateAction<SingleNoteType | null>
    >;
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
  isMobileObject: {
    isMobile: false,
    setIsMobile: () => {},
  },
  allNotesObject: {
    allNotes: [],
    setAllNotes: () => {},
  },
  selectedNoteObject: {
    selectedNote: [],
    setSelectedNote: () => {},
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
  const [isMobile, setIsMobile] = useState(false);
  const [allNotes, setAllNotes] = useState<SingleNoteType[]>([]);
  const [selectedNote, setSelectedNote] = useState<SingleNoteType | null>(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function updateAllNotes() {
      const allNotes = [
        {
          id: "1",
          title: "This is a Note",
          isFavorite: false,
          tags: ["tag1", "tag2"],
          description: "This is a note",
          code: `import React from 'react'";
        function HelloWorld(){
           return <h1>Hello World</h1>;
        }
        export default HelloWorld;`,
          language: "javascript",
          creationDate: "2022-01-01",
        },
        {
          id: "2",
          title: "This is a Second Note",
          isFavorite: true,
          tags: ["tag1", "tag2"],
          description: "This is another a note",
          code: `import React from 'react'";
          function Greetings(){
             return <h1>Greetings</h1>;
          }
          export default Greetings;`,
          language: "javascript",
          creationDate: "2022-02-01",
        },
        {
          id: "3",
          title: "This is a Third Note",
          isFavorite: false,
          tags: ["tag1", "tag2"],
          description: "Yet another a note",
          code: `import React from 'react'";
          function LastOne(){
             return <h1>Last Note</h1>;
          }
          export default LastOne;`,
          language: "javascript",
          creationDate: "2022-03-01",
        },
      ];
      setTimeout(() => {
        setAllNotes(allNotes);
      }, 1200);
    }

    updateAllNotes();
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSideBarObject: { openSideBar, setOpenSideBar },
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isMobileObject: { isMobile, setIsMobile },
        allNotesObject: { allNotes, setAllNotes },
        selectedNoteObject: { selectedNote, setSelectedNote },
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
