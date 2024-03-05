"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }: { link: { url: string; title: string } }) => {
  const pathName = usePathname();
  console.log("pathName is", pathName);
  return (
    <Link
      className={`${
        pathName === link.url && "bg-black text-white rounded-lg"
      } p-2`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
