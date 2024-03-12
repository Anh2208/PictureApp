"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { FaQuestion } from "react-icons/fa";

const EditProfile = () => {
  return (
    <div className="container grid grid-cols-12 p-3 h-[1000px] pt-[80px]">
      <NavbarProfile />

      <div className="col-span-9">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Chỉnh sửa hồ sơ
          </h1>
        </div>
        <div className="w-[500px] mt-3 font-sans">
          Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào đây
          hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.
        </div>
        <form action="">
          <div className="pt-5">
            <span className="font-normal text-slate-500 text-sm">Ảnh</span>
            <div className="flex">
              <img
                src="https://i.pinimg.com/140x140_RS/9c/52/19/9c5219882ca65442bd90d3ced0adbfd7.jpg"
                alt=""
                className="rounded-full w-[80px]"
              />
              <span className="mt-6 pl-6 ">
                <p className="font-medium bg-slate-200 hover:bg-slate-300 p-[10px] rounded-[50px] cursor-pointer">
                  Thay đổi
                </p>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row">
              <span className="text-[12px]">Tên</span>
              <input
                type="text"
                name="ten"
                id=""
                className="flex p-3 mt-5 rounded-[20px] ml-[-35px] mr-[35px] border border-slate-300 hover:border-slate-400"
              />
              <span className="text-[12px]">Họ</span>
              <input
                type="text"
                name="ho"
                id=""
                className="flex p-3 mt-5 ml-[-35px] rounded-[20px] border border-slate-300 hover:border-slate-400"
              />
            </div>
            <div className="mt-5">
              <span className="text-[12px]">Giới thiệu</span>
              <input
                type="text"
                name="gioithieu"
                id=""
                className="flex p-3 w-[500px] ml-[-17px] pb-[70px] rounded-[20px] border border-slate-300 hover:border-slate-400"
                placeholder="Kể câu chuyện của bạn"
              />
            </div>
            <div className="mt-5">
              <span className="text-[12px]">Trang web</span>
              <input
                type="text"
                name="trangweb"
                id=""
                className="flex p-3 w-[500px] ml-[-17px] rounded-[20px] border border-slate-300 hover:border-slate-400"
                placeholder="Thêm liên kết để hướng lưu lượng vào website"
              />
            </div>
            <div className="mt-5">
              <span className="text-[12px]">Tên người dùng</span>
              <input
                type="text"
                name="tennguoidung"
                id=""
                className="flex p-3 w-[500px] ml-[-17px] rounded-[20px] border border-slate-300 hover:border-slate-400"
                placeholder="Hãy chọn thật khéo để người khác có thể tìm thấy bạn"
              />
            </div>
          </div>
        </form>
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
            <div className="w-14 h-14 ">
              <FaQuestion className="hover:bg-[#e9e9e9] shadow-lg cursor-pointer w-14 h-14 p-3 rounded-full absolute right-1 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
