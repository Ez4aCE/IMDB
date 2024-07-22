"use client";
import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div className="mr-6 flex items-center">
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre &&
          genre === param &&
          "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"
        } `}
        href={`/?genre=${param}`}
      >
        <p>{title}</p>
      </Link>
    </div>
  );
}
