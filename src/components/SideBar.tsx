import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { BASE_URLS, menus } from "@/assets/constants";
import { Logo } from "@/components/icons/Logo";
type Props = {};

const SideBar = (props: Props) => {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false);
  return (
    <div className="">
      <div
        onClick={() => setOpenMenuMobile(!openMenuMobile)}
        className={`group fixed top-4 left-4 flex h-8 w-8 cursor-pointer flex-col items-center justify-around p-1  md:hidden ${
          openMenuMobile && "right-4 left-auto z-50"
        }`}
      >
        <span
          className={`block h-[2px] w-full bg-text-base transition-all ${
            openMenuMobile && "translate-y-2 rotate-45"
          }`}
        ></span>
        <span
          className={`block h-[2px] w-full bg-text-base transition-all ${
            openMenuMobile && "opacity-0"
          }`}
        ></span>
        <span
          className={`block h-[2px] w-full bg-text-base transition-all ${
            openMenuMobile && "-translate-y-2 -rotate-45"
          }`}
        ></span>
      </div>
      {openMenuMobile && (
        <div
          className="absolute inset-0 z-10 bg-black/70"
          onClick={() => setOpenMenuMobile(!openMenuMobile)}
        ></div>
      )}
      <div
        className={`absolute z-20 h-full w-[201px] -translate-x-full bg-black pt-6 text-white  md:static md:left-0 md:translate-x-0 ${
          openMenuMobile && "translate-x-0"
        }`}
      >
        <Link
          to={BASE_URLS.Home}
          className="mb-[16px] flex w-full items-center px-6"
        >
          <Logo className="h-[40px] w-full max-w-[131px] text-white" />
        </Link>
        <ul>
          {menus.map((link) => {
            const Icon = link.icon;
            return (
              <li className="px-2" key={link.to}>
                <NavLink
                  className="flex h-[40px] items-center gap-4 px-4 text-sm font-bold text-[#b3b3b3] transition-all duration-[300ms] ease-in hover:text-white"
                  to={link.to}
                >
                  <span>
                    <Icon className="h-[24px] w-[24px]" />
                  </span>
                  <span>{link.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
