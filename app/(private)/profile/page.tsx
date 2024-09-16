import React from "react";
import ReactCountryFlag from "react-country-flag";
import { FaInfo, FaUserAlt } from "react-icons/fa";
import { ImQuill } from "react-icons/im";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Page = () => {
  return (
    <div>
      <div className=" bg-indigo-200 h-[150px]"></div>
      <div className="w-[96%] py-4 px-10 bg-white rounded-md shadow-sm mx-auto min-h-[120px] mt-[-50px] flex gap-4  ">
        <div className="w-[140px] h-[140px] border-2 border-slate-100 rounded-full  mt-[-70px] bg-white shadow-sm"></div>
        <div className="space-y-4">
          <span className="rounded-full text-xs px-3  font-semibold  shadow-sm py-[5px] border border-slate-100 text-slate-800 flex gap-2 items-center w-fit">
            <ReactCountryFlag countryCode="BD" svg className="text-xl" />
            Bangladesh
          </span>
          <div className="space-y-1">
            <h1 className="font-bold text-lg">Md Anisul hoque </h1>
            <p className="text-slate-600 text-sm ">Full-stack webdeveloper</p>
          </div>
        </div>

        <div className="space-y-2 w-[400px]  mt-auto ms-auto">
          <label htmlFor="link" className="text-slate-700 font-semibold  block">
            Link
          </label>

          <div className="bg-slate-100  w-full  rounded-md relative ">
            <input
              type="text"
              value={"http://localhost:3000/user/anis520"}
              className=" w-full  bg-slate-100  px-4  py-2 rounded-md text-sm text-slate-600
            "
            />
            <button className="px-3 py-1 bg-indigo-500 text-white  rounded-sm font-semibold absolute right-1  my-auto inset-y-0  h-fit hover:bg-indigo-400 duration-200 ">
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white rounded-md  mt-6 shadow-sm">
        <ul className=" flex gap-2 border-b-2 border-slate-100 py-1">
          <li className="">
            <button className="px-4 py-2 text-sm font-semibold bg-indigo-500 text-white rounded flex items-center gap-2">
              <IoInformationCircleOutline className="text-lg" />
              Info
            </button>
          </li>
          <li className="">
            <button className="px-4 py-2 text-sm font-semibold  text-indigo-400 hover:bg-indigo-50 hover:text-indigo-500  rounded flex items-center gap-2">
              <MdAccountCircle className="text-lg" />
              Account
            </button>
          </li>
          <li className="">
            <button className="px-4 py-2 text-sm font-semibold  text-indigo-400 hover:bg-indigo-50 hover:text-indigo-500  rounded flex items-center gap-2">
              <ImQuill className="text-lg" />
              Appearance
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
