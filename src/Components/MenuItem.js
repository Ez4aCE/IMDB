import React from "react";
import Link from "next/link";

export default function MenuItem({ title, address, Icon }) {
  return (
    <div>
      <div className="">
        <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
          <p className="hidden sm:inline my-2 text-sm">{title} </p>
          <Icon className="text-2xl sm:hidden" />
        </Link>
      </div>
    </div>
  );
}
