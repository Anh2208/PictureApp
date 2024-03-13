"use client";
import NavbarProfile from "@/app/components/navbarProfile";

const BrandedContent = () => {
  return (
    <div className="w-full grid grid-cols-12 p-3 pt-[80px]">
      <NavbarProfile />
      <div className="col-span-9 w-[488px]">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-[28px] iFc">
            Nội dung mang thương hiệu
          </h1>
          <p className="iFc mt-2">
            Chương trình Nội dung mang thương hiệu của Pinterest là dịch vụ kết
            nối người tạo với các thương hiệu để có cơ hội nhận tài trợ.
          </p>
        </div>
        <div className="mt-5 mb-[200px] flex flex-col">
          <div className="">
            <h2 className="text-[20px] iFc font-medium">
              Đăng ký Nội dung mang thương hiệu
            </h2>
            <div className="flex flex-row justify-between">
              <h2 className="iFc mt-2 w-[63%] block">
                Chúng tôi sẽ cố gắng hết sức để kết nối bạn với các thương hiệu,
                nhưng việc đăng ký không đảm bảo là sẽ chốt được thỏa thuận với
                các thương hiệu.
              </h2>
              <button className="iFc font-medium border-0 min-w-[60px] box-border inline-block ">
                <div className="border-0 bg-[#e9e9e9] rounded-[25px] min-w-[90px] justify-center content-center items-center flex box-border min-h-[48px]">
                  <div className="text-center">Đăng ký</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandedContent;
