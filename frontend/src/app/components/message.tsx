"use client";

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import DetailsMessages from "./detailsMessages";
// import { socket } from "../../socket";
import io from "socket.io-client";
const socket = io();
interface Users {
  id: string;
  image: string;
  name: string;
  firstname: string;
  lastname: string;
  username: string;
}

interface User {
  id: string;
  image: string;
  name: string;
  firstname: string;
  lastname: string;
}

interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
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

const getUsers = async (): Promise<Users[]> => {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const getMessages = async () => {
  const res = await fetch("http://localhost:3000/api/chat/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

interface ChangeState {
  onClose: () => void;
}

const Message = ({ onClose }: ChangeState) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [openMessage, setOpenMessage] = useState(false);
  const [ChooseUser, setChooseUser] = useState<string | undefined>();
  const [ChooseUserName, setChooseUserName] = useState<string | undefined>();
  const [selecteUser, setSelecteUser] = useState<User>();
  const [messages, setMessages] = useState<string[]>([]);
  const [openSendMessage, setOpenSendMessage] = useState(false);
  const selectedUser = ChooseUser;
  const receiverId = selecteUser?.id;
  const [messagesSender, setMessagesSender] = useState<Message[] | null>();
  const { data: session, status } = useSession();

  const loggedInUser = session?.user;

  // fetch data
  const [users, setUsers] = useState<Users[] | null>();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const usersData = await getUsers();
          const userData = await getData(session.user.email);
          const messageSender = await getMessages();
          setMessagesSender(messageSender);
          setUsers(usersData);
          setUser(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [session, messagesSender]);

  const userInfo = users?.filter(
    (user) => user.username !== loggedInUser?.username
  );

  // socket

  const [input, setInput] = useState("");

  useEffect(() => {
    socket.emit("add_user", user?.id, user);
  }, [user]);

  useEffect(() => {
    // Lắng nghe tin nhắn từ server
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.off("message");
    };
  }, [socket]);

  // console.log(messagesSender);

  const sendMessage = async () => {
    if (input.trim() !== "") {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: input,
          senderId: user?.id,
          receiverId: receiverId,
        }),
      });
      if (res.ok) {
        const new_messages = await res.json();

        if (Array.isArray(messagesSender)) {
          setMessagesSender([...messagesSender, new_messages]);
        }
        messagesEndRef.current?.scrollIntoView();
        socket.emit("sendMessage", input);
        setInput("");
        setOpenSendMessage(true);
      } else {
        const errorMessage = await res.text();
        console.error("Failed to send message via API:", errorMessage);
      }
    }
  };

  // *********************

  const handleOpenMessage = () => {
    setOpenMessage(true);
    messagesEndRef.current?.scrollIntoView();
  };

  const handleCloseMessage = () => {
    setOpenMessage(false);
  };

  const handleClickSelectedUser = (
    user: User,
    username: string,
    name: string
  ) => {
    if (selectedUser !== undefined) {
      setChooseUser(undefined);
    } else {
      setSelecteUser(user);
      setChooseUser(username);
      setChooseUserName(name);
    }
  };

  const handleOnClickSelectedUserToMessages = (
    user: User,
    username: string,
    name: string
  ) => {
    setOpenSendMessage(true);
    messagesEndRef.current?.scrollIntoView();
    if (selectedUser !== undefined) {
      setChooseUser(undefined);
    } else {
      setSelecteUser(user);
      setChooseUser(username);
      setChooseUserName(name);
    }
  };

  const handleBack = () => {
    setOpenSendMessage(false);
    setChooseUser(undefined);
    setSelecteUser(undefined);
    setChooseUserName(undefined);
  };

  return (
    <>
      <div
        onClick={onClose}
        className="top-[30px] justify-center items-center flex w-screen h-screen fixed z-50 scroll-smooth"
      >
        <div
          onClick={(event) => event.stopPropagation()}
          className="h-[calc(-88px+100vh)] w-[360px] mr-2 rounded-[32px] overscroll-none relative bg-white shadow-custom"
        >
          {!openMessage && !openSendMessage ? (
            <div className="h-[calc(-88px+100vh)] mr-2 rounded-[32px] relative bg-white shadow-custom">
              <div className="h-full">
                <div className="block">
                  <div className="h-[64px] items-center p-2 flex flex-row">
                    <div className="flex-1 min-h-0 min-w-0">
                      <div className="text-center break-words text-[16px] font-semibold iFc">
                        Hộp thư đến
                      </div>
                    </div>
                    <div className="mr-4 right-0 absolute flex flex-row">
                      <button type="button" className="p-0 cursor-pointer">
                        <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                          <img
                            src="/icons8-three-dots-100.png"
                            alt="dots"
                            className="h-[20px] w-[20px]"
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-[calc(100%-64px)] overflow-hidden">
                  <div className="p-3">
                    <span>
                      <div className="items-center flex flex-row relative">
                        <input
                          onClick={handleOpenMessage}
                          type="search"
                          placeholder="Tìm kiếm theo tên hoặc email"
                          role="searchbox"
                          className="XgI Lfz LJB KI_ min-h-[48px] w-full px-[40px] py-[8px] iFc text-[16px] hover:border-slate-500"
                        />
                      </div>
                    </span>
                  </div>
                  <div className="block box-border">
                    <div
                      onClick={handleOpenMessage}
                      className="w-full cursor-pointer transition-transform duration-85 ease-out block"
                    >
                      <div className="hover:bg-gray-200 mx-2 rounded-[8px] items-center box-border p-2 mb-2 flex flex-row">
                        <div className="w-[48px] h-[48px] mr-2 rounded-[50%] justify-center items-center flex flex-row bg-customColor-color_red_pushpin_450">
                          <img
                            src="/writing-white.png"
                            alt="writing"
                            className="w-[20px] h-[20px]"
                          />
                        </div>
                        <div className="text-left overflow-hidden break-words font-semibold text-[16px] cursor-pointer iFc leading-[22px]">
                          Tin nhắn mới
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[16px]">
                    <div className="text-left break-words font-normal iFc text-[16px]">
                      Messages
                    </div>
                  </div>
                  <div className="isolate">
                    <div className="h-[calc(100% - 254px)] w-full overflow-hidden px-[8px]">
                      <div className="w-full">
                        {userInfo?.map((u, i) => (
                          <div
                            key={i}
                            onClick={() =>
                              handleOnClickSelectedUserToMessages(
                                u,
                                u.username,
                                u.name
                              )
                            }
                            className="h-[64px] justify-center items-center py-0 flex flex-row transition-all hover:bg-[#e9e9e9]"
                          >
                            <div className="w-full">
                              <div className="border-0 w-[calc(12 / var(12)* 100%)] cursor-pointer">
                                <div className="relative flex flex-row">
                                  <div className="isolate">
                                    <div className="items-center px-[8px] py-0 flex flex-row">
                                      <div className="h-[48px] w-[48px] items-center flex-row m-0 flex">
                                        <div className="pt-3 relative">
                                          <img
                                            className="max-w-full rounded-full w-[48px] h-[48px]"
                                            src={u.image}
                                            alt="image_user"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="max-w-[80%] ml-[16px] flex-auto min-h-0 min-w-0 flex flex-col">
                                    <div className="iFc text-left text-[16px] text-[#111] max-w-[100%] overflow-hidden break-words font-semibold">
                                      {u.name}
                                    </div>
                                    <div className="ml-0 mt-[4px]">
                                      <div className="text-left max-w-[100%] overflow-hidden break-words font-normal text-[12px]">
                                        {u?.username}
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className={`justify-end flex flex-row m-0 cursor-pointer`}
                                  >
                                    <button
                                      aria-label="selected checkmark"
                                      className="m-0 border-none p-0"
                                      tabIndex={0}
                                      type="button"
                                    >
                                      <div>
                                        <div className="h-[24px] w-[24px] rounded-[50%] justify-center items-center flex isolate hover:bg-gray-300">
                                          <svg
                                            aria-hidden="true"
                                            aria-label=""
                                            className="text-[#111] align-middle"
                                            height="12"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            width="12"
                                          >
                                            <path d="M9 22 .73 13.75a2.5 2.5 0 1 1 3.54-3.53L9 14.94l10.73-10.7a2.5 2.5 0 0 1 3.54 3.52z"></path>
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
                      </div>
                    </div>
                  </div>
                  <div className="w-full cursor-pointer block">
                    <div className="mx-2 rounded-[8px] p-2 mb-2">
                      <div className="relative box-border">
                        <div className="items-center flex flex-row m-0">
                          <div className="h-[48px] w-[48px] mr-2 rounded-[50%] justify-center items-center bg-customColor-color_background_box_secondary flex flex-row">
                            <img
                              src="/icons8-add-user-64.png"
                              alt="add"
                              className="h-[20px] w-[20px]"
                            />
                          </div>
                          <div className="block box-border">
                            <div className="text-left font-semibold overflow-hidden text-[16px] iFc leading-[22px]">
                              Mời bạn bè
                            </div>
                            <div className="text-left font-normal overflow-hidden break-words text-customColor-color_text_subtle text-[16px] iFc leading-[22px]">
                              Kết nối để bắt đầu trò chuyện
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : openSendMessage ? (
           <DetailsMessages />
          ) : (
            <div className="h-[calc(-88px+100vh)] mr-2 rounded-[32px] relative bg-white shadow-custom">
              <div className="h-full">
                <div className="block">
                  <div className="h-[64px] items-center p-2 flex flex-row">
                    <div className="flex-1 min-h-0 min-w-0">
                      <div className="text-left  break-words text-[20px] p-3 font-semibold iFc">
                        New Message
                      </div>
                    </div>
                    <div className="mr-4 right-0 absolute flex flex-row">
                      <div className="p-0 cursor-pointer">
                        <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                          <button
                            className="iFc text-[16px] hover:bg-slate-200 rounded-full p-2 font-medium"
                            onClick={handleCloseMessage}
                          >
                            cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[calc(100%-64px)] overflow-hidden mt-[-10px]">
                  <div className="p-3">
                    <span>
                      <div className="items-center flex flex-row relative">
                        <input
                          onClick={handleOpenMessage}
                          type="search"
                          placeholder="Tìm kiếm theo tên hoặc email"
                          role="searchbox"
                          className="XgI Lfz LJB KI_ min-h-[48px] w-full px-[40px] py-[8px] iFc text-[16px] hover:border-slate-500"
                        />
                      </div>
                    </span>
                  </div>

                  <div className="overscroll-none border max-h-[calc(-300px + 100vh)] overflow-x-hidden overflow-y-scroll py-[8px] isolate">
                    {userInfo?.map((u, i) => (
                      <div
                        key={i}
                        onClick={() =>
                          handleClickSelectedUser(u, u.username, u.name)
                        }
                        className="h-[64px] justify-center items-center py-0 flex flex-row transition-all hover:bg-[#e9e9e9]"
                      >
                        <div className="w-full">
                          <div className="border-0 w-[calc(12 / var(12)* 100%)] cursor-pointer">
                            <div className="relative flex flex-row">
                              <div className="isolate">
                                <div className="items-center px-[8px] py-0 flex flex-row">
                                  <div className="h-[48px] w-[48px] items-center flex-row m-0 flex">
                                    <div className="pt-3 relative">
                                      <img
                                        className="max-w-full rounded-full w-[48px] h-[48px]"
                                        src={u.image}
                                        alt="image_user"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="max-w-[80%] ml-[16px] flex-auto min-h-0 min-w-0 flex flex-col">
                                <div className="iFc text-left text-[16px] text-[#111] max-w-[100%] overflow-hidden break-words font-semibold">
                                  {u.name}
                                </div>
                                <div className="ml-0 mt-[4px]">
                                  <div className="text-left max-w-[100%] overflow-hidden break-words font-normal text-[12px]">
                                    {u?.username}
                                  </div>
                                </div>
                              </div>
                              <div
                                className={`justify-end flex flex-row m-0 cursor-pointer ${
                                  ChooseUser === u.username ? "" : "hidden"
                                }`}
                              >
                                <button
                                  aria-label="selected checkmark"
                                  className="m-0 border-none p-0"
                                  tabIndex={0}
                                  type="button"
                                >
                                  <div>
                                    <div className="h-[24px] w-[24px] rounded-[50%] justify-center items-center flex isolate hover:bg-gray-300">
                                      <svg
                                        aria-hidden="true"
                                        aria-label=""
                                        className="text-[#111] align-middle"
                                        height="12"
                                        role="img"
                                        viewBox="0 0 24 24"
                                        width="12"
                                      >
                                        <path d="M9 22 .73 13.75a2.5 2.5 0 1 1 3.54-3.53L9 14.94l10.73-10.7a2.5 2.5 0 0 1 3.54 3.52z"></path>
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
                  </div>

                  {userInfo?.map((d, i) => (
                    <div
                      key={i}
                      className="bottom-0 absolute pb-[12px] pt-[12px] w-full"
                    >
                      <div className="isolate">
                        <div className="w-full">
                          <div className="pl-[8px] justify-around items-end py-[8px] flex flex-row isolate">
                            <div className="border shadow-md px-[4px] py-[15px] min-h-[48px] w-full ml-[8px] rounded-[24px] items-center flex flex-row">
                              <div className="w-full relative flex flex-row">
                                <div className="rounded-[32px] flex-1 min-h-0 min-w-0 flex flex-col">
                                  <textarea
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    className="pr-[8px] text-[16px] h-[26px] flex-auto border-none appearance-none overflow-hidden outline-none resize-none w-full align-top caret-black"
                                    placeholder="Send a message"
                                    rows={1}
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                            <div className="ml-[6px] mr-[6px] isolate">
                              <button
                                onClick={sendMessage}
                                aria-label="Add heart emoji to conversation"
                                className={`border-0 p-0 cursor-pointer  rounded-full ${
                                  input
                                    ? "bg-red-500 hover:bg-red-600"
                                    : "hover:bg-gray-200"
                                }`}
                                type="button"
                              >
                                <div
                                  className={`${
                                    !ChooseUser &&
                                    !input &&
                                    "cursor-default opacity-50"
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
                                        <path
                                          onClick={() =>
                                            setOpenSendMessage(false)
                                          }
                                          fill="#fff"
                                          d="m.46 2.43-.03.03c-.4.42-.58 1.06-.28 1.68L3 10.5 16 12 3 13.5.15 19.86c-.3.62-.13 1.26.27 1.67l.05.05c.4.38 1 .56 1.62.3l20.99-8.5q.28-.12.47-.3l.04-.04c.68-.71.51-2-.51-2.42L2.09 2.12Q1.79 2 1.49 2q-.61.01-1.03.43"
                                        ></path>
                                      ) : (
                                        <path d="m22.18 13.58-9.13 9a1.5 1.5 0 0 1-2.1 0l-9.13-9a6.2 6.2 0 0 1 0-8.77 6.3 6.3 0 0 1 8.84 0L12 6.15l1.34-1.34a6.3 6.3 0 0 1 8.84 0 6.2 6.2 0 0 1 0 8.77"></path>
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
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Message;
