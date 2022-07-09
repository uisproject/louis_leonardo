import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { useDispatch } from "react-redux";
import { getUserReposService } from "@/features/getUserReposAPI";
import { useGetUserReposAPI } from "@/features/getUserReposAPI";
import RepoItem from "@/components/Repositories/RepoItem";
import FilterRepo from "@/components/Repositories/FilterRepo";

const RepositoriesPage = () => {
  const dispatch = useDispatch();
  const { filteredRepo, isLoading } = useGetUserReposAPI();

  useEffect(() => {
    dispatch(getUserReposService());
  }, []);

  return (
    <MainLayout>
      <div className="mb-5">
        {!isLoading ? (
          <div>
            <FilterRepo />
            <hr className="border-[#bcbcbc]" />
            {filteredRepo.map((repo, index) => (
              <RepoItem key={index} {...repo} />
            ))}
            <hr className="border-[#bcbcbc]" />
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    </MainLayout>
  );
};

export default RepositoriesPage;
