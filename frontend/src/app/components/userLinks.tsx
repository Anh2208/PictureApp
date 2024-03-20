import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Message from "./message";
import Login from "./login";
import Register from "./register";
import Link from "next/link";

const UserLinks = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [action, setAction] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setShowLogin(false);
      setShowRegister(false);
    }
  }, [status]);

  const SwicthAction = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };

  const email = session?.user?.email || "underfine";
  const username = email.split("@")[0];

  return (
    <>
      {status === "authenticated" ? (
        <div className="items-center flex flex-row">
          <div className="relative block">
            <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex flex-row cursor-pointer">
              <Image
                src="/notification.svg"
                alt=""
                width={24}
                height={24}
                onClick={() => setNotification((prev) => !prev)}
              />
              {notification && (
                <div className="absolute right-0 top-10 mt-2 min-w-[360px] max-w-[375px] bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="px-4 py-2">
                    <h1 className="text-center font-semibold">Cập nhật</h1>
                  </div>
                  <div className="justify-center flex py-2 px-4">
                    <img src="/notification.png" alt="" />
                  </div>
                  <div className="py-2 px-4">
                    <h3 className="text-center font-semibold">
                      Chưa có gì để xem
                    </h3>
                  </div>
                  <div className="py-2 px-4">
                    <div className="text-center text-sm">
                      Hãy thử khám phá bảng tin nhà, tạo bảng hoặc theo dõi ai
                      đó với những ý tưởng truyền cảm hứng cho bạn.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="block relative">
            <div
              className="rounded-[50%] w-full cursor-pointer"
              onClick={() => setShowMessage((prev) => !prev)}
            >
              <div className="h-[48px] w-[48px] rounded-[50%] flex flex-row justify-center items-center">
                {showMessage == false ? (
                  <div className="relative">
                    <img
                      src="/icons8-message-100.png"
                      alt="message"
                      className="h-[24px] w-[24px] rounded-[50%] "
                    />
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src="/icons8-chat-bubble-100.png"
                      alt="message"
                      className="h-[24px] w-[24px] rounded-[50%] "
                    />
                    <Message />
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* user */}
          <div className="block">
            <a href="/" className="rounded-[50%] w-full cursor-pointer">
              <div className="h-[48px] w-[48px]">
                <div className="w-full h-full justify-center items-center flex flex-row">
                  <div className="h-[30px] w-[30px] border-2 rounded-[50%] border-black justify-center items-center flex flex-row">
                    <div className="w-[24px] h-[24px] relative cursor-pointer">
                      <div className="relative bg-customColor-color_background_box_secondary">
                        <div className="justify-center absolute flex flex-row">
                          {session?.user?.image ? (
                            <Link href={ `/${username}`}>
                              <img
                                src={session.user.image}
                                className="rounded-full"
                                alt="image"
                                width={24}
                                height={24}
                              />
                            </Link>
                          ) : (
                            <img
                              src="/icons8-user-64.png"
                              className="rounded-full"
                              alt="image"
                              width={24}
                              height={24}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="block">
            <button
              className="p-0 cursor-pointer"
              onClick={() => setAction((prev) => !prev)}
            >
              <div className=" block p-0">
                <div className="h-[24px] w-[24px] rounded-[50%] justify-center items-center flex">
                  <img src="/icons8-down-black-96.png" alt="" />
                </div>
              </div>
            </button>
          </div>
          {/* menu user */}
          {action && (
            <div className="block box-border">
              <span className="top-0 ">
                <div className="absolute top-[60px] right-0 rounded-[16px] shadow-md max-h-[90vh] overflow-auto">
                  <div className="max-w-[360px] relative rounded-[16px] border border-solid border-gray-300 bg-white flex">
                    <div className="m-2 justify-center flex flex-col">
                      <div className="block w-full">
                        <div className="m-2 flex flex-row">
                          <div className="text-left break-words font-normal text-[12px] iFc leading-4">
                            Đang đăng nhập
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer">
                          <div className="rounded-[8px] p-2 flex flex-col cursor-pointer text-white">
                            <div className="m-0 flex flex-row">
                              <div className="flex flex-1 flex-col mx-0">
                                <div className="items-center flex flex-row mx-0 my-[2px]">
                                  <a href="/">
                                    <div className="mr-4 rounded-[8px] items-center flex flex-row">
                                      <div className="h-[60px] w-[60px] mr-2 rounded-[50%]">
                                        <div className="w-full rounded-[50%] relative">
                                          <div className="relative rounded-[50%]">
                                            <div className="pb-full relative">
                                              {session?.user?.image ? (
                                                <img
                                                  src={session.user.image}
                                                  className="absolute w-full"
                                                  alt="image"
                                                  width={24}
                                                  height={24}
                                                />
                                              ) : (
                                                <img
                                                  src="/icons8-user-64.png"
                                                  className="absolute w-full"
                                                  alt="image"
                                                  width={24}
                                                  height={24}
                                                />
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="max-w-[176px] block box-border">
                                        {session.user?.name && (
                                          <div className="text-left font-semibold break-words text-[16px] iFc text-black leading-[22px]">
                                            {session.user.name}
                                          </div>
                                        )}
                                        <div className="mt-[2px] box-border block">
                                          <div className="text-left break-words font-normal text-[14px] text-customColor-color_text_subtle iFc leading-[18px]">
                                            Cá nhân
                                          </div>
                                        </div>
                                        <div className="mt-[2px] block">
                                          {session.user?.email && (
                                            <div className="text-left font-normal text-[14px] text-customColor-color_text_subtle iFc leading-[18px]">
                                              {session.user.email}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div className="justify-center items-center flex flex-row cursor-pointer">
                                <img
                                  src="/icons8-tick-60.png"
                                  className="h-[12px] w-[12px]"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 w-full block">
                        <div className="p-2 flex flex-row">
                          <div className="text-left break-words font-normal text-[12px] iFc leading-4">
                            Tài khoản của bạn
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full">
                          <div className="rounded-[8px] box-border p-2 flex flex-col">
                            <div className="flex flex-row m-0">
                              <div className="flex flex-1 flex-col mx-0">
                                <div className="my-[2px] mx-0">
                                  <div className="m-0 flex flex-row items-center">
                                    <span className="text-left break-words font-semibold text-[16px] iFc leading-[22px]">
                                      Thêm tài khoản
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer">
                          <div className="rounded-[8px] box-border p-2 flex flex-col">
                            <div className="flex flex-row m-0">
                              <div className="flex flex-1 flex-col mx-0">
                                <div className="items-center flex flex-row m-0">
                                  <span className="text-left break-words font-semibold iFc text-[16px] leading-[22px]">
                                    Chuyển đổi thành tài khoản doanh nghiệp
                                  </span>
                                </div>
                              </div>
                              <div className="justify-center items-center box-border flex flex-row">
                                <div className="w-[12px] leading-[22px]"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 w-full">
                        <div className="p-2 flex flex-row box-border">
                          <div className="text-left break-words font-normal text-[12px] iFc leading-4">
                            Tùy chọn khác
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                      Cổng thông tin báo cáo vi phạm
                                    </span>
                                  </div>
                                </div>
                                <div className="items-center justify-center box-border flex flex-row">
                                  <div className="w-[12px]"></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="p-[8px] flex flex-col">
                            <a href="/settings">
                              <div className="flex flex-row m-0">
                                <div className="items-center flex flex-row m-0">
                                  <span className="iFc leading-[22px] text-left break-words overflow-hidden font-semibold text-[16px]">
                                    Cài đặt
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                      Điều chỉnh bảng tin nhà của bạn
                                    </span>
                                  </div>
                                </div>
                                <div className="items-center justify-center box-border flex flex-row">
                                  <div className="w-[12px]"></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                      Cài đặt ứng dụng Chrome
                                    </span>
                                  </div>
                                </div>
                                <div className="items-center justify-center box-border flex flex-row">
                                  <div className="w-[12px]"></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                      Quyền riêng tư của bạn
                                    </span>
                                  </div>
                                </div>
                                <div className="items-center justify-center box-border flex flex-row">
                                  <div className="w-[12px]"></div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <div className="flex flex-1 flex-col">
                                      <div className="flex flex-row items-center m-0">
                                        <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                          Nhận trợ giúp
                                        </span>
                                      </div>
                                    </div>
                                    <div className="items-center justify-center box-border flex flex-row">
                                      <div className="w-[12px]"></div>
                                    </div>
                                    <div className="ml-2 justify-center items-center flex flex-row">
                                      <img
                                        src="/icons8-open-96.png"
                                        alt=""
                                        className="h-[12px] w-[12px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="inline box-border relative">
                                  {/* <div className="w-[12px]"></div> */}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <div className="flex flex-1 flex-col">
                                      <div className="flex flex-row items-center m-0">
                                        <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                          Xem điều khoản dịch vụ
                                        </span>
                                      </div>
                                    </div>
                                    <div className="items-center justify-center box-border flex flex-row">
                                      <div className="w-[12px]"></div>
                                    </div>
                                    <div className="ml-2 justify-center items-center flex flex-row">
                                      <img
                                        src="/icons8-open-96.png"
                                        alt=""
                                        className="h-[12px] w-[12px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="inline box-border relative">
                                  {/* <div className="w-[12px]"></div> */}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <div className="flex flex-1 flex-col">
                                      <div className="flex flex-row items-center m-0">
                                        <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                          Xem chính sách quyền riêng tư
                                        </span>
                                      </div>
                                    </div>
                                    <div className="items-center justify-center box-border flex flex-row">
                                      <div className="w-[12px]"></div>
                                    </div>
                                    <div className="ml-2 justify-center items-center flex flex-row">
                                      <img
                                        src="/icons8-open-96.png"
                                        alt=""
                                        className="h-[12px] w-[12px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="inline box-border relative">
                                  {/* <div className="w-[12px]"></div> */}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="rounded-[8px] w-full cursor-pointer block">
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <a href="/">
                              <div className="flex flex-row m-0">
                                <div className="flex flex-1 flex-col">
                                  <div className="items-center flex flex-row m-0">
                                    <div className="flex flex-1 flex-col">
                                      <div className="flex flex-row items-center m-0">
                                        <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                          Làm người thử nghiệm beta
                                        </span>
                                      </div>
                                    </div>
                                    <div className="items-center justify-center box-border flex flex-row">
                                      <div className="w-[12px]"></div>
                                    </div>
                                    <div className="ml-2 justify-center items-center flex flex-row">
                                      <img
                                        src="/icons8-open-96.png"
                                        alt=""
                                        className="h-[12px] w-[12px]"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="inline box-border relative">
                                  {/* <div className="w-[12px]"></div> */}
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div
                          className="rounded-[8px] w-full cursor-pointer"
                          onClick={() => signOut()}
                        >
                          <div className="rounded-[8px] p-2 flex flex-col">
                            <div className="flex flex-row m-0">
                              <div className="flex flex-1 flex-col">
                                <div className="flex flex-row items-center m-0">
                                  <span className="text-left overflow-hidden font-semibold text-[16px] iFc leading-[22px]">
                                    Đăng xuất
                                  </span>
                                </div>
                              </div>
                              <div className="2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          )}
        </div>
      ) : (
        // not logged in yet
        <>
          <div className="mr-[8px]">
            <button
              className="min-w-[60px] cursor-pointer"
              onClick={() => setShowLogin(true)}
            >
              <div className="Il7 min-h-[40px] rounded-3xl px-[12px] py-[8px] w-full cursor-pointer hover:bg-red-700">
                <div className="text-center font-semibold text-[16px] text-white">
                  Đăng nhập
                </div>
              </div>
            </button>
          </div>
          <div className="justify-center text-center flex">
            <button
              className="min-w-[60px] cursor-pointer"
              onClick={() => setShowRegister(true)}
            >
              <div className="a_A min-w-[60px] rounded-3xl min-h-[40px] justify-center text-center flex px-[12px] py-[8px] cursor-pointer">
                <div className="text-center font-semibold text-[16px] text-black">
                  Đăng ký
                </div>
              </div>
            </button>
          </div>
        </>
      )}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          Register={() => SwicthAction()}
        />
      )}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          Login={() => SwicthAction()}
        />
      )}
    </>
  );
};

export default UserLinks;
