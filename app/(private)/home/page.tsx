"use client";
import React, { useState } from "react";
import {
  FcClapperboard,
  FcDocument,
  FcFolder,
  FcHome,
  FcLandscape,
  FcList,
  FcSearch,
} from "react-icons/fc";
import { HiFolder } from "react-icons/hi";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

import { BsThreeDots } from "react-icons/bs";

import { MdFolderZip, MdSpaceDashboard } from "react-icons/md";

const page = () => {
  const [isSearch, setSearch] = useState(false);
  return (
    <div className=" h-full bg-white border border-slate-200 shadow-sm rounded-md  overflow-hidden">
      <div className="flex items-center justify-between gap-3 pe-2 border-b border-b-slate-100">
        <div className="flex-1 p-1  bg-slate-50 flex gap-1 items-center  text-sm font-semibold  text-slate-400 pe-2">
          <div className="flex gap-2   py-2 items-end px-2 hover:bg-slate-100  duration-150 cursor-pointer hover:text-slate-600 rounded">
            <FcHome className="text-2xl" /> <span className="">Home</span>
          </div>
          <span>/</span>
          <div className="flex gap-2   py-2 items-end px-2 hover:bg-slate-100  duration-150 cursor-pointer hover:text-slate-600 rounded">
            <span className="">new</span>
          </div>

          <button className="bg-slate-50 hover:bg-slate-100 duration-150 ms-auto rounded-sm text-lg p-1 h-full ring-1 ring-slate-200 hover:ring-slate-300 ">
            <PiDotsThreeOutlineVerticalFill className=" text-slate-700" />
          </button>
        </div>
        <button
          onClick={() => setSearch(!isSearch)}
          className={`bg-slate-50 hover:bg-slate-100 duration-150 rounded-sm text-xl p-2 h-full ring-1  hover:ring-slate-300    ${
            isSearch ? "ring-blue-300" : "ring-slate-200"
          }`}
        >
          <FcSearch />
        </button>
        <button className="bg-slate-50 hover:bg-slate-100 duration-150 rounded-sm text-xl p-2 h-full ring-1 ring-slate-200 hover:ring-slate-300 ">
          <FcList />
        </button>
      </div>

      {isSearch && (
        <div className="w-full p-1 bg-white border flex gap-2  border-slate-100">
          <input
            type="text"
            className=" flex-1 outline-none py-1 px-4 text-slate-500"
            placeholder="Search here . . . "
          />
          <button className="text-white bg-blue-500 px-3 py-1 rounded text-sm ">
            Search
          </button>
        </div>
      )}
      <div className="max-h-full overflow-y-auto w-full   grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8  xl:grid-cols-10   2xl:grid-cols-12 gap-2 p-4 pb-40">
        {[...Array(5)].map(() => (
          <div className="px-3   h-fit      ">
            <HiFolder className="w-full h-auto   text-slate-200 animate-pulse " />
            <span className="text-sm text-slate-200 font-semibold px-2 ">
              loading
            </span>
          </div>
        ))}
        {[...Array(5)].map(() => (
          <div className="px-3   py-1 hover:bg-slate-50 h-fit rounded-md  duration-150  relative group">
            <FcFolder className="w-full h-auto  " />
            <span className="text-sm text-slate-500 font-semibold px-2">
              Cv
            </span>
            <button className="absolute top-2 right-2 hidden group-hover:block">
              <BsThreeDots />
            </button>
          </div>
        ))}
        {[...Array(5)].map(() => (
          <div className="px-3   py-1 hover:bg-slate-50 h-fit rounded-md  duration-150  relative group">
            <MdFolderZip className="w-full h-auto  text-slate-600 " />
            <span className="text-sm text-slate-500 font-semibold px-2">
              Cv
            </span>
            <button className="absolute top-2 right-2 hidden group-hover:block">
              <BsThreeDots />
            </button>
          </div>
        ))}
        {[...Array(1)].map(() => (
          <div className="px-3   py-1 hover:bg-slate-50 h-fit rounded-md  duration-150  relative group">
            <FcClapperboard className="w-full h-auto  text-slate-600 " />
            <span className="text-sm text-slate-500 font-semibold px-2">
              Cv
            </span>
            <button className="absolute top-2 right-2 hidden group-hover:block">
              <BsThreeDots />
            </button>
          </div>
        ))}
        {[...Array(5)].map(() => (
          <div className="px-3   py-1 hover:bg-slate-50 h-fit rounded-md  duration-150  relative group">
            <FcDocument className="w-full h-auto  " />
            <span className="text-sm text-slate-500 font-semibold px-2">
              camp.pdf
            </span>
            <button className="absolute top-2 right-2 hidden group-hover:block">
              <BsThreeDots />
            </button>
          </div>
        ))}
        {[...Array(5)].map(() => (
          <div className="px-3   py-1 hover:bg-slate-50 h-fit rounded-md  duration-150  relative group">
            <FcLandscape className="w-full h-auto border rounded-md bg-sky-100  " />
            <span className="text-sm text-slate-500 font-semibold px-2">
              camp.pdf
            </span>
            <button className="absolute top-2 right-2 hidden group-hover:block">
              <BsThreeDots />
            </button>
          </div>
        ))}
      </div>

      {/* <Image
        width={800}
        height={800}
        className="w-4/12 mx-auto  h-auto object-contain"
        src={emptyFolder}
        alt="emapty_folder"
      /> */}
    </div>
  );
};

export default page;
