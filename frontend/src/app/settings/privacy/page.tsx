"use client";
import NavbarProfile from "@/app/components/navbarProfile";

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
      </div>
    </div>
  );
};
export default Privacy;
