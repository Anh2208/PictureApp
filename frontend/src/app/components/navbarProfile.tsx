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
    <div className="col-span-3">
      <div className="flex flex-col mt-9 ml-1">
        {/************************ */}
        <div
          className={`p-1 text-md text-start inline-block rounded-md font-medium max-w-[200px]`}
        >
          <Link href="/settings/edit-profile">
            <div
              className={`${
                (pathName === "/settings/edit-profile" ||
                  ("/settings/edit-profile" && pathName === "/settings")) &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Chỉnh sửa hồ sơ
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={`text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/account-settings">
            <div
              className={`${
                pathName === "/settings/account-settings" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Quản lý tài khoản
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={`text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/profile-visibility">
            <div
              className={`${
                pathName === "/settings/profile-visibility" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Chế độ hiển thị hồ sơ
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={`ext-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/edit">
            <div
              className={`${
                pathName === "/edit" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Điều chỉnh bảng tin nhà của bạn
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={` p-1 text-md text-start inline-block font-medium max-w-[210px]`}
        >
          <Link href="/settings/claim">
            <div
              className={`${
                pathName === "/settings/claim" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Tài khoản được xác nhận
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={` p-1 text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/permissions">
            <div
              className={`${
                pathName === "/settings/permissions" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Quyền mạng xã hội
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={` p-1 text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/notifications">
            <div
              className={`${
                pathName === "/settings/notifications" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Thông báo
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={` p-1 text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/privacy">
            <div
              className={`${
                pathName === "/settings/privacy" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Quyền riêng tư và dữ liệu
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={` p-1 text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/security">
            <div
              className={`${
                pathName === "/settings/security" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Bảo mật
            </div>
          </Link>
        </div>
        {/************************ */}
        <div
          className={` p-1 text-md text-start inline-block font-medium max-w-[200px]`}
        >
          <Link href="/settings/branded-content">
            <div
              className={`${
                pathName === "/settings/branded-content" &&
                "border-b-[3px] border-black rounded-b-none inline-block"
              } hover:bg-gray-200 rounded-md font-medium text-[16px] inline-block cursor-pointer p-[8px] iFc`}
            >
              Nội dung mang thương hiệu
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarProfile;
