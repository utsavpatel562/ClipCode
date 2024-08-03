import { UserButton } from "@clerk/nextjs";
import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
export default function page() {
  return (
    <>
      <div className="bg-white">
        <Sidebar />
        {/*<UserButton /> */}
      </div>
    </>
  );
}
