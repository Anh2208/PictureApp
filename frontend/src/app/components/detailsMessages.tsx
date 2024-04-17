"use client";

import { useSession } from "next-auth/react";
import SendMessageButton from "./sendMessageButton";
import React, { SetStateAction, useEffect, useRef, useState } from "react";
import Image from "next/image";
import LoadingSpinner from "../../../public/loading.svg";
interface User {
  id: string;
  image: string;
  name: string;
  firstname: string;
  lastname: string;
  username: string;
}

interface Message {
  id: string;
  createdAt: Date;
  content: string;
  senderId: string;
  receiverId: string;
}

interface ChangeState {
  onClose: () => void;
  ChooseUserName: string | undefined;
  userInfo: User[] | undefined;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (text: string) => Promise<void>;
  ChooseUser: string | undefined;
  setOpenSendMessage: React.Dispatch<React.SetStateAction<boolean>>;
  messagesSender: Message[] | null | undefined;
  setMessagesSender: React.Dispatch<
    SetStateAction<Message[] | null | undefined>
  >;
  selecteUser: User | undefined;
  lastMessage: Message[] | undefined;
}

const getMessage = async (myId: string, receiverId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/chat?myId=${myId}&receiverId=${receiverId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const DetailsMessages = ({
  onClose,
  ChooseUserName,
  userInfo,
  input,
  setInput,
  sendMessage,
  ChooseUser,
  setOpenSendMessage,
  messagesSender,
  setMessagesSender,
  selecteUser,
  lastMessage,
}: ChangeState) => {
  const [isLoading, setIsLoading] = useState(false);
  const textIconHeart =
    "m22.18 13.58-9.13 9a1.5 1.5 0 0 1-2.1 0l-9.13-9a6.2 6.2 0 0 1 0-8.77 6.3 6.3 0 0 1 8.84 0L12 6.15l1.34-1.34a6.3 6.3 0 0 1 8.84 0 6.2 6.2 0 0 1 0 8.77";

  function HeartIcon(props: any) {
    return (
      <svg
        aria-label="trái tim"
        className={props.className}
        height={props.height}
        role="img"
        viewBox="0 0 24 24"
        width={props.width}
      >
        <path d="m22.18 13.58-9.13 9a1.5 1.5 0 0 1-2.1 0l-9.13-9a6.2 6.2 0 0 1 0-8.77 6.3 6.3 0 0 1 8.84 0L12 6.15l1.34-1.34a6.3 6.3 0 0 1 8.84 0 6.2 6.2 0 0 1 0 8.77"></path>
      </svg>
    );
  }

  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const { data: session } = useSession();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selecteUser && session?.user.id) {
          const messageSender = await getMessage(
            session?.user.id,
            selecteUser?.id
          );
          setIsLoading(true);
          setMessagesSender(messageSender);
          scrollToBottom();
        }
      } catch (err: any) {
        console.log(err.message);
      }
    };
    const pollNewMessages = setInterval(fetchData, 3000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(pollNewMessages);
  }, [selecteUser, session]);

  return (
    <>
      <div className="filter-none z-10 relative">
        <div className="h-auto w-full rounded-[16px] items-center p-[8px] bg-[#fff] flex flex-row">
          <button
            aria-label="Back to conversations list"
            className="border-0 p-0"
            tabIndex={0}
            type="button"
            onClick={() => onClose()}
          >
            <div className="cursor-pointer hover:bg-gray-200 rounded-full">
              <div className="h-[48px] w-[48px] justify-center items-center flex ">
                <svg
                  aria-hidden="true"
                  aria-label=""
                  height="20"
                  role="img"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M15.78 24a2.2 2.2 0 0 1-1.58-.66L3 12 14.2.66a2.2 2.2 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L9.29 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66"></path>
                </svg>
              </div>
            </div>
          </button>
          <div className="flex-auto min-h-0 min-w-0 justify-center flex flex-row m-0">
            <div className="max-w-full justify-center flex flex-row m-0">
              <div>
                <div className="text-[#111] overflow-hidden break-words font-semibold text-[16px] iFc">
                  <a className="decoration-0 outline-none" href="#" rel="">
                    {ChooseUserName ? ChooseUserName : selecteUser?.username}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              aria-label="Report conversation"
              className="border-0 p-0"
              tabIndex={0}
              type="button"
            >
              <div className="border-0 p-0 cursor-pointer">
                <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                  <svg
                    aria-hidden="true"
                    aria-label=""
                    height="20"
                    role="img"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m18 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="overscroll-none h-[500px] w-full relative p-[8px]">
        <div className="h-full justify-end flex flex-col">
          <div className="overscroll-none overflow-auto flex flex-col">
            <div>
              <div className="h-full justify-end p-[8px] mb-0 flex flex-col">
                <div className="justify-center p-[8px] flex flex-row">
                  <div className="items-center flex flex-col m-0">
                    <div className="h-[144px] w-full mb-[48px]"></div>
                    <div className="iFc text-[#767676] break-words font-normal text-[12px]">
                      Beginning of your conversation
                    </div>
                  </div>
                  <div></div>
                </div>
                {!isLoading ? (
                  <Image
                    priority
                    src={LoadingSpinner}
                    alt="Loading"
                    width={72}
                    height={72}
                    className="items-center justify-center"
                  />
                ) : (
                  messagesSender?.map((messages, index) => (
                    <div key={messages.id} className="flex flex-row isolate">
                      <div className="w-[10%] justify-end flex flex-col m-0">
                        {selecteUser?.id === messages?.senderId &&
                          messagesSender[index - 1]?.senderId !=
                            selecteUser?.id && (
                            <div>
                              {selecteUser && selecteUser?.image === null ? (
                                <img
                                  src="/icons8-user-64.png"
                                  className="rounded-full"
                                  alt="image"
                                />
                              ) : (
                                <img
                                  className="rounded-full"
                                  src={selecteUser?.image}
                                  alt="image"
                                />
                              )}
                            </div>
                          )}
                      </div>
                      <div className="w-[90%]">
                        <div className="pl-[8px] pr-0 w-full relative">
                          <div>
                            {messages?.receiverId === selecteUser?.id ? (
                              <div className="items-end mt-[8px] flex flex-col">
                                {messagesSender[index - 1]?.senderId !==
                                  messages?.senderId && (
                                  <div className="justify-end flex flex-row">
                                    <div className="ml-[16px] mr-0">
                                      <div className="text-left text-[#767676] break-words font-normal iFc text-[12px]">
                                        You
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div className="max-w-full items-start relative mb-0 flex flex-col">
                                  <div className="max-w-full mb-0">
                                    <div
                                      className={`max-w-full border-[1px] rounded-[24px] ${
                                        messages?.content !== textIconHeart
                                          ? "border-[#cdcdcd] p-[14px] "
                                          : "border-none"
                                      } bg-[#fff]`}
                                    >
                                      <span>
                                        <div className="iFc text-left text-[#111] break-words font-normal text-[16px]">
                                          {messages?.content ===
                                          textIconHeart ? (
                                            <HeartIcon
                                              className="fill-[#c00]"
                                              height={48}
                                              width={48}
                                            />
                                          ) : (
                                            messages?.content
                                          )}
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div
                                className={`items-start mt-[8px] flex flex-col`}
                              >
                                {messagesSender[index - 1]?.senderId !==
                                  messages?.senderId && (
                                  <div className="justify-end flex flex-row">
                                    <div className="ml-[16px] mr-0">
                                      <div className="text-left text-[#767676] break-words font-normal iFc text-[12px]">
                                        {selecteUser?.name}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                <div className="max-w-full items-start relative mb-0 flex flex-col">
                                  <div className="max-w-full mb-0">
                                    <div
                                      className={`max-w-full rounded-[24px] ${
                                        messages?.content !== textIconHeart
                                          ? "border-[#cdcdcd] p-[14px]"
                                          : "border-none bg-[#fff]"
                                      } bg-[#e9e9e9]`}
                                    >
                                      <span>
                                        <div className="iFc text-left text-[#111] break-words font-normal text-[16px]">
                                          {messages?.content ===
                                          textIconHeart ? (
                                            <HeartIcon
                                              className="fill-[#c00]"
                                              height={48}
                                              width={48}
                                            />
                                          ) : (
                                            messages?.content
                                          )}
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bottom-0 absolute">
        <SendMessageButton
          userInfo={userInfo}
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
          ChooseUser={ChooseUser}
          setOpenSendMessage={setOpenSendMessage}
        />
      </div>
    </>
  );
};

export default DetailsMessages;
