// Code By Utsav
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <>
      <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div className="inline-grid bg-black/5 p-4 text-center text-surface dark:text-white w-full">
          <div className="flex justify-center gap-2">
            <IconBrandInstagram className="cursor-pointer hover:bg-black hover:text-white rounded-md" />
            <IconBrandLinkedin className="cursor-pointer hover:bg-black hover:text-white rounded-md" />
            <IconBrandGithub className="cursor-pointer hover:bg-black hover:text-white rounded-md" />
          </div>
          <div>
            <Link href="#">© 2024 Copyright ClipCode by Utsav Patel</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
