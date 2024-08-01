import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <>
      <footer className="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div className="bg-black/5 p-4 text-center text-surface dark:text-white justify-center">
          <Link href="#">© 2024 Copyright ClipCode</Link>
        </div>
      </footer>
    </>
  );
};

export default FooterPage;
