"use client";

import { useUser } from "@clerk/nextjs";

function ProfileUser() {
  const { user } = useUser();
  const imageUrl = user?.imageUrl;

  const loadingImage = (
    <div className="w-9 h-9 rounded-full mb-[5px] bg-slate-200"></div>
  );

  const loadingUserName = (
    <span className="font-semibold bg-slate-100 h-4 w-[100px]"></span>
  );
  const loadingUserEmail = (
    <span className="text-slate-500 text-[11px] bg-slate-100 h-2 w-[130px]"></span>
  );

  return (
    <>
      <div className="flex gap-3 items-center">
        {!user ? (
          loadingImage
        ) : (
          <img
            src={imageUrl}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="w-9 h-9 rounded-full mb-[5px]"
          />
        )}
        <div className={`flex flex-col text-sm ${!user ? "gap-1" : ""}`}>
          {!user ? (
            loadingUserName
          ) : (
            <span className="font-semibold">
              {user?.firstName} {user?.lastName}
            </span>
          )}
          {!user ? (
            loadingUserEmail
          ) : (
            <span className="text-slate-500 text-[11px]">
              {user?.emailAddresses[0].emailAddress}
            </span>
          )}
        </div>
      </div>
    </>
  );
}
export default ProfileUser;
