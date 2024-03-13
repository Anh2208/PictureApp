import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Message from "./message";
import Login from "./login";
import Register from "./register";

const UserLinks = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const { status } = useSession();

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
          <div onClick={() => signOut()}>logout</div>
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
