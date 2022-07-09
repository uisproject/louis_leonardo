import React from "react";
import SidePanelWrapper from "@/components/General/SidePanelWrapper";
import { useGetUserAPI } from "@/features/getUserAPI";
import FollowerIcon from "@/icons/FollowerIcon";

const SidePanel = () => {
  const { userData, isLoading } = useGetUserAPI();

  return (
    <>
      {!isLoading && (
        <SidePanelWrapper>
          <div className="w-[340px]">
            <img
              className="w-[90%] rounded-full mt-[10px] md:mt-[-25px] relative z-10"
              src={`${userData?.avatar_url}`}
              alt="avatar"
            />
            <div className="text-[#57606a] text-[24px] mb-2">
              {userData?.login}
            </div>
            <div className="flex">
              <div className="flex items-center mr-1">
                <div className="mr-1">
                  <FollowerIcon />
                </div>
                {userData?.followers} follower
              </div>
              <div>{userData?.following} following</div>
            </div>
          </div>
        </SidePanelWrapper>
      )}
    </>
  );
};

export default SidePanel;
