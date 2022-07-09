import React from "react";
import SidePanelWrapper from "@/components/General/SidePanelWrapper";
import OverviewIcon from "@/icons/OverviewIcon";
import RepoIcon from "@/icons/RepoIcon";
import CustomLink from "@/components/General/CustomLink";

const Navigation = () => {
  return (
    <div className="border-b-2 sticky top-0 bg-white">
      <div className="flex xl:px-[10em] lg:px-[5em]  min-h-[3em] ">
        <div className="hidden md:block">
          <SidePanelWrapper />
        </div>
        <div className="flex pl-5">
          <CustomLink
            useActive={true}
            className="mr-5"
            href="/"
            icon={<OverviewIcon />}
          >
            Overview
          </CustomLink>
          <CustomLink useActive={true} href="/repositories" icon={<RepoIcon />}>
            Repositories
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
