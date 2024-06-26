"use client";
import NavbarProfile from "../../components/navbarProfile";
import "react-datepicker/dist/react-datepicker.css";
import { FaQuestion } from "react-icons/fa";
import { useSession } from "next-auth/react";
import React, {
  ChangeEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import ChangePassword from "@/app/components/changePassword";
import CreatePassword from "@/app/components/createPassword";
import Select, { SingleValue } from "react-select";
import { toast, ToastContainer } from "react-toastify";

interface User {
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  gender: string;
  password: string;
  country: string;
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
const Account_Settings = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>();
  const [updatedBirthday, setUpdatedBirthday] = useState<Date | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [changePassword, setChangePassword] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [initialChanger, setInitialChanger] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const userData = await getData(session.user.email);
          setUser({
            ...userData,
            birthday: userData.birthday ? new Date(userData.birthday) : null,
          });
          setGender(userData?.gender);
          setSelectedCountry({
            value: "BI",
            label: userData?.country,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        // setSelectedCountry(selectedCountry);
      });
  }, [session]);

  useEffect(() => {
    if (user) {
      if (
        gender !== user?.gender ||
        (selectedCountry?.label !== user?.country &&
          selectedCountry?.label != undefined)
      ) {
        setInitialChanger(true);
      } else {
        setInitialChanger(false);
      }
    }
  }, [user, gender, selectedCountry]);

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    setUpdatedBirthday(selectedDate);
    setInitialChanger(true);
  };

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/api/user/${session?.user?.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: selectedCountry?.label,
            birthdate: updatedBirthday,
            gender: gender,
          }),
        }
      );
      console.log(response);
      if (response.ok) {
        toast.success("Xác thực dữ liệu thành công!!!");
        console.log("newuwer is", response);
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.log("Error updating user:", error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      {changePassword && user?.password != null ? (
        <ChangePassword onClose={() => setChangePassword(false)} />
      ) : changePassword && user?.password == null ? (
        <CreatePassword onClose={() => setChangePassword(false)} />
      ) : null}
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
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  className="flex p-[10px] mt-6 ml-[-82px] rounded-[17px] border-2 w-[490px] border-slate-300 hover:border-slate-400"
                />
              </div>
              <div className="mt-6 flex">
                <span className="text-[12px] iFc ">Mật khẩu</span>
                <input
                  type="password"
                  name="matkhau"
                  className="block p-3 w-[400px] mt-5 ml-[-50px] rounded-[17px] border-2 border-slate-300 hover:border-slate-400"
                />
                <span
                  className="p-3 pt-3 ml-3 w-[77px] bg-[#E9E9E9] iFc rounded-[25px] text-center font-medium justify-content-center cursor-pointer"
                  onClick={() => setChangePassword((prev) => !prev)}
                >
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
                    công cụ như quảng cáo và phân tích để phát triển doanh
                    nghiệp của bạn trên Pinterest.
                  </p>
                </div>
                <div className="col-span-2 iFc font-medium justify-content-center mt-[50px]">
                  <p className="bg-[#E9E9E9] p-[11px] rounded-[25px] text-center cursor-pointer hover:bg-gray-200">
                    Chuyển đổi tài khoản
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <span className="iFc font-medium text-xl">
                  Thông tin cá nhân
                </span>
                <div className="mt-6 flex flex-col">
                  <span className="text-[12px] iFc ">Ngày sinh</span>

                  <input
                    type="date"
                    name=""
                    defaultValue={
                      user?.birthdate
                        ? new Date(user.birthdate).toISOString().split("T")[0]
                        : ""
                    }
                    onChange={handleDateChange}
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
                          checked={gender == "nam"}
                          onChange={() => setGender("nam")}
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
                          checked={gender == "nu"}
                          onChange={() => setGender("nu")}
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
                          checked={gender == "khac"}
                          onChange={() => setGender("khac")}
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
                    options={countries}
                    value={selectedCountry}
                    instanceId={"react-select-3-live-region"}
                    onChange={(selectedOption) =>
                      setSelectedCountry(selectedOption)
                    }
                  />
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
              <button
                onClick={handlerSubmit}
                className={`${
                  initialChanger
                    ? "bg-customColor-color_red_pushpin_450 cursor-pointer text-white iFc"
                    : "bg-customColor-color_background_button_secondary_default cursor-not-allowed"
                } text-center p-4 text-slate-500 font-medium rounded-[25px] ml-[20px]`}
              >
                Lưu
              </button>
              <div className="w-14 h-14 ">
                <FaQuestion className="hover:bg-[#e9e9e9] shadow-lg cursor-pointer w-14 h-14 p-3 rounded-full absolute right-1 top-1/2 transform -translate-y-1/2 " />
              </div>
              <div className="w-14 h-14 ">
                <FaQuestion className="hover:bg-[#e9e9e9] shadow-lg cursor-pointer w-14 h-14 p-3 rounded-full absolute right-1 top-1/2 transform -translate-y-1/2 " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Account_Settings;
