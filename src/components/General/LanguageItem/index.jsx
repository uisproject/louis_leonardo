import React, { useInsertionEffect, useRef } from "react";
import languageColor from "@/utils/languageColor";

const LanguageItem = ({ value }) => {
  const color = useRef();

  useInsertionEffect(() => {
    languageColor.forEach((language) => {
      if (language.name === value) {
        color.current = language.color;
      }
    });
  }, [value]);

  return (
    <div className="flex items-center">
      <div
        className={`w-[10px] h-[10px] mr-1 rounded-full`}
        style={{ backgroundColor: color.current }}
      ></div>
      {value}
    </div>
  );
};

export default LanguageItem;
