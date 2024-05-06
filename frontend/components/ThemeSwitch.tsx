"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiLoader } from "react-icons/bi";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <BiLoader />;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="w-5 h-6 cursor-pointer"
        onClick={() => {
          setTheme("light");
        }}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="w-5 h-6 cursor-pointer"
        onClick={() => {
          setTheme("dark");
        }}
      />
    );
  }
}
