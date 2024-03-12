"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { FaQuestion } from "react-icons/fa";

const Security = () => {
  return (
    <div className="w-full grid grid-cols-12 p-3 pt-[80px]">
      <NavbarProfile />
      <div className="col-span-9 w-[488px]">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">Bảo mật</h1>
          <p className="iFc mt-2">
            Bao gồm các bước bảo mật bổ sung như bật xác thực hai yếu tố và kiểm
            tra danh sách các thiết bị kết nối của bạn để giữ an toàn cho tài
            khoản, Ghim và bảng của bạn.
            <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
              Tìm hiểu thêm
            </span>
          </p>
        </div>
        <div className="mt-6">
          <h1 className="text-wrap font-medium text-[20px] iFc">
            Xác thực hai yếu tố
          </h1>
          <p className="iFc mt-1">
            Điều này làm cho tài khoản của bạn thêm an toàn. Cùng với mật khẩu,
            bạn sẽ cần nhập mã bí mật chúng tôi nhắn tin đến điện thoại của bạn
            mỗi lần bạn đăng nhập.
            <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
              Tìm hiểu thêm
            </span>
          </p>
        </div>
        <div className="flex mt-6 ">
          <input
            type="checkbox"
            defaultChecked
            className="w-[24px] h-[24px] border-2 accent-black cursor-pointer"
          />
          <p className="iFc pl-3">Cần mã khi đăng nhập</p>
        </div>
        <div className="mt-8">
          <h1 className="text-wrap font-medium text-[20px] iFc">
            Tùy chọn đăng nhập
          </h1>
          <p className="iFc mt-2">
            Sử dụng tài khoản mạng xã hội của bạn để đăng nhập vào Pinterest.
            <br />
            <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
              Tìm hiểu thêm
            </span>
          </p>
          <div className="flex mt-6 ">
            <input
              type="checkbox"
              defaultChecked
              className="w-[24px] h-[24px] border-2 accent-black cursor-pointer"
            />
            <p className="iFc pl-3">
              Sử dụng tài khoản Facebook của bạn để đăng nhập
            </p>
          </div>
          <div className="flex mt-6 ">
            <input
              type="checkbox"
              defaultChecked
              className="w-[24px] h-[24px] border-2 accent-black cursor-pointer"
            />
            <p className="iFc pl-3">
              Sử dụng tài khoản Google của bạn để đăng nhập
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-wrap font-medium text-[20px] iFc">
            Đăng nhập ứng dụng
          </h1>
          <p className="iFc mt-2">
            Theo dõi mọi nơi bạn đã đăng nhập bằng hồ sơ Pinterest của mình và
            xóa quyền truy cập khỏi các ứng dụng bạn không còn sử dụng với
            Pinterest.
            <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
              Tìm hiểu thêm
            </span>
          </p>
        </div>
        <div className="mt-9">
          <p className="iFc">Bạn chưa phê duyệt ứng dụng nào</p>
        </div>
        <div className="mt-7 mb-[200px] grid grid-cols-9">
          <div className="col-span-5">
            <h2 className="text-[20px] iFc font-medium">
              Các thiết bị kết nối
            </h2>
            <h2 className="iFc mt-5">
              Đây là danh sách thiết bị đã đăng nhập vào tài khoản của bạn. Hãy
              thu hồi quyền truy cập của bất kỳ thiết bị nào bạn không nhận ra.
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </h2>
          </div>
          <div className="col-span-4 ml-12 mt-[70px]">
            <button className="iFc font-medium p-3 bg-[#e9e9e9] rounded-[25px] hover:bg-gray-200">
              Hiển thị các phiên
            </button>
          </div>
        </div>
      </div>
      <div className="w-full fixed  bottom-0 p-3 left-0 right-0">
        <div className="justify-center items-center content-center">
          <div className="flex justify-center">
            <div className="w-14 h-14">
              <FaQuestion className="hover:bg-[#e9e9e9] shadow-lg cursor-pointer w-14 h-14 p-3 rounded-full absolute right-1 top-1/2 transform -translate-y-1/2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Security;
