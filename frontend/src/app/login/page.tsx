"use client";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="left-0 right-0 bottom-0 top-0 bg-black bg-opacity-60 fixed">
      <div className=" overflow-y-scroll inset-0 flex fixed">
        <div className="h-full flex relative opacity-1 rounded-[6px] my-0 mx-auto">
          <div className="bg-white rounded-[32px] relative text-center m-auto w-[484px]">
            <div className="min-h-[400px] mt-[20px] mb-[24px] mx-[10px]">
              <div className="h-[40px] w-[40px] mx-4 mt-4 right-0 top-0 absolute block">
                <button className="p-0">
                  <div className="p-0 cursor-pointer">
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
                  Chào mừng bạn đến với Pinterest
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
                            className="rounded-[16px] py-3 px-4 text-[16px] border-2 border-solid border-customColor-color_border_container min-h-[48px] w-full iFc"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
