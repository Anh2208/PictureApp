"use client";
import Link from "next/link";
import NavbarProfile from "../components/navbarProfile";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

interface User {
  image: string;
  name: string;
  firstname: string;
  lastname: string;
}

const getData = async (email: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${email}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const Settings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const userData = await getData(session.user.email);
          setUser(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);
  console.log("user", user);
  return (
    <div className="grid grid-cols-12 p-3 h-[1000px] pt-[80px] overflow-x-hidden">
      <NavbarProfile />

      <div className="col-span-9">
        <div className="mt-9">
          <h1 className="text-wrap font-medium text-3xl">Chỉnh sửa hồ sơ</h1>
        </div>
        <div className="w-[500px] mt-3 font-sans">
          Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào đây
          hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.
        </div>
        <form action="">
          <div className="pt-5">
            <span className="font-normal text-slate-500 text-sm">Ảnh</span>
            <div className="flex">
              <img
                src="https://i.pinimg.com/140x140_RS/9c/52/19/9c5219882ca65442bd90d3ced0adbfd7.jpg"
                alt=""
                className="rounded-full w-[80px]"
              />
              <span className="mt-6 pl-6 ">
                <p className="font-medium bg-slate-200 hover:bg-slate-300 p-[10px] rounded-[50px] cursor-pointer">
                  Thay đổi
                </p>
              </span>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex flex-row">
              <span className="text-[12px]">Tên</span>
              <input
                type="text"
                name="ten"
                defaultValue={user?.lastname}
                onChange={(e) => setLastName(e.target.value)}
                className="flex p-3 mt-5 rounded-[20px] ml-[-35px] mr-[35px] border border-slate-300 hover:border-slate-400"
              />
              <span className="text-[12px]">Họ</span>
              <input
                type="text"
                name="ho"
                defaultValue={user?.firstname}
                onChange={(e) => setFirstName(e.target.value)}
                className="flex p-3 mt-5 ml-[-35px] rounded-[20px] border border-slate-300 hover:border-slate-400"
              />
            </div>
            <div className="mt-5">
              <span className="text-[12px]">Giới thiệu</span>
              <input
                type="text"
                name="gioithieu"
                className="flex p-3 w-[500px] ml-[-17px] pb-[70px] rounded-[20px] border border-slate-300 hover:border-slate-400"
                placeholder="Kể câu chuyện của bạn"
              />
            </div>
            <div className="mt-5">
              <span className="text-[12px]">Trang web</span>
              <input
                type="text"
                name="trangweb"
                className="flex p-3 w-[500px] ml-[-17px] rounded-[20px] border border-slate-300 hover:border-slate-400"
                placeholder="Thêm liên kết để hướng lưu lượng vào website"
              />
            </div>
            <div className="mt-5">
              <span className="text-[12px]">Tên người dùng</span>
              <input
                type="text"
                name="tennguoidung"
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
export default Settings;
