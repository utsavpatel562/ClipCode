"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Step 1 : Create an Account",
    description:
      "Sign up quickly with your email or GitHub account to get started. Our secure and straightforward registration process ensures you can start organizing your code snippets in no time.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/sign-up.png"
          width={300}
          height={300}
          className="h-56 w-56 object-cover bg-gray-950 p-10 rounded-xl"
          alt="Step1"
        />
      </div>
    ),
  },
  {
    title: "Step 2 : Save Your Snippets",
    description:
      "Save your code snippets effortlessly. Add titles, descriptions, and tags to each snippet for easy identification and organization. You can also choose from a variety of programming languages to ensure your code is formatted correctly.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/coding1.png"
          width={300}
          height={300}
          className="h-56 w-56 object-cover bg-gray-950 p-10 rounded-xl"
          alt="Step2"
        />
      </div>
    ),
  },
  {
    title: "Step 3 : Organize and Share",
    description:
      "Categorize your snippets into folders to keep everything tidy. Use drag and drop functionality to rearrange snippets and folders as needed. Share your snippets with your team or other developers with just a few clicks, and set permissions to control who can view or edit them.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/layers.png"
          width={300}
          height={300}
          className="h-56 w-56 object-cover bg-gray-950 p-10 rounded-xl"
          alt="Step3"
        />
      </div>
    ),
  },
  {
    title: "Step 4 : Access Anywhere",
    description:
      "Sync your snippets across all your devices, ensuring you can access them from your desktop, tablet, or smartphone. Whether you're in the office, at home, or on the go, your code snippets are always at your fingertips.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/anywhere.png"
          width={300}
          height={300}
          className="h-56 w-56 object-cover bg-gray-950 p-10 rounded-xl"
          alt="Step4"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700">
      <StickyScroll content={content} />
    </div>
  );
}
