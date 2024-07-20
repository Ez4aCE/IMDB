import React from "react";
import MenuItem from "./MenuItem";
import { TiHome } from "react-icons/ti";
import { IoMdInformationCircle } from "react-icons/io";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6x1  sm:mx-auto items-center py-3">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={TiHome} />
        <MenuItem title="ABOUT" address="/about" Icon={IoMdInformationCircle} />
      </div>

      <div className="flex items-center space-x-5">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 rounded-lg py-1 px-2 mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline mr-2">CLONE</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
