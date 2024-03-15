"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UserLinks from "./userLinks";
import LeftNav from "./LeftNav";
import { useSession } from "next-auth/react";

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
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [logged, setLogged] = useState(false);

  // const SwicthAction = () => {
  //   setShowLogin(!showLogin);
  //   setShowRegister(!showRegister);
  // };
  const { data: session } = useSession();
  console.log("data is", session);
  if (!session && session != null) {
    return null;
  }

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
              {!logged && (
                <div className="tracking-tight ml-1">
                  <h1 className="items-start sOY font-semibold text-xl">
                    PicBu
                  </h1>
                </div>
              )}
            </div>
          </a>
        </div>
        <LeftNav />
      </div>
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
        <UserLinks />
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
