import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { LeftArrow } from "./icons/LeftArrow";
import { RightArrow } from "./icons/RightArrow";

const Header = ({ children }: { children?: React.ReactNode }) => {
  const iconCss =
    "flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-[100vmax] bg-black";
  return (
    <div className="flex h-[var(--height-header)] items-center p-4">
      <div className="mr-4 h-6 w-6 md:hidden"></div>
      <div className="flex items-center justify-start gap-2">
        <span className={iconCss}>
          <LeftArrow className="fill-white" />
        </span>
        <span className={iconCss}>
          <RightArrow className="fill-white" />
        </span>
      </div>
      <div className="flex-1">{children}</div>
      <div className="flex items-center gap-1 rounded-[100vmax] bg-bg-press p-1 pr-2">
        <span className="flex h-[28px] w-[28px] items-center justify-center rounded-[inherit] bg-bg-medium">
          <BsFillPersonFill className="h-[16px] w-[16px] text-text-base" />
        </span>
        <Link to="" className="text-sm font-bold text-text-base">
          Nguyen Dang Sang
        </Link>
      </div>
    </div>
  );
};

export default Header;
