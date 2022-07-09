import React from "react";

const CustomButton = ({ type, children, className }) => {
  return (
    <>
      <button
        className={`${
          type === "primary" ? "bg-[#2DA44E] text-[white]" : ""
        } px-3 py-1 rounded-lg ${className}`}
      >
        {children}
      </button>
    </>
  );
};

export default CustomButton;
