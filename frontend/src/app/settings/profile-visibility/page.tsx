"use client";
import NavbarProfile from "@/app/components/navbarProfile";

const Profile_Visibility = () => {
  return (
    <div className="container grid grid-cols-12 p-3 h-[1000px] pt-[80px]">
      <NavbarProfile />

      <div className="col-span-9 w-[488px]">
        <div className="">
          <div className="mt-9 ">
            <h1 className="text-wrap font-medium text-[28px] iFc">
              Chế độ hiển thị hồ sơ
            </h1>
            <p className="iFc mt-1 text-[16px]">
              Quản lý cách hồ sơ của bạn hiển thị trên và ngoài Pinterest.
            </p>
          </div>
          <div className="mt-7">
            <p className="iFc font-medium">Hồ sơ riêng tư</p>
            <div className="flex">
              <p className="iFc mt-2 text-[15px] w-[410px]">
                Khi hồ sơ của bạn ở chế độ riêng tư, chỉ những người bạn chấp
                thuận mới có thể xem hồ sơ, Ghim, bảng, người theo dõi và danh
                sách theo dõi của bạn.{" "}
                <a className="font-medium underline-none decoration-2 hover:underline cursor-pointer">
                  Tìm hiểu thêm
                </a>
              </p>
              <span className="mt-2">
                <input
                  type="checkbox"
                  id="toggle"
                  className="hidden toggle-checkbox"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label flex items-center cursor-pointer"
                >
                  <div className="w-10 h-6 border border-gray-500 bg-white rounded-full shadow-inner toggle-inner"></div>
                  <div className="absolute w-6 h-6 border border-gray-500 bg-white rounded-full shadow-md toggle-circle"></div>
                </label>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <p className="iFc font-medium">Quyền riêng tư khi tìm kiếm</p>
            <div className="flex">
              <p className="iFc mt-2 text-[15px] w-[410px]">
                Ẩn hồ sơ và bảng của bạn khỏi các công cụ tìm kiếm (ví dụ:
                Google). 
                <a className="font-medium underline-none decoration-2 hover:underline cursor-pointer">
                  Tìm hiểu thêm
                </a>
              </p>

              <span className="mt-2">
                <input
                  type="checkbox"
                  id="toggle1"
                  className="hidden toggle-checkbox"
                />
                <label
                  htmlFor="toggle1"
                  className="toggle-label flex items-center cursor-pointer"
                >
                  <div className="w-10 h-6 border border-gray-500 bg-white rounded-full shadow-inner toggle-inner"></div>
                  <div className="absolute w-6 h-6 border border-gray-500 bg-white rounded-full shadow-md toggle-circle"></div>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bg-slate-50 w-full bottom-0 p-3 left-0 right-0">
        <div className="flex items-center justify-center">
          <p className="bg-customColor-color_background_button_secondary_default p-4 text-slate-500 font-medium rounded-[25px] cursor-pointer">
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

export default Profile_Visibility;
