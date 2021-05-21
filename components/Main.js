import {
  SearchIcon,
  MenuAlt1Icon,
  X,
  MenuAlt3Icon,
  RefreshIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import React, { useState } from "react";
import Post from "./Post";

function Main({ data, type }) {
  const [navToggle, setnavToggle] = useState(true);

  return (
    <main className="flex flex-col  overflow-y-hidden overflow-x-hidden">
      <header className="flex justify-between">
        <button className="hidden lg:flex w-6 ml-4 items-center justify-center focus:outline-none mt-4">
          {navToggle ? (
            <MenuAlt1Icon className="btn" />
          ) : (
            <MenuAlt3Icon className="btn" />
          )}
        </button>
        <div></div>
        {navToggle ? (
          <div className="flex mr-10 mt-2 ">
            <p className={"nav_option " + (type === "general" ? "active" : "")}>
              <Link href="/">General</Link>
            </p>
            <p
              className={
                "nav_option " + (type === "technology" ? "active" : "")
              }
            >
              <Link href="/technology">Technology</Link>
            </p>
            <p
              className={"nav_option " + (type === "business" ? "active" : "")}
            >
              <Link href="/business">Business</Link>
            </p>
            <p className={"nav_option " + (type === "sports" ? "active" : "")}>
              <Link href="/sports">Sports</Link>
            </p>
          </div>
        ) : null}
      </header>
      <div className="w-full  text-center md:text-left md:ml-20 pb-4 text-[#44519E] text-5xl font-bold font-[Roboto] sticky top 0 z-10">
        <p>
          Main <span className="font-normal">news</span>
        </p>
      </div>
      <div className="flex flex-wrap justify-center   md:ml-20  overflow-y-scroll">
        {data.articles.map((article) => (
          <Post key={article.title} {...article} />
        ))}
      </div>
    </main>
  );
}

export default Main;
