import React from "react";

const CustomInput = ({ placeholder, className }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`rounded-xl border-2 border-slate-200 py-1 px-3 w-[100%] ${className}`}
      />
    </>
  );
};

export default CustomInput;
