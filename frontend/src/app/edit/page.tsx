"use client";
import NavbarProfile from "../components/navbarProfile";

const Edit = () => {
  return (
    <div className="container grid grid-cols-12 p-3 h-[1000px] pt-[80px]">
      <NavbarProfile />

      <div className="col-span-9">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Điều chỉnh bảng tin nhà của bạn
          </h1>
          <div className="w-[500px] mt-2 font-sans">
            Khiến Pinterest trở nên cá nhân hóa cho bạn. Chỉnh sửa chi tiết mà
            Pinterest sử dụng để đề xuất ý tưởng cho bạn. Các chi tiết này sẽ
            không hiển thị công khai.
          </div>
        </div>
        <div className="mt-7">
          <ul className="ml-3 flex">
            <li className="iFc font-medium cursor-pointer p-2 hover:bg-[#e9e9e9] rounded-[15px] ">
              Hoạt động
            </li>
            <li className="iFc font-medium cursor-pointer p-2 ">Sở thích</li>
            <li className="iFc font-medium cursor-pointer p-2 ">Bảng</li>
            <li className="iFc font-medium cursor-pointer p-2 ">
              Đang theo dõi
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Edit;
