import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { url: "/settings/edit-profile", title: "Chỉnh sửa hồ sơ" },
  { url: "/settings/account-settings", title: "Quản lý tài khoản" },
  { url: "/settings/profile-visibility", title: "Chế độ hiển thị hồ sơ" },
  { url: "/edit", title: "Điều chỉnh bảng tin nhà của bạn" },
  { url: "/settings/claim", title: "Tài khoản được xác nhận" },
  { url: "/settings/permissions", title: "Quyền mạng xã hội" },
  { url: "/settings/notifications", title: "Thông báo" },
  { url: "/settings/privacy", title: "Quyền riêng tư và dữ liệu" },
];
const NavbarProfile = () => {
  const pathName = usePathname();

  console.log(pathName);
  return (
    <div className=" col-span-3">
      <div className=" mt-9 ml-3 ">
        {links.map((link) => (
          <div
            key={link.title}
            className={`${
              (pathName === link.url ||
                (link.url === "/settings/edit-profile" &&
                  pathName === "/settings")) &&
              "relative underline underline-offset-8 decoration-2"
            } p-2 text-md text-start font-medium max-w-[200px]`}
          >
            <Link href={link.url}>
              <div className="hover:bg-slate-100 rounded-md cursor-pointer p-3">
                {link.title}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavbarProfile;
