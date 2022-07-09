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
      <div className=" px-[2em] xl:px-[10em] lg:px-[5em]">
        <div className="flex flex-col md:flex-row">
          <SidePanel />
          <div className="w-[100%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
