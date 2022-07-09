import React from "react";
import SidePanelWrapper from "@/components/General/SidePanelWrapper";
import OverviewIcon from "@/icons/OverviewIcon";
import RepoIcon from "@/icons/RepoIcon";
import CustomLink from "@/components/General/CustomLink";

const Navigation = () => {
  return (
    <div className="flex min-h-[3em] border-b-2">
      <SidePanelWrapper />
      <div className="flex">
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
  );
};

export default Navigation;
