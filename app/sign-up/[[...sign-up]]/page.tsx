"use client";
import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignedUpPage = () => {
  return (
    <>
      <div className={`w-full h-screen flex justify-center items-center`}>
        <SignUp />
      </div>
    </>
  );
};

export default SignedUpPage;
