"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
const cloudinary = require("cloudinary");
const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/post`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
};

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [board, setBoard] = useState("");
  const [tag, setTag] = useState("");

  const [isOpen, setIsOpen] = useState(true);

  const [CommentOpen, setCommentOpen] = useState(true);
  const OnClickCommentOpen = () => {
    setCommentOpen(!CommentOpen);
  };

  const [SimilarOpen, setSimilarOpen] = useState(true);
  const OnClickSimilarOpen = () => {
    setSimilarOpen(!SimilarOpen);
  };

  const [MoreOption, setMoreOption] = useState(true);
  const OnClickMoreOption = () => {
    setMoreOption(!MoreOption);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const router = useRouter();

  const [file, setFile] = useState<File>();

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setFile(item);
  };

  useEffect(() => {
    if (session) {
      setLoading(false);
    }
  }, [session]);

  if (loading || !session) {
    return null;
  }

  const upload = async () => {
    const data = new FormData();
    data.append("file", file!);
    data.append("upload_preset", "PicbuApp");

    const res = await fetch("https://api.cloudinary.com/v1_1/jokeay/image", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      redirect: 'follow',
      body: data,
    });

    const resData = await res.json();

    return resData.url;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const url = await upload();
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: JSON.stringify({
          images: url,
          title: title,
          description: description,
          link: link,
          board: board,
          tagged_topic: tag,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-[80px]">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col m-0">
          <div className="w-[75%] z-30 justify-center self-center box-border fixed mt-[12px] flex flex-row"></div>
          <div className="w-full h-[calc(-80px + 100em)] flex flex-row m-0">
            <div className="top-[80px] border h-[1px] w-full bg-[#cdcdcd] right-0 fixed z-20"></div>
            <div
              className={`top-[80px] border-[#cdcdcd] border border-t-1 border-r-1 border-l-1 border-b-0 bg-[#fff] h-full ${
                isOpen && "w-[351px]"
              } z-20 left-0 fixed`}
            >
              {isOpen ? (
                <div className="h-full flex flex-col">
                  <div className="flex-grow-0 flex-initial box-border">
                    <div className="flex-grow-0 flex-initial box-border">
                      <div className="items-center box-border pl-[16px] pr-[16px] flex flex-col">
                        <div className="w-[100%] box-border pb-[16px] pt-[16px] block">
                          <div className="flex min-h-0 min-w-0 justify-between items-center flex-row m-0">
                            <div className="text-left break-words font-normal block iFc text-base">
                              <span className="text-left break-words font-semibold iFc text-[20px]">
                                Pin drafts
                              </span>
                            </div>
                            <div className="box-border block">
                              <button
                                onClick={toggleSidebar}
                                className="border-0 p-0"
                              >
                                <div className="border-0 block p-0 cursor-pointer">
                                  <div className="h-[48px] w-[48px] rounded-[50%] justify-center flex origin-[1px] cursor-pointer leading-3">
                                    <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex cursor-pointer hover:bg-[#fff8fa]">
                                      <svg
                                        className="h-[20px] w-[20px] "
                                        height="20"
                                        width="20"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        aria-label=""
                                        role="img"
                                      >
                                        <path d="M19.4848 20.5516L12.0949 13.0822C11.9283 12.9273 11.8096 12.7616 11.7387 12.5852C11.6679 12.4088 11.6324 12.2234 11.6324 12.0288C11.6324 11.8343 11.6679 11.6425 11.7387 11.4535C11.8096 11.2645 11.9283 11.0925 12.0949 10.9375L19.4848 3.4302C19.779 3.13128 20.1247 2.98813 20.5217 3.00077C20.9187 3.01341 21.2644 3.16919 21.5586 3.46812C21.8529 3.76704 22 4.11818 22 4.52153C22 4.92487 21.8529 5.27601 21.5586 5.57494L15.2057 12.0288L21.5586 18.4827C21.8529 18.7816 21.9965 19.1264 21.9895 19.5172C21.9824 19.9079 21.8388 20.2527 21.5586 20.5516C21.2503 20.8505 20.9012 21 20.5112 21C20.1212 21 19.779 20.8505 19.4848 20.5516ZM9.85231 20.5516L2.46246 13.0822C2.29585 12.9273 2.17712 12.7616 2.10626 12.5852C2.03542 12.4088 2 12.2234 2 12.0288C2 11.8343 2.03542 11.6425 2.10626 11.4535C2.17712 11.2645 2.29585 11.0925 2.46246 10.9375L9.85231 3.4302C10.1466 3.13128 10.4922 2.98813 10.8892 3.00077C11.2863 3.01341 11.6319 3.16919 11.9262 3.46812C12.2204 3.76704 12.3676 4.11818 12.3676 4.52153C12.3676 4.92487 12.2204 5.27601 11.9262 5.57494L5.55217 12.0288L11.9262 18.4827C12.2204 18.7816 12.364 19.1264 12.357 19.5172C12.35 19.9079 12.2064 20.2527 11.9262 20.5516C11.6178 20.8505 11.2687 21 10.8787 21C10.4887 21 10.1466 20.8505 9.85231 20.5516Z"></path>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="w-full">
                          <button
                            className="w-full border-0 min-w-[60px] box-border block p-0 rounded-[24px] cursor-pointer"
                            type="button"
                          >
                            <div className="border-0 min-w-[60px] justify-center flex box-border min-h-[40px] w-full pl-[12px] pr-[12px] pt-[8px] pb-[8px] cursor-pointer rounded-[24px] bg-[#e9e9e9]">
                              <div className="text-center font-semibold	text-base iFc">
                                Create new
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                      <div className="pb-[16px] pt-[16px]">
                        <hr className="border border-t-[#cdcdcd] m-0 " />
                      </div>
                    </div>
                  </div>
                  <div className="flex overflow-auto pb-[8px] pt-[8px] flex-col">
                    <div className="pl-[8px] pr-[8px] mb-[4px]">
                      <div className="w-auto">
                        <div
                          aria-disabled="false"
                          className="rounded-[8px] w-full cursor-pointer"
                          role="button"
                          tabIndex={0}
                        >
                          {file && (
                            <div className="border-black rounded-[8px] items-center relative p-[8px] bg-[#e2e2e2] flex flex-row cursor-pointer">
                              <div className="bg-[#e9e9e9] rounded-[12px] flex relative overflow-hidden cursor-pointer">
                                <div className="w-[72px] h-[72px] rounded-[12px] relative will-change-transform cursor-pointer">
                                  <div className="w-[72px] h-[72px] relative cursor-pointer">
                                    <div className="inline-block h-[72px] w-[72px] origin-center cursor-pointer">
                                      <div className="h-full left-0 right-0 w-full absolute overflow-hidden cursor-pointer">
                                        <div className="h-full relative bg-transparent">
                                          <img
                                            fetchPriority="auto"
                                            loading="lazy"
                                            className="object-cover bg-transparent absolute w-full h-full border-0 max-w-full align-middle"
                                            src={URL.createObjectURL(file)}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="inline-block origin-center cursor-pointer"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="pl-[8px] pr-[8px] cursor-pointer">
                                <div className="max-w-full overflow-hidden break-words font-semibold text-[14px]"></div>
                                <div className="text-left break-words text-[14px] text-[#767676] cursor-pointer">
                                  30 days
                                </div>
                              </div>
                              <div className="justify-center items-center flex flex-row cursor-pointer">
                                <div className="w-[32px] cursor-pointer"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col m-0">
                  <div className="p-[16px]">
                    <button
                      onClick={toggleSidebar}
                      aria-label="Expand drafts sidebar"
                      className="border-0 p-0 bg-transparent cursor-pointer"
                      type="button"
                      tabIndex={0}
                    >
                      <div className="border-0 p-0 cursor-pointer">
                        <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex bg-transparent ">
                          <svg
                            className="text-[#111] stroke-none align-middle"
                            height="20"
                            width="20"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            aria-label=""
                            role="img"
                          >
                            <path d="M4.51524 20.5516L11.9051 13.0822C12.0717 12.9273 12.1904 12.7616 12.2613 12.5852C12.3321 12.4088 12.3676 12.2234 12.3676 12.0288C12.3676 11.8343 12.3321 11.6425 12.2613 11.4535C12.1904 11.2645 12.0717 11.0925 11.9051 10.9375L4.51524 3.4302C4.22096 3.13128 3.87532 2.98813 3.47831 3.00077C3.08127 3.01341 2.73563 3.16919 2.44138 3.46812C2.14713 3.76704 2 4.11818 2 4.52153C2 4.92487 2.14713 5.27601 2.44138 5.57494L8.7943 12.0288L2.44138 18.4827C2.14713 18.7816 2.00351 19.1264 2.01052 19.5172C2.01757 19.9079 2.16118 20.2527 2.44138 20.5516C2.74969 20.8505 3.09884 21 3.48883 21C3.87883 21 4.22096 20.8505 4.51524 20.5516ZM14.1477 20.5516L21.5375 13.0822C21.7041 12.9273 21.8229 12.7616 21.8937 12.5852C21.9646 12.4088 22 12.2234 22 12.0288C22 11.8343 21.9646 11.6425 21.8937 11.4535C21.8229 11.2645 21.7041 11.0925 21.5375 10.9375L14.1477 3.4302C13.8534 3.13128 13.5078 2.98813 13.1108 3.00077C12.7137 3.01341 12.3681 3.16919 12.0738 3.46812C11.7796 3.76704 11.6324 4.11818 11.6324 4.52153C11.6324 4.92487 11.7796 5.27601 12.0738 5.57494L18.4478 12.0288L12.0738 18.4827C11.7796 18.7816 11.636 19.1264 11.643 19.5172C11.65 19.9079 11.7936 20.2527 12.0738 20.5516C12.3822 20.8505 12.7313 21 13.1213 21C13.5113 21 13.8534 20.8505 14.1477 20.5516Z"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="p-[16px]">
                    <button
                      aria-label="Expand drafts sidebar"
                      className="border-0 p-0 bg-transparent cursor-pointer"
                      type="button"
                      tabIndex={0}
                    >
                      <div className="border-0 p-0 cursor-pointer">
                        <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex bg-transparent ">
                          <svg
                            className="text-[#111] stroke-none align-middle"
                            height="20"
                            width="20"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            aria-label=""
                            role="img"
                          >
                            <path d="M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="ml-[351px] mr-0 overflow-x-auto min-h-0 min-w-0 flex flex-row ">
              <div className="w-[1504px] rounded-[32px] relative bg-[#fff] ">
                <div className="h-[700px] relative flex flex-col">
                  <div className="h-[80px]"></div>
                  <div className="top-[80px] h-[81px] w-full z-10 border border-[#cdcdcd] items-center right-0 fixed bg-[#fff] flex flex-row ">
                    <div className="w-[381px]"></div>
                    <div>
                      <h1 className="iFc text-left break-words font-semibold text-[20px] text-[#111] mb-0 mt-0 m-0 ">
                        Create Pin
                      </h1>
                    </div>
                    <div className="h-full w-[calc(50% - 46px)] ml-0 items-center left-0 top-0 absolute pl-[12px] pr-[12px] flex flex-row"></div>
                    {file && (
                      <div className="h-full mr-0 items-center right-0 top-0 absolute pl-[12px] pr-[12px] flex flex-row">
                        <div className="pl-[12px] pr-[12px]">
                          <div className="iFc text-left break-words font-normal text-[#767676]">
                            Changes stored!
                          </div>
                        </div>
                        <div className="relative">
                          <div className="">
                            <button
                              className="border-0 min-w-[60px] inline-block p-0 bg-transparent rounded-[24px] cursor-pointer leading-3"
                              type="submit"
                            >
                              <div className="border-0 min-w-[60px] justify-center items-center flex min-h-[48px] pl-[16px] pr-[16px] pt-[12px] pb-[12px] w-full cursor-pointer rounded-[24px] transition-transform bg-[#e60023]">
                                <div className="text-center font-semibold text-[16px] text-[#fff] cursor-pointer leading-3">
                                  Publish
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-t-0 h-full w-full flex min-h-0 min-w-0 flex-row">
                    <div className="mr-auto ml-auto">
                      <div className="justify-center flex-row flex">
                        <div className="m-[24px]">
                          <div
                            className={`${
                              file ? "h-auto" : "h-[574px]"
                            }  w-[375px] pb-[16px] flex items-center relative bg-[#fff] flex-row`}
                          >
                            <div className="h-full w-full justify-center items-center mb-[16px] mt-[16px] pl-0 pr-0 flex flex-col">
                              <div className="rounded-[32px] h-full w-full border-[2px] relative overflow-hidden bg-[#e9e9e9]">
                                <div className="h-full rounded-[32px] relative">
                                  {file ? (
                                    <img
                                      className="w-[375px] h-auto bg-no-repeat left-0 top-0 origin-center"
                                      src={URL.createObjectURL(file)}
                                      alt=""
                                    />
                                  ) : (
                                    <div className="h-full w-full m-0">
                                      <div className="h-full w-full m-0 justify-center items-center relative flex flex-col bg-[#e9e9e9]">
                                        <div className="pb-[8px] pt-[8px]">
                                          <svg
                                            className="text-[#111] fill-current stroke-0 align-middle h-[32px] w-[32px]"
                                            height="32"
                                            width="32"
                                            viewBox="0 0 24 24"
                                            aria-label="Add files"
                                            role="img"
                                          >
                                            <path d="M24 12a12 12 0 1 0-24 0 12 12 0 0 0 24 0m-10.77 3.75a1.25 1.25 0 0 1-2.5 0V11.8L9.7 12.83a1.25 1.25 0 0 1-1.77-1.77L12 7l4.07 4.06a1.25 1.25 0 0 1-1.77 1.77l-1.07-1.06z"></path>
                                          </svg>
                                        </div>
                                        <div className="max-w-[220px] pb-[8px] pt-[8px] ">
                                          <div className="text-center break-words font-normal iFc text-[16px] text-[#111]">
                                            Choose a file or drag and drop it
                                            here
                                          </div>
                                        </div>
                                        <div className="bottom-0 absolute pb-[32px] pt-[32px]">
                                          <div className="text-center break-words font-normal text-[14px] text-[#111]">
                                            We recommend using high quality .jpg
                                            files less than 20MB or .mp4 files
                                            less than 200MB.
                                          </div>
                                        </div>
                                      </div>
                                      <input
                                        onChange={handleChangeImg}
                                        className="cursor-pointer h-full opacity-0 absolute w-full left-0 top-0 "
                                        type="file"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                              <div className="w-full mt-[24px]">
                                <hr className="border border-t-[#cdcdcd] m-0 " />
                                <div className="mt-[24px]">
                                  <button
                                    className="border-0 min-w-[60px] p-0 w-full bg-transparent rounded-[24px] cursor-pointer"
                                    type="button"
                                  >
                                    <div className="border-0 min-w-[60px] hover:bg-gray-200 justify-center items-center flex min-h-[40px] pl-[12px] pr-[12px] pt-[8px] pb-[8px] w-full cursor-pointer bg-[#e9e9e9] rounded-[24px]">
                                      <div className="text-center font-semibold iFc text-[16px] text-[#111] cursor-pointer ">
                                        Save from URL
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="m-[24px]">
                          <div className="relative flex flex-row">
                            <div className="mt-[24px]">
                              <div className="w-[584px] relative m-[4px] flex flex-col">
                                <div>
                                  <div className="w-full mb-[24px]">
                                    <div className="max-w-full">
                                      <span>
                                        <label
                                          className="cursor-pointer"
                                          htmlFor=""
                                        >
                                          <div className="pb-[8px]">
                                            <div className="text-left break-words font-normal iFc text-[12px] text-[#111]">
                                              Title
                                            </div>
                                          </div>
                                        </label>
                                        <div className="relative">
                                          <input
                                            aria-invalid="false"
                                            className="rounded-[16px] p-[12px] text-[16px] border-[#cdcdcd] min-h-[48px] max-w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap iFc w-full text-[#111] bg-[#fff] border-[2px] appearance-none"
                                            type="text"
                                            placeholder="Add a title"
                                            value={title}
                                            onChange={(e) =>
                                              setTitle(e.target.value)
                                            }
                                          />
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                  <div className="mb-[16px]">
                                    <div className="min-h-0 min-w-0 flex flex-col m-[-4px]">
                                      <div className="m-[4px]">
                                        <div>
                                          <div className="text-left break-words font-normal iFc text-[12px] text-[#111]">
                                            Description
                                          </div>
                                        </div>
                                      </div>
                                      <div className="m-[4px]">
                                        <div
                                          aria-invalid="false"
                                          role="button"
                                          tabIndex={0}
                                          className="rounded-[0px] w-full cursor-pointer h-full"
                                        >
                                          <div className="border-[#cdcdcd] min-h-[104px] border-[2px] rounded-[16px] min-w-0 pb-[16px] pt-[16px] cursor-pointer">
                                            <div className="iFc min-h-[48px] w-full min-w-0 justify-between flex-row flex cursor-pointer">
                                              <div className="max-h-[146px] mr-[16px] ml-[16px] flex-1 min-h-0 min-w-0 overflow-auto flex-col flex iFc cursor-pointer">
                                                <div>
                                                  <div>
                                                    <div className="text-[16px] relative w-full h-full iFc">
                                                      <div className="left-0 text-left text-[#767676] font-normal absolute z-0 text-[16px]">
                                                        <div className="whitespace-pre-wrap text-left pointer-events-none break-words"></div>
                                                      </div>
                                                      <input
                                                        className="overflow-hidden block rounded-none w-[500px] border-none"
                                                        type="text"
                                                        value={description}
                                                        onChange={(e) =>
                                                          setDescription(
                                                            e.target.value
                                                          )
                                                        }
                                                      />
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="justify-end items-center flex flex-row iFc"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-[24px]">
                                    <div className="w-full items-start flex flex-col m-0">
                                      <div className="w-full mr-0">
                                        <div className="justify-between pb-[12px] pt-[12px] flex flex-col">
                                          <div className="pb-[8px] pt-[8px]">
                                            <label
                                              className="cursor-pointer"
                                              htmlFor=""
                                            >
                                              <div className="text-left break-words font-normal iFc text-[#111] cursor-pointer">
                                                Link
                                              </div>
                                            </label>
                                          </div>
                                          <span>
                                            <div className="relative">
                                              <input
                                                aria-invalid="false"
                                                placeholder="Add a link"
                                                type="url"
                                                className="rounded-[16px] py-[12px] px-[16px] text-[16px] min-h[48px] max-w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap iFc w-full text-[#111] bg-[#fff] border-[2px]"
                                                value={link}
                                                onChange={(e) =>
                                                  setLink(e.target.value)
                                                }
                                              />
                                            </div>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="w-full mt-0">
                                        <div className="mb-[24px]">
                                          <div className="mb-[8px]">
                                            <div className="text-left break-words font-normal iFc text-[12px] text-[#111]">
                                              Board
                                            </div>
                                          </div>
                                          <div className="w-full">
                                            <div className="rounded-[8px] relative w-full">
                                              <div className="w-full items-center text-[12px] flex flex-row m-0">
                                                <select
                                                  value={board}
                                                  onChange={(e) =>
                                                    setBoard(e.target.value)
                                                  }
                                                  aria-invalid="false"
                                                  className="items-center bg-[#fff] border-[2px] cursor-pointer flex grow h-[48px] justify-between min-w-0 outline-none relative rounded-[16px] py-0 px-[14px] pointer-events-auto iFc m-0 align-middle"
                                                >
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                </select>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mb-[24px]">
                                    <div className="h-full w-full relative bg-[#fff] flex flex-col">
                                      <div className="max-w-[100%]">
                                        <span>
                                          <label
                                            className="cursor-pointer"
                                            htmlFor=""
                                          >
                                            <div className="pb-[8px]">
                                              <div className="text-left break-words font-normal iFc text-[#111] text-[12px]">
                                                Tagged topics (0)
                                              </div>
                                            </div>
                                          </label>
                                          <div className="relative">
                                            <input
                                              aria-invalid="false"
                                              className="rounded-[16px] px-[16px] py-[12px] text-[16px] border-[#cdcdcd] min-h-[48px] max-w-[100%] overflow-hidden overflow-ellipsis whitespace-nowrap iFc w-full text-[#111] bg-[#fff] border-[2px] appearance-none align-middle m-0"
                                              id="storyboard-selector-interest-tags"
                                              placeholder="Search for a tag"
                                              type="text"
                                              value={tag}
                                              onChange={(e) =>
                                                setTag(e.target.value)
                                              }
                                            />
                                          </div>
                                          <div className="mt-[8px]">
                                            <div className="flex flex-row m-[-8px]">
                                              <div className="m-[8px] grow shrink min-h-0 min-w-0 ">
                                                <div className="text-left break-words font-normal iFc text-[12px] text-[#767676]">
                                                  Don't worry, people won't see
                                                  your tags
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                      <div className="max-w-[500px] grow shrink basis-auto min-h-0 min-w-0 overflow-auto mt-0"></div>
                                    </div>
                                  </div>
                                  <div className="mb-[16px]">
                                    <div
                                      onClick={OnClickMoreOption}
                                      aria-invalid="false"
                                      role="button"
                                      tabIndex={0}
                                      className="rounded-[0px] w-full cursor-pointer"
                                    >
                                      <div className="items-center flex flex-row mx-[-4px] my-0">
                                        <div className="mx-[4px] my-0">
                                          <div className="text-left break-words font-semibold iFc text-[16px] text-[#111]">
                                            More options
                                          </div>
                                        </div>
                                        <div className="mx-[4px] my-0">
                                          <svg
                                            className="text-[#111] stroke-none align-middle overflow-hidden"
                                            height="12"
                                            width="12"
                                            viewBox="0 0 24 24"
                                            aria-label="More options arrow icon"
                                            role="img"
                                          >
                                            {MoreOption ? (
                                              <path d="M20.16 6.65 12 14.71 3.84 6.65a2.27 2.27 0 0 0-3.18 0 2.2 2.2 0 0 0 0 3.15L12 21 23.34 9.8a2.2 2.2 0 0 0 0-3.15 2.26 2.26 0 0 0-3.18 0"></path>
                                            ) : (
                                              <path d="M.66 14.2a2.2 2.2 0 0 0 0 3.15c.88.87 2.3.87 3.18 0L12 9.29l8.16 8.06c.88.87 2.3.87 3.18 0a2.2 2.2 0 0 0 0-3.15L12 3z"></path>
                                            )}
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {!MoreOption && (
                                    <div>
                                      <div className="justify-start py-[8px] flex flex-row">
                                        <div
                                          className={`text-[#111] ${
                                            CommentOpen
                                              ? "bg-[#111] border-[#111]"
                                              : "bg-[#fff] border-[#767676]"
                                          }  relative rounded-[48px] border-[1px] shrink-0 h-[24px] w-[40px]`}
                                        >
                                          <input
                                            onClick={OnClickCommentOpen}
                                            className="border-0 absolute w-full p-0 m-0 cursor-pointer h-full opacity-0 z-20 leading-normal size-full appearance-auto align-middle"
                                            id="CommentSwitch"
                                            type="checkbox"
                                            checked
                                          />
                                          <div
                                            className={`rounded-[50%] border-[#767676] absolute ${
                                              CommentOpen ? "right-0" : "left-0"
                                            } bg-[#fff] border-[1px] h-[24px] m-[-1px] w-[24px]`}
                                          ></div>
                                        </div>
                                        <div className="px-[8px]">
                                          <label
                                            htmlFor=""
                                            className="cursor-pointer"
                                          >
                                            <div className="text-left break-words font-normal iFc text-[16px] text-[#111]">
                                              Allow people to comment
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="justify-start py-[8px] flex flex-row">
                                        <div
                                          className={`text-[#111] ${
                                            SimilarOpen
                                              ? "bg-[#111] border-[#111]"
                                              : "bg-[#fff] border-[#767676]"
                                          }  relative rounded-[48px] border-[1px] shrink-0 h-[24px] w-[40px]`}
                                        >
                                          <input
                                            onClick={OnClickSimilarOpen}
                                            className="border-0 absolute w-full p-0 m-0 cursor-pointer h-full opacity-0 z-20 leading-normal size-full appearance-auto align-middle"
                                            id="CommentSwitch"
                                            type="checkbox"
                                            checked
                                          />
                                          <div
                                            className={`rounded-[50%] border-[#767676] absolute ${
                                              SimilarOpen ? "right-0" : "left-0"
                                            } bg-[#fff] border-[1px] h-[24px] m-[-1px] w-[24px]`}
                                          ></div>
                                        </div>
                                        <div className="px-[8px]">
                                          <label
                                            htmlFor=""
                                            className="cursor-pointer"
                                          >
                                            <div className="flex flex-col m-0 text-left break-words font-normal iFc text-[16px] text-[#111]">
                                              <div className="mb-[8px]">
                                                <div className="text-left break-words font-normal iFc text-[16px] text-[#111]">
                                                  Show similar products
                                                </div>
                                              </div>
                                              <div className="mt-[4px] flex flex-col">
                                                <div className="mb-[4px]">
                                                  <div className="text-left break-words font-normal iFc text-[14px] text-[#111]">
                                                    People can shop products
                                                    similar to what's shown in
                                                    this Pin using visual search
                                                  </div>
                                                </div>
                                                <div className="text-left break-words font-normal iFc text-[14px] text-[#111]">
                                                  Shopping recommendations
                                                  aren't available for Idea ads
                                                  and Pins with tagged products
                                                  or paid partnership label
                                                </div>
                                              </div>
                                            </div>
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            {file ? (
                              ""
                            ) : (
                              <div className="z-20 mt-[24px] ml-0 mr-0 mb-0 left-0 bottom-0 right-0 top-0 absolute flex flex-row bg-white bg-opacity-80"></div>
                            )}
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
      </form>
    </div>
  );
};

export default CreatePage;
