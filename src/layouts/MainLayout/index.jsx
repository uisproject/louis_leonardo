import React from "react";
import Navigation from "../Navigation";
import SidePanel from "../SidePanel";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserService } from "@/features/getUserAPI";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserService());
  }, []);

  return (
    <>
      <Navigation />
      <div className="px-[10em]">
        <div className="flex">
          <SidePanel />
          <div className="w-[100%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
