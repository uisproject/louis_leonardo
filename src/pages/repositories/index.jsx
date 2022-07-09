import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import { useDispatch } from "react-redux";
import { getUserReposService } from "@/features/getUserReposAPI";
import { useGetUserReposAPI } from "@/features/getUserReposAPI";

const RepositoriesPage = () => {
  const dispatch = useDispatch();
  const data = useGetUserReposAPI();

  console.log(data);

  useEffect(() => {
    dispatch(getUserReposService());
  }, []);

  return <MainLayout>Repositories</MainLayout>;
};

export default RepositoriesPage;
