import React from "react";
import {
  AdjustmentsIcon,
  BookmarkAltIcon,
  ChevronDoubleDownIcon,
  HashtagIcon,
  HomeIcon,
  NewspaperIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { BookmarkIcon } from "@heroicons/react/solid";
import axios from "axios";

function Sidebar({ data }) {
  return (
    <aside className="hidden lg:flex ">
      <div className="flex flex-col">
        <header className="flex justify-center text-white bg-[#44519E] w-20 h-20">
          <NewspaperIcon className="w-10" />
        </header>
        <div className="flex flex-col w-20 h-full justify-start items-center">
          <HomeIcon className="icon " />

          <SearchIcon className="icon" />
          <HashtagIcon className="icon" />
          <BookmarkAltIcon className="icon" />
          <AdjustmentsIcon className="icon" />

          <ChevronDoubleDownIcon className="icon animate-bounce" />
        </div>
      </div>
      <div className="bg-[#F1F1F9] h-screen w-full overflow-scroll overflow-x-hidden">
        <header className=" flex h-20 bg-[#F1F1F9] min-w-[20rem] border-b-2 justify-between sticky top-0 z-10  ">
          <p className="  text-[#44519E] text-lg font-[Roboto] font-semibold flex justify-left pl-4 items-center h-full   ">
            Recent News
          </p>
          <BookmarkIcon className="flex mr-4 w-6 self-start text-[#DEC5C1] " />
        </header>
        <div className="flex flex-col w-full h-full divide-y-2 divide-[#F9FAFD] ">
          {data.articles.map((article) => (
            <div key={article.title} className="recent_news group">
              <p className="publish_at">
                {article.publishedAt.split("T")[1].slice(0, 5)}{" "}
              </p>
              <a href={article.url} target="_blank" className="publish_title">
                {" "}
                {article.title}
              </a>
              {article.author ? (
                <p className="publish_author">by {article.author}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
