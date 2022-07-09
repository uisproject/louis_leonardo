import React, { useEffect, useState } from "react";
import languageColor from "@/utils/languageColor";

const LanguageItem = ({ value }) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    languageColor.forEach((language) => {
      if (language.name === value) {
        setColor(language.color);
      }
    });
  }, [value]);

  return (
    <div className="flex items-center">
      <div
        className={`w-[10px] h-[10px] mr-1 rounded-full`}
        style={{ backgroundColor: color }}
      ></div>
      {value}
    </div>
  );
};

export default LanguageItem;
