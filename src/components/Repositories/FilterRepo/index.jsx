import React from "react";
import CustomButton from "@/components/General/CustomButton";
import CustomInput from "@/components/General/CustomInput";
import { setSearch } from "@/features/getUserReposAPI";
import { useDispatch } from "react-redux";

const FilterRepo = () => {
  const dispatch = useDispatch();

  return (
    <div className="my-5 flex items-center ">
      <div className="mr-2 w-[100%]">
        <CustomInput
          onChange={(e) => {
            dispatch(setSearch(e.target.value));
          }}
          placeholder="Find a repository"
        />
      </div>
      <CustomButton type="primary">Search</CustomButton>
    </div>
  );
};

export default FilterRepo;
