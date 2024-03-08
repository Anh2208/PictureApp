"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { TbWorld } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";

const Claim = () => {
  return (
    <div className="container grid grid-cols-12 p-3 h-[1400px] pt-[80px]">
      <NavbarProfile />

      <div className="col-span-9 w-[488px]">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Tài khoản được xác nhận
          </h1>
          <p className="iFc mt-1">
            Khi bạn xác nhận một tài khoản, bạn có thể theo dõi số liệu phân
            tích và đảm bảo tên hoặc tên thương hiệu của bạn xuất hiện trên mọi
            Ghim được tạo từ trang web của bạn.{" "}
            <span className="font-medium underline-none decoration-2 hover:underline cursor-pointer">
              Tìm hiểu thêm
            </span>
          </p>
        </div>
        <div className="mt-7 grid grid-cols-10">
          <div className="col-span-8">
            <p className="iFc font-medium flex gap-3">
              <TbWorld size="30px" />
              Trang web
            </p>
            <p className="iFc text-[14px] ml-[40px] w-[345px]">
              Được ghi nhận là tác giả cho tất cả các Ghim liên kết đến trang
              web của bạn trên Pinterest.
              <a className="font-medium text-[16px] underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </a>
            </p>
          </div>
          <div className="col-span-2 mt-6 ml-3">
            <span className="p-[9px] w-[91px] bg-[#e9e9e9] rounded-[25px] iFc font-medium hover:bg-gray-200 cursor-pointer">
              Xác nhận
            </span>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-10">
          <div className="col-span-8">
            <p className="iFc font-medium flex gap-3">
              <FaInstagram size="25px" />
              Instagram
            </p>
            <p className="iFc text-[14px] ml-[40px] w-[345px]">
              Được ghi nhận là tác giả cho các Ghim hiện có liên kết với tài
              khoản Instagram của bạn và cho phép Pinterest tự động tạo Ghim khi
              bạn đăng lên Instagram.
              <br />
              <a className="font-medium text-[16px] underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </a>
            </p>
          </div>
          <div className="col-span-2 mt-10 ml-3">
            <span className="p-[9px] w-[91px] bg-[#e9e9e9] rounded-[25px] iFc font-medium hover:bg-gray-200 cursor-pointer">
              Xác nhận
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Claim;
