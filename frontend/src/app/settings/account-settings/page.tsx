"use client";
import Link from "next/link";
import NavbarProfile from "../../components/navbarProfile";

const Account_Settings = () => {
  return (
    <div className="container grid grid-cols-12 p-3 h-[1000px]">
      <NavbarProfile />

      <div className="col-span-9">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-3xl">Quản lí tài khoản</h1>
        </div>
        <div className="w-[500px] mt-3 font-sans">
          Thực hiện thay đổi đối với thông tin cá nhân hoặc loại tài khoản của
          bạn.
        </div>
        <form action="">
          <div className="pt-5">
            <span className="font-medium text-xl">Tài khoản của bạn</span>
          </div>
          <div className="mt-4">
            <div className="flex flex-row">
              <span className="text-[12px]">Email • Riêng tư</span>
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
      <div className="fixed bg-slate-50 w-full bottom-0 p-3 left-0 right-0">
        <div className="flex items-center justify-center">
          <p className="bg-gray-200 p-4 text-slate-500 font-medium rounded-[25px] cursor-pointer">
            Thiết lập lại
          </p>
          <p className="bg-gray-200 p-4 text-slate-500 font-medium rounded-[25px] ml-[20px] cursor-pointer">
            Lưu
          </p>
        </div>
      </div>
    </div>
  );
};
export default Account_Settings;
