"use client";
import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { RiChat4Line } from "react-icons/ri";
import { MdOutlineBookmarks } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { MdModeEditOutline } from "react-icons/md";
import { GiFlowerTwirl } from "react-icons/gi";
import Link from "next/link";

const user = {
  name: "Bluetooxth",
  imageUrl: "https://cdn.codechef.com/sites/default/files/uploads/pictures/38979d70739940da493334ff42fe7bad.jpg",
};

const menuItems = [
  {
    name: "Home",
    icon: <IoHomeOutline />,
    href: "/home",
  },
  {
    name: "Search",
    icon: <IoIosSearch />,
    href: "/search",
  },
  {
    name: "Notifications",
    icon: <GoBell />,
    href: "/notifications",
  },
  {
    name: "Messages",
    icon: <RiChat4Line />,
    href: "/messages",
  },
  {
    name: "Bookmarks",
    icon: <MdOutlineBookmarks />,
    href: "/bookmarks",
  },
  {
    name: "Profile",
    icon: <FiUser />,
    href: "/profile",
  },
  {
    name: "Settings",
    icon: <LuSettings />,
    href: "/settings",
  },
];

const Header = () => {
  const [active, setActive] = useState("home");

  const handleClick = (name: string) => {
    setActive(name);
  };

  return (
    <nav className="flex justify-start items-start bg-transparent w-64 h-screen border-r border-zinc-700">
      <div className="flex flex-col justify-start items-start w-full h-full">
        <div className="flex justify-start items-center w-full mb-4 p-4 border-b border-zinc-700">
          <img
            src={user.imageUrl}
            alt="User Avatar"
            className="w-10 h-10 rounded-lg mr-2"
          />
          <h1 className="text-xl font-medium text-zinc-200">{user.name}</h1>
        </div>
        <div className="flex flex-col justify-start items-start w-full gap-3 p-4">
          {menuItems.map((item) => (
            <Link href={item.href} key={item.name} className="w-full">
              <button
                className={`group flex items-center w-full py-2 px-5 rounded-lg cursor-pointer hover:bg-zinc-800 ${
                  active === item.name ? "bg-zinc-800" : ""
                }`}
                onClick={() => handleClick(item.name)}
              >
                <div className="text-xl text-zinc-100 mr-2">{item.icon}</div>
                <span className="text-zinc-200 transition-transform transform group-hover:translate-x-2 duration-300">
                  {item.name}
                </span>
              </button>
            </Link>
          ))}
          <button className="bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600 transition duration-200 w-full mt-4 cursor-pointer">
            <div className="flex items-center justify-center">
              <MdModeEditOutline className="text-xl mr-2" />
              <span>Create Post</span>
            </div>
          </button>
        </div>
        <div className="flex justify-center items-center w-full mt-auto">
          <div className="flex items-center justify-center py-5 w-full border-t border-zinc-700">
            <GiFlowerTwirl className="text-3xl text-violet-500" />
            <span className="text-violet-500 text-lg font-semibold ml-2">
              Bluet
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
