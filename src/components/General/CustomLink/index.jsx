import React from "react";
import Link from "next/link";

const CustomLink = ({ children, icon, className, href = "#" }) => {
  return (
    <Link href={href} passHref={true}>
      <a className={`flex items-center ${className}`}>
        {icon && <div className="pr-2">{icon}</div>}
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
