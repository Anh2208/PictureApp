"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
// import NavLink from "./navLink";
import Login from "./login";
import Register from "./register";
import Message from "./message";

const links = [
  { url: "/", title: "Trang chủ" },
  { url: "/create", title: "Tạo" },
];

const images = [
  { link: "https://www.facebook.com/", url: "/facebook.png", alt: "facebook" },
  { link: "https://github.com/", url: "/github.png", alt: "github" },
  {
    link: "https://www.instagram.com/",
    url: "/instagram.png",
    alt: "instagram",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const isLogged = true;

  const SwicthAction = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };

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
    // <div className="h-full flex items-center justify-between p-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
    <div className="h-full flex items-center justify-between p-4 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-0 w-1/3">
        <div className="cursor-pointer items-center justify-center flex">
          <a href="/">
            <div className="items-center justify-center px-3 flex flex-row">
              <img src="/logo-picbu.png" alt="logo" className="w-10 h-10" />
              {!isLogged && (
                <div className="tracking-tight ml-1">
                  <h1 className="items-start sOY font-semibold text-xl">
                    PicBu
                  </h1>
                </div>
              )}
            </div>
          </a>
        </div>
        {isLogged ? (
          <>
            <div className="h-[48px] min-w-[60px] rounded-[24px]">
              <a href="/" className="rounded-[24px] w-full cursor-pointer">
                <div className="h-[48px] min-w-[60px] rounded-[24px] whitespace-nowrap px-4 bg-black">
                  <div className="h-full justify-center items-center flex flex-row m-0">
                    <span className="text-white text-center font-semibold text-[16px] iFc">
                      Trang chủ
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div className="h-[48px] min-w-[60px] rounded-[24px]">
              <a
                href="/create"
                className="rounded-[24px] w-full cursor-pointer"
              >
                <div className="h-[48px] min-w-[60px] rounded-[24px] whitespace-nowrap px-4 bg-white">
                  <div className="h-full justify-center items-center flex flex-row m-0">
                    <span className="text-center font-semibold text-[16px] iFc">
                      Tạo
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </>
        ) : (
          <div className="items-center flex flex-row ">
            <div className="py-[8px]">
              <a href="#" className="cursor-pointer rounded-lg">
                <div className="items-center flex flex-col">
                  <div className=" rounded-lg relative p-2">
                    <div className="flex flex-row px-[-4px] justify-center items-center">
                      <div className="px-[4px] text-black font-semibold text-[16px] rounded-lg py-1 hover:bg-customColor-color_background_button_secondary_default">
                        Khám phá
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}
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
        {images.map((image) => (
          <Link
            href={image.link}
            key={image.url}
            className="sm:hidden xl:block"
          >
            <Image src={image.url} alt={image.alt} width={40} height={40} />
          </Link>
        ))}
        {/* logged */}
        {isLogged ? (
          <>
            <div className="items-center flex flex-row">
              <div className="relative block">
                <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex flex-row cursor-pointer">
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
                          Hãy thử khám phá bảng tin nhà, tạo bảng hoặc theo dõi
                          ai đó với những ý tưởng truyền cảm hứng cho bạn.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="block relative">
                <div
                  className="rounded-[50%] w-full cursor-pointer"
                  onClick={() => setShowMessage((prev) => !prev)}
                >
                  <div className="h-[48px] w-[48px] rounded-[50%] flex flex-row justify-center items-center">
                    {showMessage == false ? (
                      <div className="relative">
                        <img
                          src="/icons8-message-100.png"
                          alt="message"
                          className="h-[24px] w-[24px] rounded-[50%] "
                        />
                      </div>
                    ) : (
                      <div className="relative">
                        <img
                          src="/icons8-chat-bubble-100.png"
                          alt="message"
                          className="h-[24px] w-[24px] rounded-[50%] "
                        />
                        <Message />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // not logged in yet
          <>
            <div className="mr-[8px]">
              <button
                className="min-w-[60px] cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                <div className="Il7 min-h-[40px] rounded-3xl px-[12px] py-[8px] w-full cursor-pointer hover:bg-red-700">
                  <div className="text-center font-semibold text-[16px] text-white">
                    Đăng nhập
                  </div>
                </div>
              </button>
            </div>
            <div className="justify-center text-center flex">
              <button
                className="min-w-[60px] cursor-pointer"
                onClick={() => setShowRegister(true)}
              >
                <div className="a_A min-w-[60px] rounded-3xl min-h-[40px] justify-center text-center flex px-[12px] py-[8px] cursor-pointer">
                  <div className="text-center font-semibold text-[16px] text-black">
                    Đăng ký
                  </div>
                </div>
              </button>
            </div>
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
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          Register={() => SwicthAction()}
        />
      )}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          Login={() => SwicthAction()}
        />
      )}
    </div>
  );
};

export default Navbar;
