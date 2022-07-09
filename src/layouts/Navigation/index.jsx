import React from "react";
import OverviewIcon from "@/icons/OverviewIcon";
import RepoIcon from "@/icons/RepoIcon";
import CustomLink from "@/components/General/CustomLink";
import { useGetUserAPI } from "@/features/getUserAPI";
import { useObserverSelector } from "@/features/useObserver";

const Navigation = () => {
  const { userData } = useGetUserAPI();
  const { isVisible } = useObserverSelector();

  return (
    <div className="border-b-2 sticky top-0 bg-white">
      <div className="flex xl:px-[10em] lg:px-[5em] min-h-[3em] ">
        <div className="hidden md:flex items-center min-w-[350px]">
          {userData && (
            <img
              src={`${userData?.avatar_url}`}
              className={`w-[30px] h-[30px] rounded-full ${
                isVisible && "hidden"
              }`}
              alt="avatar"
            />
          )}
        </div>
        <div className="flex items-center pl-5">
          <img
            src={`${userData?.avatar_url}`}
            className={`w-[30px]  md:hidden h-[30px] mr-3 rounded-full ${
              isVisible && "hidden"
            }`}
            alt="avatar"
          />
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
