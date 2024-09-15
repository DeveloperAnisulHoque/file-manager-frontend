"use client";
import React from "react";

import { FaHome, FaRegTrashAlt, FaStar, FaUser, FaUsers } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/app/utils/cn";

const Sidebar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className="w-[320px] h-full bg-white border-r border-r-slate-200">
      {/* <|============| Logo |==============|> */}

      <div className="text-2xl font-extrabold text-slate-700 capitalize p-4">
        file
        <span className="text-indigo-500 text-3xl">manager</span>
      </div>

      <ul className="py-5 space-y-2">
        <li>
          <Link
            className={cn(
              "flex gap-2 items-center text-slate-400 bg-transparent font-semibold py-2 px-4  hover:bg-indigo-50 hover:text-indigo-500    border-e-2 border-e-transparent  duration-200  ",
              {
                "bg-indigo-50 text-indigo-500    border-e-indigo-400":
                  path == "/dashboard",
              }
            )}
            href={"/dashboard"}
          >
            <MdSpaceDashboard className=" text-xl " />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "flex gap-2 items-center text-slate-400 bg-transparent font-semibold py-2 px-4  hover:bg-indigo-50 hover:text-indigo-500    border-e-2 border-e-transparent  duration-200  ",
              {
                "bg-indigo-50 text-indigo-500    border-e-indigo-400":
                  path == "/home",
              }
            )}
            href={"/home"}
          >
            <FaHome className="  text-xl" />
            Home
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "flex gap-2 items-center text-slate-400 bg-transparent font-semibold py-2 px-4  hover:bg-indigo-50 hover:text-indigo-500    border-e-2 border-e-transparent  duration-200  ",
              {
                "bg-indigo-50 text-indigo-500    border-e-indigo-400":
                  path == "/favorite",
              }
            )}
            href={"/favorite"}
          >
            <FaStar className="  text-xl" />
            Favorite
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "flex gap-2 items-center text-slate-400 bg-transparent font-semibold py-2 px-4  hover:bg-indigo-50 hover:text-indigo-500    border-e-2 border-e-transparent  duration-200  ",
              {
                "bg-indigo-50 text-indigo-500    border-e-indigo-400":
                  path == "/shared",
              }
            )}
            href={"/shared"}
          >
            <FaUsers className="  text-xl" />
            Shared
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "flex gap-2 items-center text-slate-400 bg-transparent font-semibold py-2 px-4  hover:bg-indigo-50 hover:text-indigo-500    border-e-2 border-e-transparent  duration-200  ",
              {
                "bg-indigo-50 text-indigo-500    border-e-indigo-400":
                  path == "/bin",
              }
            )}
            href={"/bin"}
          >
            <FaRegTrashAlt className="  text-xl" />
            Bin
          </Link>
        </li>
        <li>
          <Link
            className={cn(
              "flex gap-2 items-center text-slate-400 bg-transparent font-semibold py-2 px-4  hover:bg-indigo-50 hover:text-indigo-500    border-e-2 border-e-transparent  duration-200  ",
              {
                "bg-indigo-50 text-indigo-500    border-e-indigo-400":
                  path == "/profile",
              }
            )}
            href={"/profile"}
          >
            <FaUser className="  text-xl" />
            Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
