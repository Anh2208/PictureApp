import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { url: "/settings/edit-profile", title: "Chỉnh sửa hồ sơ" },
  { url: "/settings/account-settings", title: "Quản lý tài khoản" },
];
const NavbarProfile = () => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <div className="col-span-3">
      <ul className="gap-3 mt-9 ml-3">
        {links.map((link) => (
          <li key={link.title} className="text-md font-medium mb-6">
            <Link
              className={`${
                (pathName === link.url ||
                  (link.url === "/settings/edit-profile" &&
                    pathName === "/settings")) &&
                "underline underline-offset-8 decoration-2"
              } p-2`}
              href={link.url}
            >
              <span className="hover:bg-slate-200 p-2 rounded-md cursor-pointer">
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarProfile;
