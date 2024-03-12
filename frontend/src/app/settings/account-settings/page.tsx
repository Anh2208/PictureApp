"use client";
import NavbarProfile from "../../components/navbarProfile";
import "react-datepicker/dist/react-datepicker.css";
import { Select, Option } from "@material-tailwind/react";
import { FaQuestion } from "react-icons/fa";
const Account_Settings = () => {
  return (
    <div className="container grid grid-cols-12 p-3 h-[1400px] pt-[80px]">
      <NavbarProfile />

      <div className="col-span-9">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Quản lý tài khoản
          </h1>
        </div>
        <div className="w-[500px] mt-2 font-sans">
          Thực hiện thay đổi đối với thông tin cá nhân hoặc loại tài khoản của
          bạn.
        </div>
        <form action="" className="w-[500px]">
          <div className="pt-7">
            <span className="font-medium text-xl iFc">Tài khoản của bạn</span>
          </div>
          <div className="mt-1">
            <div className="flex flex-row">
              <span className="text-[12px] iFc">Email • Riêng tư</span>
              <input
                type="text"
                name="ho"
                id=""
                className="flex p-[10px] mt-6 ml-[-82px] rounded-[17px] border-2 w-[490px] border-slate-300 hover:border-slate-400"
              />
            </div>
            <div className="mt-6 flex">
              <span className="text-[12px] iFc ">Mật khẩu</span>
              <input
                type="password"
                name="matkhau"
                id=""
                className="block p-3 w-[400px] mt-5 ml-[-50px] rounded-[17px] border-2 border-slate-300 hover:border-slate-400"
              />
              <span className="p-3 pt-3 ml-3 w-[77px] bg-[#E9E9E9] iFc rounded-[25px] text-center font-medium justify-content-center">
                Thay đổi
              </span>
            </div>
            <div className="mt-6 grid grid-cols-5">
              <div className="col-span-3">
                <p className=" iFc font-medium">
                  Chuyển đổi thành tài khoản doanh nghiệp
                </p>
                <p className="iFc text-[16px] mt-[5px]">
                  Với tài khoản doanh nghiệp, bạn sẽ có quyền truy cập vào các
                  công cụ như quảng cáo và phân tích để phát triển doanh nghiệp
                  của bạn trên Pinterest.
                </p>
              </div>
              <div className="col-span-2 iFc font-medium justify-content-center mt-[50px]">
                <p className="bg-[#E9E9E9] p-[11px] rounded-[25px] text-center cursor-pointer hover:bg-gray-200">
                  Chuyển đổi tài khoản
                </p>
              </div>
            </div>
            <div className="mt-6">
              <span className="iFc font-medium text-xl">Thông tin cá nhân</span>
              <div className="mt-6 flex flex-col">
                <span className="text-[12px] iFc ">Ngày sinh</span>

                <input
                  type="date"
                  name=""
                  id=""
                  className="p-3 border-2 border-gray-300 rounded-[20px] mt-[5px] hover:border-gray-400"
                />
              </div>
              <div className="mt-6 flex flex-row">
                <span className="text-[12px] iFc">Giới tính</span>
                <div className="flex gap-10  iFc text-[16px] ml-[-50px] mt-[15px] ">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="nam"
                    >
                      <input
                        name="type"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="nam"
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px text-gray-700 cursor-pointer"
                      htmlFor="nam"
                    >
                      Nam
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="html"
                    >
                      <input
                        name="type"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="nu"
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"></span>
                    <label
                      className="mt-px text-gray-700 cursor-pointer"
                      htmlFor="nu"
                    >
                      Nữ
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="html"
                    >
                      <input
                        name="type"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                        id="khac"
                      />
                      <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle
                            data-name="ellipse"
                            cx="8"
                            cy="8"
                            r="8"
                          ></circle>
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px text-gray-700 cursor-pointer"
                      htmlFor="khac"
                    >
                      Khác
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col w-[500px]">
                <span className="text-[12px] mb-2 iFc">Quốc gia/Khu vực</span>
                <Select
                  className="p-6 border-2 border-gray-300  rounded-[20px] hover:border-gray-400 content-end items-end justify-end"
                  variant="outlined"
                  placeholder={"Chọn quốc gia"}
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <Option>Việt Nam</Option>
                  <Option>Vương Quốc Anh</Option>
                </Select>
              </div>
            </div>
            <div className="mt-8">
              <span className="iFc font-medium text-xl">
                Vô hiệu hóa và xóa
              </span>
              <div className="grid grid-cols-2 mt-3 ">
                <div className="">
                  <p className="iFc font-medium">Hủy kích hoạt tài khoản</p>
                  <p className="iFc mt-2">Tạm thời ẩn hồ sơ, Ghim và bảng</p>
                  của bạn
                </div>
                <div className="mt-9 ml-5">
                  <span className="p-[13px] bg-[#e9e9e9] font-medium iFc cursor-pointer rounded-[25px]">
                    Hủy kích hoạt tài khoản
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 mt-3 ">
                <div className="col-span-2">
                  <p className="iFc font-medium">
                    Xóa dữ liệu và tài khoản của bạn
                  </p>
                  <p className="iFc mt-2">
                    Xóa vĩnh viễn dữ liệu của bạn và mọi thứ liên kết với tài
                    khoản của bạn
                  </p>
                </div>
                <div className="mt-9 ml-5">
                  <span className="p-[13px] bg-[#e9e9e9] font-medium iFc cursor-pointer rounded-[25px]">
                    Xóa tài khoản
                  </span>
                </div>
              </div>
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
export default Account_Settings;
