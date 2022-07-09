import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const CustomLink = ({
  children,
  icon,
  className,
  useActive = false,
  href = "#",
}) => {
  const router = useRouter();
  console.log(router.asPath);
  console.log(href);
  return (
    <Link href={href} passHref={true}>
      <a
        className={`flex items-center h-100 ${className || ""}${" "}${
          useActive && router.asPath === href
            ? "border-b-4 border-[#FD8C73]"
            : ""
        }`}
      >
        {icon && <div className="pr-2">{icon}</div>}
        {children}
      </a>
    </Link>
  );
};

export default CustomLink;
