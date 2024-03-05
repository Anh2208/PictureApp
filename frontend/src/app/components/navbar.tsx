"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Trang chủ" },
  { url: "/create", title: "Tạo ảnh" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  const isLogged = false;

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* Search */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Jokeay</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            VIE
          </span>
        </Link>
      </div>
      <div className="hidden md:flex justify-center gap-4 w-1/3 relative">
        {/* not logged in yet */}
        <div className="mr-[8px]">
          <button className="min-w-[60px] cursor-pointer">
            <div className="Il7 min-h-[40px] rounded-3xl px-[12px] py-[8px] w-full cursor-pointer hover:bg-red-700">
              <div className="text-center font-semibold text-[16px] text-white">
                Đăng nhập
              </div>
            </div>
          </button>
        </div>
        <div className="justify-center text-center flex">
          <button className="min-w-[60px] cursor-pointer ">
            <div className="a_A min-w-[60px] rounded-3xl min-h-[40px] justify-center text-center flex px-[12px] py-[8px] cursor-pointer">
              <div className="text-center font-semibold text-[16px] text-black">
                Đăng ký
              </div>
            </div>
          </button>
        </div>
        {/* logged */}
        {isLogged && (
          <>
            <Image
              src="/notification.svg"
              alt=""
              width={24}
              height={24}
              onClick={() => setNotification((prev) => !prev)}
            />
            {notification && (
              <div className="absolute right-0 top-10 mt-2 min-w-[360px] max-w-[375px] bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-4 py-2">
                  <h1 className="text-center font-semibold">Cập nhật</h1>
                </div>
                <div className="justify-center flex py-2 px-4">
                  <img src="/notification.png" alt="" />
                </div>
                <div className="py-2 px-4">
                  <h3 className="text-center font-semibold">
                    Chưa có gì để xem
                  </h3>
                </div>
                <div className="py-2 px-4">
                  <div className="text-center text-sm">
                    Hãy thử khám phá bảng tin nhà, tạo bảng hoặc theo dõi ai đó
                    với những ý tưởng truyền cảm hứng cho bạn.
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
                onClick={() => setOpen(false)}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
