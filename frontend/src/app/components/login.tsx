"use client";
import { useEffect, useRef, useState } from "react";

interface LoginProps {
  onClose: () => void;
  Register: () => void;
}

const Login = ({ onClose, Register }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef<HTMLDivElement>(null); // Sử dụng HTMLDivElement cho formRef

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        onClose(); // Đóng form nếu click ra ngoài form
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="left-0 right-0 bottom-0 top-0 bg-black bg-opacity-60 fixed z-50">
      <div className="overflow-y-scroll inset-0 flex fixed">
        <div className="h-full flex relative opacity-1 rounded-[6px] my-0 mx-auto">
          <div
            className="bg-white rounded-[32px] relative text-center m-auto w-[484px]"
            ref={formRef}
          >
            <div className="min-h-[400px] mt-[20px] mb-[24px] mx-[10px]">
              <div className="h-[40px] w-[40px] mx-4 mt-4 right-0 top-0 absolute block">
                <button className="p-0">
                  <div className="p-0 cursor-pointer" onClick={onClose}>
                    <img
                      src="/icons8-close-100.png"
                      alt="close"
                      className="h-[40px] w-[40px] rounded-[50%] justify-center items-center flex"
                    />
                  </div>
                </button>
              </div>
              <div className="mt-[8px] mb-[6px] mx-auto h-[45px] w-[45px] text-center">
                <img
                  src="/logo-picbu.png"
                  alt="logo"
                  className="h-[40px] w-[40px]"
                />
              </div>
              <div className="mt-0 mx-auto mb-[22px] text-center">
                <h1 className="text-black text-[32px] font-semibold tracking-tighter py-0 px-[16px] break-keep m-0 iFc">
                  Welcome to PicBu
                </h1>
              </div>
              <div className="my-0 mx-auto w-[268px] text-center">
                <form>
                  <div className="ml-2 mb-1">
                    <label
                      htmlFor="email"
                      className="block cursor-pointer text-center"
                    >
                      <div className="text-left break-words font-normal text-[14px] iFc">
                        Email
                      </div>
                    </label>
                  </div>
                  <div className="mb-[7px] text-center">
                    <fieldset className="m-0 p-0 relative">
                      <span>
                        <div className="relative text-center">
                          <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            spellCheck="false"
                            autoComplete="email"
                            aria-invalid="false"
                            className="rounded-[16px] py-3 px-4 text-[16px] border-2 border-solid border-customColor-color_border_container h-[48px] w-full iFc"
                          />
                        </div>
                      </span>
                    </fieldset>
                  </div>
                  <div className="left-[8px] mb-1 mt-0">
                    <label
                      htmlFor="password"
                      className="block cursor-pointer text-center"
                    >
                      <div className="text-left break-words font-normal iFc text-[14px]">
                        Mật khẩu
                      </div>
                    </label>
                  </div>
                  <div>
                    <fieldset className="relative">
                      <span>
                        <div className="relative text-center">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Mật khâủ"
                            autoComplete="new-password"
                            spellCheck="false"
                            className="h-[48px] w-full overflow-hidden text-ellipsis iFc border-2 border-solid border-customColor-color_border_container pr-8 rounded-[16px] py-3 px-4 text-[16px]"
                          />
                          <div className="right-0 bottom-0 top-0 absolute">
                            <div className="h-full mr-2 rounded-[50%] items-center flex flex-row">
                              <div
                                className="h-[20px] w-[20px] justify-center items-center flex cursor-pointer"
                                onClick={() => setShowPassword((prev) => !prev)}
                              >
                                {showPassword == false ? (
                                  <img
                                    src="/icons8-eye-60.png"
                                    alt="showPass"
                                  />
                                ) : (
                                  <img
                                    src="/icons8-hide-60.png"
                                    alt="showPass"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                    </fieldset>
                  </div>
                  <div className="float-left mt-2 mb-3">
                    <div className="text-left break-words font-semibold iFc text-[14px]">
                      <a href="/" className="block">
                        Quên mật khẩu?
                      </a>
                    </div>
                  </div>
                  <div className="mt-[16px]"></div>
                  <div className="text-center block">
                    <button className="h-[40px] inline-block rounded-[20px] py-0 px-[18px] text-[15px] font-bold cursor-pointer mt-[8px] align-middle text-center text-white Il7 w-full">
                      <div className="">Đăng nhập</div>
                    </button>
                  </div>
                </form>
                <p className="my-[8px] overflow-hidden text-center text-[14px] font-bold">
                  Hoặc
                </p>
                <div className="mt-[10px] text-center text-[12px]">
                  <div className=" relative text-center">
                    <button className="h-[40px] block rounded-[20px] pl-0 text-[15px] font-normal cursor-pointer mt-0 align-middle text-left w-full bg-customColor-rgb_24_119_242">
                      <div className="m-0 flex flex-row">
                        <div className="pt-[3px] pb-[3px] px-[3px] h-6 w-6 ml-1 rounded-[50%] bg-white">
                          <img src="/facebook.png" alt="facebook" />
                        </div>
                        <span className="text-white inline-block iFc text-[16px] font-bold leading-[15px] mr-6 ml-[15px] pt-1 text-center align-text-bottom whitespace-normal w-[88%]">
                          Tiếp tục với FaceBook
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="h-[10px]"></div>
                <div className="relative block">
                  <div className="h-[44px]">
                    <div className="h-full absolute">
                      <div className="relative">
                        <iframe
                          src=""
                          title="Đăng nhập bằng Google"
                          className="block relative top-0 left-0 h-[44px] w-[288px] my-[-2px] mx-[-10px] p-0"
                        >
                          Đăng nhập bằng Google
                        </iframe>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-[11px] font-normal text-center text-customColor-rgb_118_118_118 iFc ">
                    <span className="text-[11px] font-normal text-center text-customColor-rgb_118_118_118 iFc block leading-4">
                      <span>
                        Bằng cách tiếp tục, bạn đồng ý với &nbsp;
                        <div className=" font-bold inline-block">
                          <a href="/"> Điều khoản dịch vụ </a>
                        </div>
                        của Pinterest và xác nhận rằng bạn đã đọc
                        <div className=" font-bold inline-block">
                          <a href="/">Chính sách quyền riêng tư </a>
                        </div>
                        của chúng tôi
                        <div className=" font-bold inline-block">
                          <a href="/">Thông báo khi thu thập</a>
                        </div>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div className="text-center mt-3">
                <div className="mr-auto justify-center items-center w-full flex flex-row text-center">
                  <div className=" justify-center flex flex-row m-0 text-center leading-4">
                    <div className="text-left break-words font-normal iFc text-[12px]">
                      Chưa tham gia PicBu ?
                    </div>
                    <button
                      className="p-0 text-left text-[12px] block ml-[5px] font-bold cursor-pointer iFc"
                      onClick={Register}
                    >
                      Đăng ký
                    </button>
                  </div>
                </div>
                <div className="mr-auto justify-center items-center w-full mb-1 flex flex-row text-center">
                  <div className=" justify-center flex flex-row m-0 text-center leading-4">
                    <div className="text-left break-words font-normal iFc text-[12px]">
                      Bạn là doanh nghiệp ?
                    </div>
                    <button className="p-0 text-left text-[12px] block ml-[5px] cursor-pointer iFc">
                      Hãy bắt đầu tại đây
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
