"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="bg-emerald-50 min-h-screen dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-500">
        {children}
      </div>
    </ThemeProvider>
  );
}
