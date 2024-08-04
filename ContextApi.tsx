"use client";

import {
  IconBorderAll,
  IconHeart,
  icons,
  IconSettings,
  IconTrash,
} from "@tabler/icons-react";
import { createContext, useContext, useState } from "react";

interface GlobalContextType {
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
}
interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}
const ContextProvider = createContext<GlobalContextType>({
  sideBarMenuObject: {
    sideBarMenu: [],
    setSideBarMenu: () => {},
  },
});
export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    { id: 1, name: "All Snippets", isSelected: true, icons: <IconBorderAll /> },
    {
      id: 2,
      name: "Favorites",
      isSelected: false,
      icons: <IconHeart />,
    },
    {
      id: 3,
      name: "Trash",
      isSelected: false,
      icons: <IconTrash />,
    },
    {
      id: 4,
      name: "Settings",
      isSelected: false,
      icons: <IconSettings />,
    },
  ]);
  return (
    <ContextProvider.Provider
      value={{ sideBarMenuObject: { sideBarMenu, setSideBarMenu } }}
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
