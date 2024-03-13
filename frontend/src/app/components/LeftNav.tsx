import { useSession } from "next-auth/react";
import NavLink from "./navLink";

const links = [
  { url: "/", title: "Trang chủ" },
  { url: "/create", title: "Tạo" },
];

const LeftNav = () => {
  const { status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          {links.map((link) => (
            <div
              key={link.url}
              className="h-[48px] min-w-[60px] rounded-[24px]"
            >
              <a
                href={link.url}
                className="rounded-[24px] w-full cursor-pointer"
              >
                <div className="h-[48px] min-w-[60px] rounded-[24px] whitespace-nowrap px-4">
                  <div className="h-full justify-center items-center flex flex-row m-0">
                    <span className="text-center font-semibold text-[16px] iFc">
                      <NavLink link={link} />
                    </span>
                  </div>
                </div>
              </a>
            </div>
          ))}
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
    </>
  );
};

export default LeftNav;
