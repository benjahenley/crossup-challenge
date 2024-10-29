"use client";

import { DarkModeToggle } from "../DarkModeButton";
import { PageTitle } from "../Texts";

const Navbar: React.FC = () => {
  return (
    <header className="py-5 px-3 bg-gray-200 dark:bg-gray-800">
      <div className="w-full flex flex-row justify-between items-center m-auto max-w-screen-lg md:text-left">
        <PageTitle className="uppercase">Tienda CrossUp</PageTitle>
        <div className=" flex items-center gap-4 flex-row lg:justify-center justify-between px-2">
          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
