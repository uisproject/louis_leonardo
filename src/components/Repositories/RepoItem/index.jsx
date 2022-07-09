import LanguageItem from "@/components/General/LanguageItem";
import React from "react";
import { getNowDifferences } from "@/utils/timeParser";
import Link from "next/link";

const RepoItem = ({ name, language, updated_at, html_url }) => {
  return (
    <div className="border-b-[1px] border-[#bcbcbc]  py-5 flex items-center">
      <div>
        <div className="font-bold text-[#0969DC] pb-2 break-all">
          <Link href={html_url} passHref={true}>
            <a>
              <h3>{name}</h3>
            </a>
          </Link>
        </div>
        <div className="text-[0.8rem] flex flex-wrap">
          {language && (
            <div className="mr-2">
              <LanguageItem value={language} />
            </div>
          )}

          <div>{getNowDifferences(updated_at)}</div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
