import React from "react";

import Header from "./Header";
import MusicPlayer from "./MusicPlayer";
import SideBar from "./SideBar";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="flex h-screen w-full">
        <SideBar />
        <div className="flex-1 bg-bg-base">
          <Header />
          <div className="h-[calc(100vh-var(--height-header)-70px)] overflow-y-scroll md:h-[calc(100vh-var(--height-header)-90px)]">
            {children}
          </div>
        </div>
      </div>
      <div className=" border- fixed left-0 bottom-0 right-0 h-[70px]  w-full border-t border-solid	 border-stone-600 md:h-[90px]">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default DefaultLayout;
