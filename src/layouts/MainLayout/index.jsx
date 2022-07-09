import React from "react";
import Navigation from "../Navigation";
import SidePanel from "../SidePanel";

const MainLayout = ({ children }) => {
  return (
    <div className="px-[2em]">
      <Navigation />
      <div className="flex">
        <SidePanel />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
