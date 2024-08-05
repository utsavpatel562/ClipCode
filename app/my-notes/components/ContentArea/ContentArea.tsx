import React from "react";
import ProfileUser from "./TopBar/ProfileUser";
function ContentArea() {
  return (
    <div className="w-[80%] bg-slate-100 p-5">
      <TopBar />
    </div>
  );
}
export default ContentArea;
function TopBar() {
  return (
    <div className="rounded-lg flex justify-between items-center bg-white p-3">
      <ProfileUser />
    </div>
  );
}
