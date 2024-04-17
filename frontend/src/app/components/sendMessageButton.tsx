"use client";
import React from "react";

interface User {
  id: string;
  image: string;
  name: string;
  firstname: string;
  lastname: string;
}

interface ChangeState {
  userInfo: User[] | undefined;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (text: string) => Promise<void>;
  ChooseUser: string | undefined;
  setOpenSendMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const SendMessageButton = ({
  userInfo,
  input,
  setInput,
  sendMessage,
  ChooseUser,
  setOpenSendMessage,
}: ChangeState) => {
  const textIconHeart =
    "m22.18 13.58-9.13 9a1.5 1.5 0 0 1-2.1 0l-9.13-9a6.2 6.2 0 0 1 0-8.77 6.3 6.3 0 0 1 8.84 0L12 6.15l1.34-1.34a6.3 6.3 0 0 1 8.84 0 6.2 6.2 0 0 1 0 8.77";

  return (
    <>
      {userInfo?.map((d, i) => (
        <div key={i} className="bottom-0 absolute pb-[12px] pt-[12px] w-full">
          <div className="isolate">
            <div className="w-full">
              <div className="pl-[8px] justify-around items-end py-[8px] flex flex-row isolate">
                <button
                  aria-label="Thêm Ghim vào cuộc trò chuyện"
                  className="p-0"
                  tabIndex={0}
                  type="button"
                >
                  <div className="p-0 border-0">
                    <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex hover:bg-[#e9e9e9]">
                      <svg
                        aria-hidden="true"
                        aria-label=""
                        height="20"
                        role="img"
                        viewBox="0 0 24 24"
                        width="20"
                      >
                        <path d="M21.5 2.93v5.76A5 5 0 0 1 24 13h-4v7.96L19 23l-1-2.04V13h-4a5 5 0 0 1 2.5-4.3V2.92A2 2 0 0 1 15 1h8a2 2 0 0 1-1.5 1.93M7 9.5h3.25a1.25 1.25 0 0 1 0 2.5H7v3.25a1.25 1.25 0 0 1-2.5 0V12H1.25a1.25 1.25 0 0 1 0-2.5H4.5V6.25a1.25 1.25 0 0 1 2.5 0z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
                <div className="border shadow-md px-[4px] py-[15px] min-h-[48px] w-full ml-[8px] rounded-[24px] items-center flex flex-row">
                  <div className="w-full relative flex flex-row">
                    <div className="rounded-[32px] flex-1 min-h-0 min-w-0 flex flex-col">
                      <textarea
                        value={input !== textIconHeart ? input : ""}
                        onChange={(e) => setInput(e.target.value)}
                        className="pr-[8px] text-[#333] text-[15px] h-[26px] flex-auto border-none appearance-none overflow-hidden outline-none resize-none w-full align-top pl-[10px]"
                        placeholder="Gửi tin nhắn"
                        rows={1}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="ml-[6px] mr-[6px] isolate">
                  <button
                    onClick={() => sendMessage(input)}
                    className={`border-0 p-0 cursor-pointer rounded-full ${
                      input
                        ? "bg-red-500 fill-[#fff] hover:bg-red-600"
                        : "hover:bg-gray-200"
                    }`}
                    type="button"
                  >
                    <div
                      className={`${
                        !ChooseUser && !input && "cursor-default opacity-50"
                      } `}
                    >
                      <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                        <svg
                          aria-hidden="true"
                          aria-label=""
                          height="20"
                          role="img"
                          viewBox="0 0 24 24"
                          width="20"
                        >
                          {input ? (
                            <path d="m.46 2.43-.03.03c-.4.42-.58 1.06-.28 1.68L3 10.5 16 12 3 13.5.15 19.86c-.3.62-.13 1.26.27 1.67l.05.05c.4.38 1 .56 1.62.3l20.99-8.5q.28-.12.47-.3l.04-.04c.68-.71.51-2-.51-2.42L2.09 2.12Q1.79 2 1.49 2q-.61.01-1.03.43"></path>
                          ) : (
                            <path
                              onClick={() => sendMessage(textIconHeart)}
                              d="m22.18 13.58-9.13 9a1.5 1.5 0 0 1-2.1 0l-9.13-9a6.2 6.2 0 0 1 0-8.77 6.3 6.3 0 0 1 8.84 0L12 6.15l1.34-1.34a6.3 6.3 0 0 1 8.84 0 6.2 6.2 0 0 1 0 8.77"
                            ></path>
                          )}
                        </svg>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SendMessageButton;
