"use client";
import NavbarProfile from "@/app/components/navbarProfile";
import { FaQuestion } from "react-icons/fa";
import { useSession } from "next-auth/react";
import {
  useState,
  useEffect,
  useCallback,
  MouseEventHandler,
  use,
} from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AvatarChange from "@/app/components/AvatarChange";

interface User {
  image: string;
  name: string;
  firstname: string;
  lastname: string;
  username: string;
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

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [changImage, setChangeImage] = useState(false);
  const { data: session } = useSession();
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [hasChanges, setHasChanges] = useState(false);
  const [initialUser, setInitialUser] = useState<User | null>(null);
  console.log("sesssi ", session);
  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const userData = await getData(session.user.email);
          setUser(userData);
          setUserName(userData.username);
          setFirstName(userData.firstname);
          setLastName(userData.lastname);
          setInitialUser(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);

  const handleFirstNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setFirstName(newValue);
      setHasChanges(newValue !== initialUser?.firstname);
      if (newValue === "" && initialUser?.firstname === null)
        setHasChanges(false);
    },
    [initialUser?.firstname]
  );

  const handleLastNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLastName(newValue);
      setHasChanges(newValue !== initialUser?.lastname);
      if (newValue === "" && initialUser?.lastname === null)
        setHasChanges(false);
    },
    [initialUser?.lastname]
  );

  const handleUserNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setUserName(newValue);
      setHasChanges(newValue !== initialUser?.username);
      if (newValue === "" && initialUser?.username === null)
        setHasChanges(false);
    },
    [initialUser?.username]
  );

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();

    if (!hasChanges) {
      // Không có thay đổi, không cần cập nhật
      return;
    }
    console.log("1", firstName);
    console.log("2", lastName);
    console.log("3", userName);
    try {
      const response = await fetch(
        `http://localhost:3000/api/user/${session?.user?.email}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: firstName,
            lastname: lastName,
            username: userName,
          }),
        }
      );
      if (response.ok) {
        console.log("newuwer is", response);
        toast.success("Xác thực dữ liệu thành công!!!");
        // Cập nhật thành công
        setInitialUser({
          firstname: firstName,
          lastname: lastName,
          username: userName,
          image: user?.image || "",
          name: "",
        }); // Cập nhật giá trị ban đầu mới
        setHasChanges(false);
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating user:", error);
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
      {changImage == true && (
        <AvatarChange onClose={() => setChangeImage(false)} />
      )}
      <div className="container grid grid-cols-12 p-3 h-[1000px] pt-[80px]">
        <NavbarProfile />
        <div className="col-span-9">
          <div className="mt-9">
            <h1 className="text-wrap font-medium text-[28px] iFc">
              Chỉnh sửa hồ sơ
            </h1>
          </div>
          <div className="w-[500px] mt-3 font-sans">
            Hãy giữ riêng tư thông tin cá nhân của bạn. Thông tin bạn thêm vào
            đây hiển thị cho bất kỳ ai có thể xem hồ sơ của bạn.
          </div>
          <form>
            <div className="pt-5">
              <span className="font-normal text-slate-500 text-sm">Ảnh</span>
              <div className="flex">
                <img
                  src={user?.image}
                  alt=""
                  className="rounded-full w-[80px] h-[80px] object-cover"
                />
                <span className="mt-6 pl-6">
                  <p
                    className="font-medium bg-slate-200 hover:bg-slate-300 p-[10px] rounded-[50px] cursor-pointer"
                    onClick={() => setChangeImage((prev) => !prev)}
                  >
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
                  onChange={handleLastNameChange}
                  className="flex p-3 mt-5 rounded-[20px] ml-[-35px] mr-[35px] border border-slate-300 hover:border-slate-400"
                />
                <span className="text-[12px]">Họ</span>
                <input
                  type="text"
                  name="ho"
                  defaultValue={user?.firstname}
                  onChange={handleFirstNameChange}
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
                  defaultValue={user?.username}
                  onChange={handleUserNameChange}
                  className="flex p-3 w-[500px] ml-[-17px] rounded-[20px] border border-slate-300 hover:border-slate-400"
                  placeholder="Hãy chọn thật khéo để người khác có thể tìm thấy bạn"
                />
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
                  hasChanges
                    ? "bg-customColor-color_red_pushpin_450 cursor-pointer text-white iFc"
                    : "bg-customColor-color_background_button_secondary_default cursor-not-allowed"
                } text-center p-4 text-slate-500 font-medium rounded-[25px] ml-[20px]`}
              >
                Lưu
              </button>
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
export default EditProfile;
