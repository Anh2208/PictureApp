"use client";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useState } from "react";

const PostId = () => {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      {/* <LoadingSpinner /> */}
      <div className="pt-[80px] box-border block">
        <div className="flex flex-col m-0">
          <div className="flex flex-auto justify-center flex-row">
            <div className=" justify-center mb-4 mt-2 flex flex-row">
              <div className="w-full bg-white flex flex-col cursor-zoom-out">
                <div className="flex flex-auto">
                  <div className="h-full mb-0">
                    <div className="h-full w-full max-w-[1016px] rounded-[32px] relative flex flex-row">
                      <div className="rounded-[32px] shadow-md relative bg-white flex flex-row cursor-auto">
                        <div className="flex flex-colm-0 cursor-auto">
                          <div className="w-[1016px] flex flex-auto flex-row m-0 cursor-auto">
                            <div className=" box-border w-[50%]">
                              <div className="relative justify-center box-border flex flex-row w-full h-full">
                                <div className="h-full w-full justify-center box-border cursor-auto rounded-[32px]">
                                  <div className=" bg-black box-border relative cursor-auto rounded-[32px]">
                                    <div className="relative ">
                                      <img
                                        src="https://i.pinimg.com/originals/61/cf/e0/61cfe0e77de02761cb62c1efc385e599.jpg"
                                        alt=""
                                        className="w-full h-auto rounded-l-[32px] relative"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="w-[50%] h-full box-border flex flex-col">
                              <div className="pl-8 flex flex-auto flex-col">
                                <div className="z-2 sticky cursor-auto">
                                  <div className="pt-8 pr-8 pl-0 min-h-[92px] box-border mt-0 bg-white">
                                    <div className="block box-border">
                                      <div className="flex flex-row m-0 justify-between">
                                        <div className="ml-[-14px] rounded-[8px] justify-between items-center bg-white flex flex-row">
                                          <div className="flex cursor-auto m-0 flex-row">
                                            <div className="items-center flex flex-row m-0 cursor-pointer">
                                              <button className="p-0">
                                                <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                                                  <svg
                                                    className="h-[20px] w-[20px]"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    aria-label=""
                                                    role="img"
                                                  >
                                                    <path d="M10 7.66 8.81 8.84a2 2 0 0 1-2.84-2.82l6-6.02L18 6.01a2 2 0 0 1-2.82 2.83l-1.2-1.19v6.18a2 2 0 0 1-4 0zM19 16a2 2 0 0 1 4 0v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 4 0v4h14z"></path>
                                                  </svg>
                                                </div>
                                              </button>
                                            </div>
                                            <div className="items-center flex flex-row m-0 cursor-pointer">
                                              <button className="p-0">
                                                <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                                                  <svg
                                                    className="h-[20px] w-[20px]"
                                                    viewBox="0 0 24 24"
                                                    aria-hidden="true"
                                                    aria-label=""
                                                    role="img"
                                                  >
                                                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path>
                                                  </svg>
                                                </div>
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="ml-3 box-border block cursor-auto">
                                          <div className="h-[60px] box-border flex flex-row">
                                            <div className="w-full items-center box-border flex flex-row">
                                              <div className="w-full flex flex-auto px-4">
                                                <div className=" rounded-[24px] w-full cursor-pointer">
                                                  <div className="h-[48px] justify-end items-center flex flex-row m-0">
                                                    <div className="w-auto box-border overflow-auto">
                                                      <div className="text-left break-words font-semibold iFc text-[16px] cursor-pointer">
                                                        Hồ sơ
                                                      </div>
                                                    </div>
                                                    <div className="mx-2 flex flex-auto">
                                                      <svg
                                                        className="h-[12px] w-[12px]"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        aria-label=""
                                                        role="img"
                                                      >
                                                        <path d="M20.16 6.65 12 14.71 3.84 6.65a2.27 2.27 0 0 0-3.18 0 2.2 2.2 0 0 0 0 3.15L12 21 23.34 9.8a2.2 2.2 0 0 0 0-3.15 2.26 2.26 0 0 0-3.18 0"></path>
                                                      </svg>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="ml-auto flex flex-auto self-center cursor-pointer">
                                                <button className="min-w-[60px] box-border inline-block p-0 rounded-[24px]">
                                                  <div className="min-w-[60px] justify-center items-center flex box-border px-4 py-3 w-full cursor-pointer bg-customColor-color_red_pushpin_450 rounded-[24px]">
                                                    <div className="text-center text-white font-semibold text-[16px] iFc cursor-pointer">
                                                      Lưu
                                                    </div>
                                                  </div>
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-auto box-border overflow-auto flex-col">
                                  <div className="flex flex-col m-0 cursor-pointer">
                                    <div className="pr-[32px]">
                                      <div className="flex flex-row h-[16px]"></div>
                                    </div>
                                    <div className="pr-[32px]">
                                      <div className=" bg-white">
                                        <div className="mt-4">
                                          <a href="/" className=" rounded-none">
                                            <h1 className="text-left break-words font-semibold iFc text-[28px]">
                                              Stream
                                            </h1>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="flex flex-col m-0">
                                      <div className="pr-[32px]">
                                        <div className="mb-8">
                                          <div className="min-h-[48px] mt-[16px]">
                                            <div className="items-center flex flex-row m-0">
                                              <div className="flex flex-auto">
                                                <div className="mx-1 items-center box-border flex flex-row">
                                                  <div className="flex flex-auto px-1">
                                                    <a
                                                      href="/"
                                                      className="w-full rounded-none cursor-pointer"
                                                    >
                                                      <div className=" rounded-[50%] relative overflow-hidden">
                                                        <div className="h-[48px] w-[48px] rounded-[50%] box-border relative">
                                                          <img
                                                            src="https://i.pinimg.com/75x75_RS/49/c1/61/49c161b967783e02b45999c1498de618.jpg"
                                                            className="h-[48px] w-[48px]"
                                                            alt=""
                                                          />
                                                        </div>
                                                      </div>
                                                    </a>
                                                  </div>
                                                  <div className="">
                                                    <div className="items-center px-1 flex flex-row">
                                                      <a
                                                        href="/"
                                                        className=" rounded-none"
                                                      >
                                                        <div className="max-w-[270px">
                                                          <div className="text-left break-words font-semibold iFc text-[14px]">
                                                            GW Bird71
                                                          </div>
                                                        </div>
                                                      </a>
                                                    </div>
                                                    <div className="px-1 flex flex-row cursor-pointer">
                                                      <div className="text-left break-words font-normal iFc text-[14px]">
                                                        20,6k người theo dõi
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="flex">
                                                <div className="flex flex-row relative">
                                                  <button className="min-w-[60px] p-0 w-full rounded-[24px]">
                                                    <div className="min-w-[60px] justify-center items-center flex min-h-[48px] px-4 py-3 w-full cursor-pointer bg-customColor-color_background_box_secondary rounded-[24px]">
                                                      <div className="text-black text-center font-semibold iFc text-[16px]">
                                                        Theo dõi
                                                      </div>
                                                    </div>
                                                  </button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="pr-[32px] cursor-pointer">
                                        <div className="my-[10px]">
                                          <div className="flex flex-col my-3">
                                            <div className="w-full cursor-pointer">
                                              <div className="flex flex-row justify-between items-center">
                                                <h2 className="text-left break-words font-semibold iFc text-[16px]">
                                                  Nhận xét
                                                </h2>
                                                <div className="items-center flex flex-row cursor-pointer">
                                                  <div className="w-[48px] ml-0 justify-center items-center flex flex-row">
                                                    {showMessage ? (
                                                      <svg
                                                        className="h-[12px] w-[12px]"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        aria-label=""
                                                        role="img"
                                                      >
                                                        <path d="M20.16 6.65 12 14.71 3.84 6.65a2.27 2.27 0 0 0-3.18 0 2.2 2.2 0 0 0 0 3.15L12 21 23.34 9.8a2.2 2.2 0 0 0 0-3.15 2.26 2.26 0 0 0-3.18 0"></path>
                                                      </svg>
                                                    ) : (
                                                      <svg
                                                        className="h-[12px] w-[12px]"
                                                        viewBox="0 0 24 24"
                                                        aria-hidden="true"
                                                        aria-label=""
                                                        role="img"
                                                      >
                                                        <path d="M.66 14.2a2.2 2.2 0 0 0 0 3.15c.88.87 2.3.87 3.18 0L12 9.29l8.16 8.06c.88.87 2.3.87 3.18 0a2.2 2.2 0 0 0 0-3.15L12 3z"></path>
                                                      </svg>
                                                    )}
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="my-3">
                                          <div className="w-full flex flex-col mx-0 cursor-pointer">
                                            <div className="my-[10px] mx-0">
                                              <div className="flex flex-row m-0">
                                                <div className="mr-2 box-border">
                                                  <a href="/">
                                                    <div className="relative h-[32px] w-[32px] rounded-[50%]">
                                                      <img
                                                        src="https://i.pinimg.com/75x75_RS/e6/19/cd/e619cdbcb84f93bf02fcbf2ad05f8c85.jpg"
                                                        className="w-full rounded-[50%]"
                                                        alt=""
                                                      />
                                                    </div>
                                                  </a>
                                                </div>
                                                <div className="flex flex-auto flex-col">
                                                  <div className="justify-between flex flex-row m-0">
                                                    <div className="m-0">
                                                      <div className="flex flex-col m-0">
                                                        <span className=" break-words cursor-pointer">
                                                          <div className="mr-[12px] relative">
                                                            <span className="text-left break-words font-normal iFc text-[16px]">
                                                              <span className="text-left break-words font-normal iFc text-[16px]">
                                                                <a
                                                                  href="/"
                                                                  className=" font-semibold iFc inline-block text-[16px] break-words"
                                                                >
                                                                  Kashir Munir
                                                                </a>
                                                              </span>
                                                              <span className="text-left break-words font-normal iFc text-[16px]">
                                                                <span className=" font-normal iFc inline-block text-[16px] break-words">
                                                                  &#160; nice
                                                                </span>
                                                              </span>
                                                            </span>
                                                          </div>
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  {/* <div className="1"></div> */}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* comment */}
                              <div className="bottom-0 z-1 sticky">
                                <div className="mx-0">
                                  <div className="px-8 py-2 bg-white cursor-auto">
                                    <div className="flex flex-col m-0">
                                      <div className="h-[44px] justify-between items-center mt-1 mb-3 flex flex-row">
                                        <h3 className="text-left break-words font-semibold iFc text-[20px]">
                                          Bạn nghĩ gì?
                                        </h3>
                                        <div className="items-center flex flex-row">
                                          <div className="mx-[6px]">
                                            <div className="items-center box-border flex flex-row">
                                              <div className="flex flex-row mr-[2px]">
                                                <div className="bg-image-heart"></div>
                                              </div>
                                              <div className="text-left break-words font-semibold iFc text-[16px]">
                                                6
                                              </div>
                                            </div>
                                          </div>
                                          <div className="mx-[6px] my-0">
                                            <div className="rounded-[50%] w-full cursor-pointer">
                                              <div className=" rounded-[50%] bg-customColor-color_background_box_secondary">
                                                <div className="min-h-[48px] min-w-[48px] justify-center items-center flex flex-row m-0">
                                                  <div className="bg-image-heart-no-color"></div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      {/* user comment */}
                                      <div className="mb-3 mt-0">
                                        <div className="flex flex-row justify-center m-0">
                                          <div className="mr-2 flex items-end flex-row">
                                            <div className="h-[48px] w-[48px] rounded-[50%] relative">
                                              <div className=" rounded-[50%] relative">
                                                <img
                                                  src="https://i.pinimg.com/75x75_RS/e6/19/cd/e619cdbcb84f93bf02fcbf2ad05f8c85.jpg"
                                                  alt=""
                                                  className="rounded-[50%] w-full"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="rounded-[24px] bg-customColor-color_background_box_secondary flex flex-auto">
                                            <div className="rounded-none w-full cursor-pointer">
                                              <div className=" justify-center flex flex-row h-full">
                                                <div className="min-h-[48px] flex-auto justify-between flex flex-row">
                                                  <div className="py-[15px] cursor-pointer mx-4 flex-auto flex flex-col">
                                                    <div className="box-border">
                                                      {/* click */}
                                                      <div className="left-0 text-left text-customColor-9197 w-full z-0">
                                                        <div className="text-left iFc font-semibold">
                                                          Thêm nhận xét
                                                        </div>
                                                      </div>
                                                      {/* comment */}
                                                      {/* <div className="relative">
                                                        <div className=""></div>
                                                      </div> */}
                                                    </div>
                                                  </div>
                                                  {/* icon */}
                                                  <div className="py-[6px] pr-[6px] justify-center items-center flex flex-row cursor-pointer">
                                                    <div className="rounded-[50%] justify-center box-border flex flex-row">
                                                      <div className="text-[24px] h-[40px] w-[40px] justify-center items-center flex flex-row">
                                                        😃
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=""></div> */}
        </div>
      </div>
    </>
  );
};

export default PostId;
{
  /* <img
  src="https://th.bing.com/th/id/R.e1707c345d5ac10c80a674030e606643?rik=pOsTg5KBoLuNvw&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f08%2fimage-de-paysage.jpg&ehk=1O5SWKkGpZ8yU%2b%2fAnLXG1v8k6BKxgyiXgHbOWBW1ir0%3d&risl=1&pid=ImgRaw&r=0"
  alt=""
  className=" absolute w-full h-auto"
/>; */
}
