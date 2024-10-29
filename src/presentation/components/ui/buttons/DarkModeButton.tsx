"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { toggleTheme } from "@/redux/slices/themeSlice";

export const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      onClick={() => {
        console.log("darkmode button press");
        dispatch(toggleTheme());
      }}
      className={`relative w-8 h-4 scale-125 cursor-pointer rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 md:scale-100 md:w-10 md:h-5 lg:w-12 lg:h-6 xl:w-14 xl:h-7`}>
      <div
        className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
          theme === "light"
            ? "translate-x-0"
            : "translate-x-4 md:translate-x-5 lg:translate-x-6 xl:translate-x-7"
        } md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6`}></div>
    </div>
  );
};
