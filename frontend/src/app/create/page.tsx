"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const CreatePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [loading, setLoading] = useState(true); // Thêm state 'loading'
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Kiểm tra nếu session đã được load và có giá trị
    if (session) {
      setLoading(false); // Đã load xong, không còn loading nữa
    }
    if (session == null) {
      router.push("/");
    }
    console.log(session);
  }, [session]); // Chạy useEffect mỗi khi session thay đổi

  // Nếu đang loading hoặc chưa có session, không hiển thị gì cả
  if (loading || !session) {
    return null; // Hoặc có thể trả về một spinner hoặc thông báo loading
  }

  return (
    <div className="grid grid-cols-12 border-2">
      {isOpen ? (
        <div className="col-span-3 p-2">
          <div className="p-1">
            <div className="flex">
              <h1 className="text-lg mt-[10px]">
                <b>Bản Nháp Ghim</b>
              </h1>
              <div className="pl-[150px]">
                <button
                  onClick={toggleSidebar}
                  className="hover:bg-slate-200 rounded-full p-2"
                >
                  <MdKeyboardDoubleArrowLeft fontSize="30px" />
                </button>
              </div>
            </div>
            <div className="bg-slate-200 hover:bg-slate-300 rounded-full text-center p-2 mt-3 mb-3 cursor-pointer">
              <b>
                <button>Tạo mới</button>
              </b>
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-[40px] mt-[10px]">
          <button
            onClick={toggleSidebar}
            className="hover:bg-slate-200 rounded-full p-2"
          >
            <MdKeyboardDoubleArrowRight fontSize="30px" />
          </button>
          <button className="hover:bg-slate-200 rounded-full p-2 mt-[30px]">
            <FaPlus fontSize="30px" />
          </button>
        </div>
      )}
      <div className={`${isOpen ? "col-span-9" : "col-span-11"} border-l-2`}>
        <b>
          <h3 className="p-5 text-lg border-2">Tạo ghim</h3>
        </b>
        <div className="flex">
          <div className="flex justify-center items-center w-[400px] pt-[20px] pl-[50px]">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-[450px] border-2 border-gray-300 border-dashed rounded-[30px] cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-0 text-sm text-gray-500 dark:text-gray-400 text-right ">
                  Chọn một tệp hoặc kéo thả tệp vào đây
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center ">
                  Bạn nên sử dụng tập tin .jpg chất lượng cao có kích thước dưới
                  20MB hoặc tập tin .mp4 chất lượng cao có kích thước dưới
                  200MB.
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
          <form action="">
            <div className="grid gap-3 pt-[20px] pl-[50px]">
              <div className="w-[600px]">
                <label htmlFor="tieude" className="text-sm font-medium">
                  Tiêu đề
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border-2 hover:border-slate-300 "
                  placeholder="Thêm tiêu đề"
                  required
                />
              </div>
              <div className="w-[600px]">
                <label htmlFor="mota" className="text-sm font-medium">
                  Mô tả
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border-2 hover:border-slate-300 pb-[100px]"
                  placeholder="Thêm mô tả chi tiết"
                  required
                />
              </div>
              <div className="w-[600px] pt-[20px]">
                <label htmlFor="lienket" className="text-sm font-medium">
                  Liên kết
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border-2 hover:border-slate-300 "
                  placeholder="Thêm liên kết"
                  required
                />
              </div>
              <div className="w-[600px]">
                <label htmlFor="tieude" className="text-sm font-medium">
                  Bảng
                </label>
                <select
                  className="w-full p-3 rounded-xl border-2 hover:border-slate-300 "
                  required
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="w-[600px]">
                <label htmlFor="ganthe" className="text-sm font-medium">
                  Chủ đề được gắn thẻ (0)
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl border-2 hover:border-slate-300 "
                  placeholder="Tìm kiếm thẻ"
                  required
                />
                <p className="text-sm">
                  Đừng lo, mọi người sẽ không nhìn thấy thẻ của bạn
                </p>
              </div>
              <div>
                <p>Tùy chọn khác</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
