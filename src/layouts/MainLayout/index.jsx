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
    <div className="px-[2em]">
      <Navigation />
      <div className="flex">
        <SidePanel />
        <div className="w-[100%] pt-5">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
