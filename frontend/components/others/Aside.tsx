"use client";
import React from "react";
import { IoAlert } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const whomToFollow = [
  {
    name: "Bluetooxth",
    username: "@Bluetooxth",
    imageUrl:
      "https://cdn.codechef.com/sites/default/files/uploads/pictures/38979d70739940da493334ff42fe7bad.jpg",
  },
  {
    name: "Bluetooxth",
    username: "@Bluetooxth",
    imageUrl:
      "https://cdn.codechef.com/sites/default/files/uploads/pictures/38979d70739940da493334ff42fe7bad.jpg",
  },
  {
    name: "Bluet",
    username: "@Bluet",
    imageUrl:
      "https://cdn.codechef.com/sites/default/files/uploads/pictures/38979d70739940da493334ff42fe7bad.jpg",
  },
];

const Aside = () => {

  return (
    <nav className="flex justify-start items-start bg-transparent w-auto h-screen border-l border-zinc-700">
      <div className="flex flex-col justify-start items-start w-full h-full p-4">
        <div className="flex justify-start items-center w-full mb-4">
          <input
            type="text"
            placeholder="Search bluetooxth"
            name=""
            id=""
            className="px-3 py-1.5 border border-zinc-700 bg-zinc-800 rounded-lg text-md font-normal w-full outline-none"
          />
        </div>
        <div className="flex justify-start items-start w-full gap-3 mb-4 border border-zinc-700 rounded-lg p-4 max-w-xs">
          <IoAlert className="text-red-500 text-3xl" />
          <p className="text-zinc-300 text-sm font-normal">
            This is beta version of Bluet. Some features may not work as
            expected.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-3 border border-zinc-700 rounded-lg p-4">
          <h2 className="text-xl font-semibold text-zinc-100">Who to follow</h2>
          <div className="flex flex-col justify-start items-start w-full gap-3 p-4 ">
            {whomToFollow.map((user, index) => (
              <div
                key={index}
                className="flex justify-start items-center gap-4 w-full"
              >
                <img
                  src={user.imageUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-lg"
                />
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-md font-semibold text-zinc-100">
                    {user.name}
                  </h3>
                  <p className="text-sm font-normal text-zinc-400">
                    {user.username}
                  </p>
                </div>
                <button className="bg-violet-500 text-white py-1 px-3 rounded-lg hover:bg-violet-600 transition duration-200 ml-auto cursor-pointer">
                  Follow
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full mt-auto p-4 border border-zinc-700 rounded-lg max-w-xs text-center">
          <h2 className="text-xl font-semibold text-zinc-100">
            Star Bluet on Github
          </h2>
          <p className="text-sm font-normal text-zinc-300 mt-2">
            If you like Bluet, please star it on Github. It helps us a lot.
          </p>
          <Link target="blank" href={"https://github.com/bluetooxth/bluet"} className="w-full">
            <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-zinc-200 transition duration-200 mt-4 cursor-pointer flex items-center justify-center w-full">
              <FaGithub className="text-xl mr-2" />
              <span>Star on Github</span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Aside;
