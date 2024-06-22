
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function PageHeader() {
  return (
    <header className="h-20 px-14 flex items-center border-y bg-[#fafafa]">
      <Link className="flex items-center  justify-center pb-2.5" href="#">
      <Image src="/logo-white.png" alt="Arka Logo" width={172} height={16} />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="btn btn-ghost sign-in-btn" href="#">
          About Us
        </Link>
        <Link className="btn btn-ghost sign-in-btn" href="#">
          Contact Us
        </Link>
      </nav>
    </header >
  );
}

export default PageHeader;
