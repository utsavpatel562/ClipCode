import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ContentArea from "./components/ContentArea/ContentArea";
export default function page() {
  return (
    <>
      <div>
        <div className="flex">
          <Sidebar />
          <ContentArea />
        </div>
      </div>
    </>
  );
}
