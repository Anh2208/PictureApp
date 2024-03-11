"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { FaQuestion } from "react-icons/fa";

const Permissions = () => {
  return (
    <div className="w-full grid grid-cols-12 p-3 pt-[80px]">
      <NavbarProfile />
      <div className="col-span-9 w-[488px]">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Quyền mạng xã hội
          </h1>
          <p className="iFc mt-1">
            Chọn cách người khác có thể tương tác với bạn trên Pinterest, cũng
            như các quyền khác dựa trên những tính năng mới nhất của chúng tôi
          </p>
        </div>
        <div className="mt-7 ">
          <p className="iFc text-[20px] font-medium">@Mention</p>
          <p className="iFc mt-1">Chọn ai có thể @mention bạn</p>
          <div className="mt-1 flex">
            <div className="flex flex-col iFc text-[16px]">
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="all"
                >
                  <input
                    name="type"
                    type="radio"
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-500 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="all"
                  />
                  <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label className="mt-px  cursor-pointer iFc " htmlFor="nam">
                  Bất cứ ai trên Pinterest
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
                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-500 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="half"
                  />
                  <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"></span>
                <label
                  className="mt-px text-gray-700 cursor-pointer"
                  htmlFor="half"
                >
                  Chỉ những người bạn theo dõi
                </label>
              </div>
              <div className="inline-flex items-center mt-[-10px]">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="html"
                >
                  <input
                    name="type"
                    type="radio"
                    className="block before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-500 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="khac"
                  />
                  <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-5 text-gray-700 cursor-pointer "
                  htmlFor="khac"
                >
                  Tắt
                  <p className="text-slate-400">Không ai có thể @mention bạn</p>
                </label>
              </div>
            </div>
          </div>
          <div className="mt-9">
            <p className="iFc text-[20px] font-medium">Tin nhắn</p>
            <p className="iFc mt-1">
              Bạn quyết định liệu tin nhắn có đi đến hộp thư đến, danh sách yêu
              cầu hay không hoặc bạn hoàn toàn không nhận được chúng
            </p>
            <div className="mt-2 grid grid-cols-12">
              <div className="col-span-3">
                <p className="iFc font-medium">Bạn bè</p>
                <p className="iFc">Hộp thư đến</p>
              </div>
              <div className="col-span-7"></div>
              <div className="col-span-2 mt-4">
                <span className="iFc font-medium p-[14px] bg-[#e9e9e9] rounded-[23px] cursor-pointer hover:bg-gray-300">
                  Sửa
                </span>
              </div>
            </div>
            <div className="mt-9 grid grid-cols-12">
              <div className="col-span-3">
                <p className="iFc font-medium">Người theo dõi</p>
                <p className="iFc">Yêu cầu</p>
              </div>
              <div className="col-span-7"></div>
              <div className="col-span-2 mt-4">
                <span className="iFc font-medium p-[14px] bg-[#e9e9e9] rounded-[23px] cursor-pointer hover:bg-gray-300">
                  Sửa
                </span>
              </div>
            </div>
            <div className="mt-9 grid grid-cols-12">
              <div className="col-span-3">
                <p className="iFc font-medium">Đang theo dõi</p>
                <p className="iFc">Yêu cầu</p>
              </div>
              <div className="col-span-7"></div>
              <div className="col-span-2 mt-4">
                <span className="iFc font-medium p-[14px] bg-[#e9e9e9] rounded-[23px] cursor-pointer hover:bg-gray-300">
                  Sửa
                </span>
              </div>
            </div>
            <div className="mt-9 grid grid-cols-12">
              <div className="col-span-3">
                <p className="iFc font-medium">Mọi người khác</p>
                <p className="iFc">Yêu cầu</p>
              </div>
              <div className="col-span-7"></div>
              <div className="col-span-2 mt-4">
                <span className="iFc font-medium p-[14px] bg-[#e9e9e9] rounded-[23px] cursor-pointer hover:bg-gray-300">
                  Sửa
                </span>
              </div>
            </div>
            <div className="mt-6">
              <p className="iFc font-medium">Tài khoản bị chặn</p>
              <p className="iFc ">
                Lưu ý: Tài khoản bạn đã chặn trên Pinterest không thể nhắn tin
                cho bạn. Để bỏ chặn tài khoản, hãy chuyển đến hồ sơ của họ.
              </p>
            </div>
            <div className="mt-12">
              <p className="iFc font-medium text-[20px]">Nhận xét</p>
              <div className="mt-1">
                <p className="iFc font-medium">
                  Cho phép nhận xét về Ghim của bạn
                </p>
                <div className="flex">
                  <p className="iFc mt-2 text-[15px] w-[410px]">
                    Nhận xét sẽ được bật theo mặc định cho các Ghim mới và hiện
                    có của bạn
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
              <div className="mt-1">
                <p className="iFc font-medium">Lọc nhận xét về Ghim của tôi</p>
                <div className="flex">
                  <p className="iFc mt-2 text-[15px] w-[410px]">
                    Ẩn nhận xét khỏi các Ghim bạn đã tạo nếu có chứa các từ hoặc
                    cụm từ cụ thể
                  </p>
                  <span className="mt-2">
                    <input
                      type="checkbox"
                      id="toggle2"
                      className="hidden toggle-checkbox"
                    />
                    <label
                      htmlFor="toggle2"
                      className="toggle-label flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 border border-gray-500 bg-white rounded-full shadow-inner toggle-inner"></div>
                      <div className="absolute w-6 h-6 border border-gray-500 bg-white rounded-full shadow-md toggle-circle"></div>
                    </label>
                  </span>
                </div>
              </div>
              <div className="mt-1">
                <p className="iFc font-medium">
                  Lọc nhận xét về Ghim của người khác
                </p>
                <div className="flex">
                  <p className="iFc mt-2 text-[15px] w-[410px]">
                    Ẩn nhận xét có chứa các từ hoặc cụm từ cụ thể từ Ghim của
                    người khác
                  </p>
                  <span className="mt-2">
                    <input
                      type="checkbox"
                      id="toggle3"
                      className="hidden toggle-checkbox"
                    />
                    <label
                      htmlFor="toggle3"
                      className="toggle-label flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 border border-gray-500 bg-white rounded-full shadow-inner toggle-inner"></div>
                      <div className="absolute w-6 h-6 border border-gray-500 bg-white rounded-full shadow-md toggle-circle"></div>
                    </label>
                  </span>
                </div>
              </div>
              <p className="iFc font-medium text-[20px] mt-5">
                Đề xuất mua sắm
              </p>
              <div className="mt-1">
                <p className="iFc font-medium">
                  Hiển thị các sản phẩm tương tự
                </p>
                <div className="flex">
                  <p className="iFc mt-2 text-[15px] w-[410px] mb-1">
                    Mọi người có thể mua sắm các sản phẩm tương tự như trong
                    Ghim này bằng cách tìm kiếm trực quan
                    <br />
                    Đề xuất mua sắm không có sẵn cho các Ghim có nhãn quan hệ
                    đối tác trả phí hoặc sản phẩm được gắn thẻ
                  </p>

                  <span className="mt-2">
                    <input
                      type="checkbox"
                      id="toggle4"
                      className="hidden toggle-checkbox"
                    />
                    <label
                      htmlFor="toggle4"
                      className="toggle-label flex items-center cursor-pointer"
                    >
                      <div className="w-10 h-6 border border-gray-500 bg-white rounded-full shadow-inner toggle-inner"></div>
                      <div className="absolute w-6 h-6 border border-gray-500 bg-white rounded-full shadow-md toggle-circle"></div>
                    </label>
                  </span>
                </div>
              </div>
              <p className="iFc font-medium text-[20px] mt-5">
                Tự động phát video
              </p>
              <div className="mt-1">
                <div className="flex">
                  <p className="iFc mt-2 text-[15px] w-[410px] mb-1">
                    Tự động phát video trên máy tính{" "}
                    <span className="font-medium underline-none decoration-2 hover:underline cursor-pointer">
                      Tìm hiểu thêm
                    </span>
                  </p>

                  <span className="mt-2">
                    <input
                      type="checkbox"
                      id="toggle5"
                      className="hidden toggle-checkbox"
                    />
                    <label
                      htmlFor="toggle5"
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
export default Permissions;
