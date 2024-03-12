"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { FaQuestion } from "react-icons/fa";

const Privacy = () => {
  return (
    <div className="w-full grid grid-cols-12 p-3 pt-[80px]">
      <NavbarProfile />
      <div className="col-span-9 w-[488px]">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Quyền riêng tư và dữ liệu
          </h1>
          <p className="iFc mt-1">
            Quản lý dữ liệu Pinterest chia sẻ với các nhà quảng cáo và sử dụng
            để cải thiện quảng cáo cùng đề xuất mà chúng tôi hiển thị cho bạn.
          </p>
          <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
            Tìm hiểu thêm
          </span>
        </div>
        <div className="mt-3">
          <div className="iFc text-[20px] font-medium">
            Cá nhân hóa quảng cáo
          </div>
          <div className="flex mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[70px] rounded-md transition-all before:absolute peer cursor-pointer md:accent-black p-3"
            />
            <span className="iFc text-[16px] ml-2">
              Sử dụng thông tin từ các trang web bạn truy cập: Cho phép
              Pinterest sử dụng dữ liệu từ các trang web bạn truy cập để cải
              thiện quảng cáo trên Pinterest.
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </span>
          </div>
          <div className="flex mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[70px] rounded-md transition-all before:absolute peer cursor-pointer md:accent-black p-3"
            />
            <span className="iFc text-[16px] ml-2">
              Sử dụng thông tin đối tác: Cho phép Pinterest sử dụng thông tin từ
              các đối tác của chúng tôi để cải thiện quảng cáo bạn thấy trên
              Pinterest.
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </span>
          </div>
          <div className="flex mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[80px] rounded-md transition-all before:absolute peer cursor-pointer md:accent-black p-3"
            />
            <span className="iFc text-[16px] ml-2">
              Quảng cáo về Pinterest: Cho phép Pinterest sử dụng hoạt động của
              bạn để cải thiện quảng cáo về Pinterest mà bạn nhìn thấy trên các
              trang web hoặc ứng dụng khác.
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </span>
          </div>
          <div className="flex mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[60px] rounded-md cursor-pointer md:accent-black p-3"
            />
            <span className="iFc text-[16px] ml-2">
              Hoạt động để báo cáo quảng cáo: Cho phép Pinterest chia sẻ hoạt
              động của bạn để báo cáo hiệu suất quảng cáo.
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </span>
          </div>
          <div className="flex mt-4">
            <input
              type="checkbox"
              name=""
              id=""
              className="accent-black w-[80px] rounded-md cursor-pointer md:accent-black p-3"
            />
            <span className="iFc text-[16px] ml-2">
              Chia sẻ thông tin với đối tác: Cho phép Pinterest chia sẻ thông
              tin của bạn và hoạt động trên Pinterest với các đối tác để cải
              thiện quảng cáo của bên thứ ba mà bạn thấy trên Pinterest.
              <br />
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-12">
          <div className="col-span-8">
            <h2 className="text-[20px] iFc font-medium">
              Xóa dữ liệu và tài khoản của bạn
            </h2>
            <h2 className="iFc">Xóa dữ liệu và tài khoản của bạn</h2>
          </div>
          <div className="col-span-4 ml-12">
            <button className="iFc font-medium p-3 bg-[#e9e9e9] rounded-[25px] hover:bg-gray-200">
              Xóa dữ liệu
            </button>
          </div>
        </div>
        <div className="mt-6 mb-[200px] grid grid-cols-12">
          <div className="col-span-7">
            <h2 className="text-[20px] iFc font-medium">
              Yêu cầu dữ liệu của bạn
            </h2>
            <h2 className="iFc">
              Bạn có thể yêu cầu một bản sao thông tin mà Pinterest thu thập về
              bạn. Bạn sẽ nhận được email từ nhà cung cấp bên thứ ba của chúng
              tôi là SendSafely để hoàn thành yêu cầu.
              <span className="iFc font-medium underline-none decoration-2 hover:underline cursor-pointer">
                Tìm hiểu thêm
              </span>
            </h2>
          </div>
          <div className="col-span-5 ml-[60px] mt-12">
            <button className="iFc font-medium p-3 bg-[#e9e9e9] rounded-[25px] hover:bg-gray-200">
              Bắt đầu yêu cầu
            </button>
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
export default Privacy;
