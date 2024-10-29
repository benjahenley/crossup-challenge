"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.className = theme; // Apply theme to <html>
  }, [theme]);

  return <>{children}</>;
};

export default ThemeProvider;
