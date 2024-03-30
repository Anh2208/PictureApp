"use client";
import { useSession } from "next-auth/react";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface ChangeState {
  onClose: () => void;
}

interface User {
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  gender: string;
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

const CreatePassword = ({ onClose }: ChangeState) => {
  const [changePasswordOld, setChangePasswordOld] = useState(true);
  const [changePasswordNew, setChangePasswordNew] = useState(true);
  const [changePasswordNewConfirm, setChangePasswordNewConfirm] =
    useState(true);
  const [passwordNew, setPasswordNew] = useState("");
  const [passwordNewConfirm, setPasswordNewConfirm] = useState("");
  const [initialInputNew, setInitialInputNew] = useState(false);
  const [initialInputNewConfirm, setInitialInputNewConfirm] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [hasPassword, setHasPassword] = useState(false);
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const userData = await getData(session.user.email);
          setUser({
            ...userData,
            birthday: userData.birthday ? new Date(userData.birthday) : null,
          });
          console.log(userData.password);
          if (userData.password == null) {
            setHasPassword(true);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);

  const handlePasswordNew = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordNew(e.target.value);
      if (initialInputNew == false) {
        setInitialInputNew(true);
      }
    },
    [passwordNew]
  );
  const handlePasswordNewConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordNewConfirm(e.target.value);
      if (initialInputNew == true && initialInputNewConfirm == false) {
        setInitialInputNewConfirm(true);
      }
      if (passwordNew != null) {
        if (passwordNew == e.target.value) {
          setMatchPassword(true);
        } else {
          setMatchPassword(false);
        }
      }
    },
    [passwordNew, passwordNewConfirm]
  );
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
            password: passwordNew,
          }),
        }
      );
      if (response.ok) {
        toast.success("Xác thực dữ liệu thành công!!!", {
          onClose: onClose, // Gọi onClose() sau khi toast đã đóng
        });
      } else {
        const errorData = await response.json();
        toast.error("Tạo mật khẩu không thành công, ", errorData.message);
      }
    } catch (error) {
      console.log("error create password");
    }
  };
  console.log("user iddid", user);
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
      <div
        className="justify-center items-center flex w-screen h-screen fixed bg-black bg-opacity-80 z-50"
        onClick={onClose}
      >
        <div
          className="mx-4 w-[540px] rounded-[16px] flex relative bg-white"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="w-full flex flex-1 flex-col relative">
            <div className="relative">
              <div className="p-6">
                <h1 className="text-center break-words font-semibold text-[28px] iFc">
                  Cài đặt mật khẩu của bạn
                </h1>
              </div>
            </div>
            <div className="relative">
              <div className="px-5 mb-5">
                {/* changePasswordNew */}
                <div className="mx-4">
                  <div className="p-4">
                    <div className="mr-3 ml-2 mb-2 w-[calc(4/12*100%)]">
                      <label htmlFor="changePasswordNew">
                        <div className="text-left break-words font-normal text-[12px] cursor-pointer">
                          Mật Khẩu mới
                        </div>
                      </label>
                    </div>
                    <div className="">
                      <span>
                        <div className=" relative block box-border">
                          <div className=" relative">
                            <input
                              type={changePasswordNew ? "password" : "text"}
                              id="changePasswordNew"
                              name="new"
                              spellCheck="false"
                              onChange={handlePasswordNew}
                              className="rounded-[16px] py-3 px-4 text-[16px] border border-gray-400 w-full iFc"
                            />
                          </div>
                          <div className="right-0 bottom-0 absolute top-0">
                            <div className="h-full mr-2 rounded-[50%] items-center flex flex-row">
                              <div className=" box-border inline-block">
                                <div className="block box-border">
                                  <div
                                    className=" rounded-[50%] w-full cursor-pointer"
                                    onClick={() =>
                                      setChangePasswordNew((prev) => !prev)
                                    }
                                  >
                                    <div className="h-[20px] w-[20px] rounded-[50%] justify-center items-center flex">
                                      {changePasswordNewConfirm ? (
                                        <img
                                          src="/icons8-eye-60.png"
                                          alt="image"
                                          className="block cursor-pointer h-[12px] w-[12px]"
                                        />
                                      ) : (
                                        <img
                                          src="icons8-hide-60.png"
                                          alt="image"
                                          className="block cursor-pointer h-[12px] w-[12px]"
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* state input */}
                        {passwordNew == "" && initialInputNew ? (
                          <div className="mt-2 box-border">
                            <div className="text-red-600 break-words font-normal iFc text-[12px]">
                              <span className="text-left text-red-600 break-words font-normal iFc text-[12px]">
                                <div className="items-center flex flex-row">
                                  <div className="m-1">
                                    <svg
                                      className="h-[20px] w-[20px] fill-red-500"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      aria-label=""
                                      role="img"
                                    >
                                      <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z"></path>
                                    </svg>
                                  </div>
                                  <div className="m-1">Bắt buộc</div>
                                </div>
                              </span>
                            </div>
                          </div>
                        ) : passwordNew.length < 6 && passwordNew.length > 0 ? (
                          <div className="mt-2 box-border">
                            <div className="text-red-600 break-words font-normal iFc text-[12px]">
                              <span className="text-left text-red-600 break-words font-normal iFc text-[12px]">
                                <div className="items-center flex flex-row">
                                  <div className="m-1">
                                    <svg
                                      className="h-[20px] w-[20px] fill-red-500"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      aria-label=""
                                      role="img"
                                    >
                                      <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z"></path>
                                    </svg>
                                  </div>
                                  <div className="m-1">Quá ngắn</div>
                                </div>
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
                {/* changePasswordNewConfirm */}
                <div className="mx-4">
                  <div className="p-4">
                    <div className="mr-3 ml-2 mb-2 w-[calc(4/12*100%)]">
                      <label htmlFor="changePasswordNewConfirm">
                        <div className="text-left break-words font-normal text-[12px] cursor-pointer">
                          Nhập lại mật khẩu
                        </div>
                      </label>
                    </div>
                    <div className="">
                      <span>
                        <div className=" relative block box-border">
                          <div className=" relative">
                            <input
                              type={
                                changePasswordNewConfirm ? "password" : "text"
                              }
                              id="changePasswordNewConfirm"
                              name="new"
                              spellCheck="false"
                              onChange={handlePasswordNewConfirm}
                              className="rounded-[16px] py-3 px-4 text-[16px] border border-gray-400 w-full iFc"
                            />
                          </div>
                          <div className="right-0 bottom-0 absolute top-0">
                            <div className="h-full mr-2 rounded-[50%] items-center flex flex-row">
                              <div className=" box-border inline-block">
                                <div className="block box-border">
                                  <div
                                    className=" rounded-[50%] w-full cursor-pointer"
                                    onClick={() =>
                                      setChangePasswordNewConfirm(
                                        (prev) => !prev
                                      )
                                    }
                                  >
                                    <div className="h-[20px] w-[20px] rounded-[50%] justify-center items-center flex">
                                      {changePasswordNewConfirm ? (
                                        <img
                                          src="/icons8-eye-60.png"
                                          alt="image"
                                          className="block cursor-pointer h-[12px] w-[12px]"
                                        />
                                      ) : (
                                        <img
                                          src="icons8-hide-60.png"
                                          alt="image"
                                          className="block cursor-pointer h-[12px] w-[12px]"
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* state input */}
                        {passwordNewConfirm == "" &&
                        initialInputNew &&
                        initialInputNewConfirm ? (
                          <div className="mt-2 box-border">
                            <div className="text-red-600 break-words font-normal iFc text-[12px]">
                              <span className="text-left text-red-600 break-words font-normal iFc text-[12px]">
                                <div className="items-center flex flex-row">
                                  <div className="m-1">
                                    <svg
                                      className="h-[20px] w-[20px] fill-red-500"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      aria-label=""
                                      role="img"
                                    >
                                      <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z"></path>
                                    </svg>
                                  </div>
                                  <div className="m-1">Bắt buộc</div>
                                </div>
                              </span>
                            </div>
                          </div>
                        ) : matchPassword == false &&
                          initialInputNew &&
                          initialInputNewConfirm ? (
                          <div className="mt-2 box-border">
                            <div className="text-red-600 break-words font-normal iFc text-[12px]">
                              <span className="text-left text-red-600 break-words font-normal iFc text-[12px]">
                                <div className="items-center flex flex-row">
                                  <div className="m-1">
                                    <svg
                                      className="h-[20px] w-[20px] fill-red-500"
                                      viewBox="0 0 24 24"
                                      aria-hidden="true"
                                      aria-label=""
                                      role="img"
                                    >
                                      <path d="M23.6 18.5 14.63 2.53a3 3 0 0 0-5.24 0L.4 18.5A3.02 3.02 0 0 0 3 23h18a3 3 0 0 0 2.6-4.5m-7.54-1.06a1.5 1.5 0 0 1 0 2.12 1.5 1.5 0 0 1-2.12 0L12 17.62l-1.95 1.94a1.5 1.5 0 0 1-2.12 0 1.5 1.5 0 0 1 0-2.12l1.94-1.94-1.94-1.94a1.5 1.5 0 0 1 0-2.12 1.5 1.5 0 0 1 2.12 0L12 13.38l1.94-1.94a1.5 1.5 0 0 1 2.12 0 1.5 1.5 0 0 1 0 2.12l-1.94 1.94z"></path>
                                    </svg>
                                  </div>
                                  <div className="m-1">
                                    Mật khẩu không trùng khớp
                                  </div>
                                </div>
                              </span>
                            </div>
                          </div>
                        ) : null}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className=" box-border p-6">
                <div className="mx-1 justify-end items-center flex flex-row">
                  <div className="px-1 box-border block">
                    <button className="min-w-[60px] box-border inline-block p-0 rounded-[24px]">
                      <div
                        className="min-w-[60px] justify-center items-center flex box-border px-4 py-3 w-full cursor-pointer rounded-[24px] bg-customColor-color_background_button_secondary_default"
                        onClick={onClose}
                      >
                        <div className="text-black text-center font-semibold iFc text-[16px]">
                          Hủy
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="px-1 box-border block">
                    {matchPassword ? (
                      <button
                        className="min-w-[60px] box-border inline-block p-0 rounded-[24px] cursor-pointer"
                        onClick={handlerSubmit}
                      >
                        <div className="min-w-[60px] justify-center items-center flex box-border px-4 py-3 w-full cursor-pointer rounded-[24px] bg-customColor-color_red_pushpin_450">
                          <div className="text-white text-center font-semibold iFc text-[16px]">
                            Lưu
                          </div>
                        </div>
                      </button>
                    ) : (
                      <button className="min-w-[60px] box-border inline-block p-0 rounded-[24px]">
                        <div className="min-w-[60px] justify-center items-center flex box-border px-4 py-3 w-full cursor-pointer rounded-[24px] bg-customColor-color_background_button_secondary_default">
                          <div className="text-black text-center font-semibold iFc text-[16px]">
                            Lưu
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
