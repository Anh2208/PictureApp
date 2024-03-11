"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { FaQuestion } from "react-icons/fa6";

const Notifications = () => {
  return (
    <div className="w-full grid grid-cols-12 p-3 pt-[80px]">
      <NavbarProfile />
      <div className="col-span-9 w-[488px]">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">Thông báo</h1>
          <p className="iFc mt-1">
            Chúng tôi sẽ luôn thông báo về các thay đổi quan trọng, nhưng bạn có
            thể lựa chọn những nội dung khác mà bạn muốn biết.
          </p>
          <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
            Tìm hiểu thêm
          </span>
        </div>
        <div className="mt-10">
          <div className="mt-2 grid grid-cols-12">
            <div className="col-span-7">
              <p className="iFc font-medium">Trên Pinterest</p>
              <p className="iFc mt-1">
                Chọn loại thông báo để xem khi ở trong ứng dụng hoặc trên trang
                web.
              </p>
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-2 mt-[60px] ml-6">
              <span className="iFc font-medium px-[16px] py-[12px] bg-[#e9e9e9] rounded-[24px] cursor-pointer hover:bg-gray-300">
                Sửa
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-12">
            <div className="col-span-7">
              <p className="iFc font-medium">Bằng email</p>
              <p className="iFc mt-1">Chọn loại thông báo để nhận qua email.</p>
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-2 mt-10 ml-6">
              <span className="iFc font-medium  px-[16px] py-[12px] bg-[#e9e9e9] rounded-[24px] cursor-pointer hover:bg-gray-300">
                Sửa
              </span>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-12">
            <div className="col-span-7">
              <p className="iFc font-medium">Bằng thông báo đẩy</p>
              <p className="iFc mt-1">
                Chọn loại thông báo để nhận trên điện thoại hoặc máy tính.
              </p>
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </div>
            <div className="col-span-3"></div>
            <div className="col-span-2 mt-14 ml-6">
              <span className="iFc font-medium  px-[16px] py-[12px] bg-[#e9e9e9] rounded-[24px] cursor-pointer hover:bg-gray-300">
                Sửa
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full fixed bg-slate-50 bottom-0 p-3 left-0 right-0 b_shadow">
        <div className="justify-center items-center content-center">
          <div className="flex justify-center">
            <p className="bg-customColor-color_background_button_secondary_default text-center p-4 text-slate-500 font-medium rounded-[25px] cursor-pointer">
              Thiết lập lại
            </p>
            <p className="bg-customColor-color_background_button_secondary_default text-center  p-4 text-slate-500 font-medium rounded-[25px] ml-[20px] cursor-pointer">
              Lưu
            </p>
            <div className="w-14 h-14">
              <FaQuestion className="hover:bg-[#e9e9e9] shadow-lg cursor-pointer w-14 h-14 p-3 rounded-full absolute right-1 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notifications;
