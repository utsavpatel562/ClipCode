"use client";
import CodeIcon from "@mui/icons-material/Code";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmoothDemo } from "./components/TypewriterEffect";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { WobbleCardDemo } from "./components/WobbleCard";

export default function Home() {
  return (
    <>
      <div className="poppins">
        <Navbar />
      </div>
      <div>
        <CTASession />
        <MyFeatures />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="flex m-5 max-sm:mt-9 mx-8 items-center justify-between max-sm:flex-col">
        <Logo />
        <Buttons />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <div className="flex gap-2 items-center cursor-pointer">
        <div className="bg-green-1 p-[6px] rounded-md">
          <CodeIcon sx={{ fontSize: 27, color: "white" }} />
        </div>
        <div className="flex gap-1 text-[19px]">
          <span className="font-bold text-green-1">Clip</span>
          <span className="text-slate-300">Code</span>
        </div>
      </div>
    </>
  );
}

function Buttons() {
  const { userId } = useAuth();
  return (
    <>
      <div className="max-sm:w-full">
        {userId ? (
          <Link href="/my-notes">
            <Button className="bg-green-1 px-8 py-[20px] hover:bg-green-1 max-sm:w-full">
              Access To The App
            </Button>
          </Link>
        ) : (
          <div className="flex gap-2 max-sm:flex-col max-sm:w-full max-sm:mt-8 max-sm:items-center">
            <Button className="bg-green-1 px-8 py-[20px] hover:bg-green-1 max-sm:w-full">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button className="bg-gray-700 border border-gray-500 text-white px-8 py-[19px] max-sm:w-full hover:text-white hover:border-gray-400">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

function CTASession() {
  return (
    <>
      <div className="flex flex-col mx-4 md:mx-16 items-center mt-[120px] gap-6">
        <TypewriterEffectSmoothDemo />
      </div>
    </>
  );
}

function MyFeatures() {
  return (
    <>
      <div className="flex flex-col items-center my-20">
        <h2 className="font-extrabold text-gray-400 text-[34px] text-center">
          Top Features
        </h2>
        <WobbleCardDemo />
      </div>
    </>
  );
}
