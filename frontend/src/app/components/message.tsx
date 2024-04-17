"use client";

import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import DetailsMessages from "./detailsMessages";
// import { socket } from "../../socket";
import io from "socket.io-client";
import SendMessageButton from "./sendMessageButton";
import Image from "next/image";
import LoadingSpinner from "../../../public/loading.svg";
import NewMessages from "./newMessages";

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
  username: string;
}

interface Message {
  id: string;
  createdAt: Date;
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

const getMyFriends = async (myId: string) => {
  const res = await fetch(`http://localhost:3000/api/friends?myId=${myId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const getLastMessage = async (myId: string, receiverId: string) => {
  const res = await fetch(
    `http://localhost:3000/api/last-message?myId=${myId}&receiverId=${receiverId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

interface ChangeState {
  onClose: () => void;
}

const Message = ({ onClose }: ChangeState) => {
  const textIconHeart =
    "m22.18 13.58-9.13 9a1.5 1.5 0 0 1-2.1 0l-9.13-9a6.2 6.2 0 0 1 0-8.77 6.3 6.3 0 0 1 8.84 0L12 6.15l1.34-1.34a6.3 6.3 0 0 1 8.84 0 6.2 6.2 0 0 1 0 8.77";

  const [isLoading, setIsLoading] = useState(false);

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
  const [myFriends, setMyFriends] = useState<User[] | undefined>();
  // get last message
  const [lastMessage, setLastMessage] = useState<Message[]>();
  //get user message

  const { data: session } = useSession();

  // fetch data
  const [users, setUsers] = useState<Users[] | null>();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const usersData = await getUsers();
          const userData = await getData(session.user.email);

          setUsers(usersData);
          setUser(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [session]);

  // get last message
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const updatedLastMessages = [];
        const MyFriends = await getMyFriends(session.user.id);

        for (var i = 0; i < MyFriends.length; i++) {
          const lastMessage = await getLastMessage(
            session.user.id,
            MyFriends[i]?.id
          );
          updatedLastMessages.push(lastMessage);
        }
        if (MyFriends) {
          setIsLoading(true);
        }
        setLastMessage(updatedLastMessages);
        setMyFriends(MyFriends);
      }
    };

    const pollNewMessages = setInterval(fetchData, 5000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(pollNewMessages);
  }, [session, lastMessage]);

  const userInfo = users?.filter(
    (user) => user.username !== session?.user?.username
  );

  // format day time

  function formatCountdownTime(createdAt: Date) {
    const now: any = new Date();
    const createdAtDate: any = new Date(createdAt);

    // Tính toán hiệu của thời gian hiện tại và thời gian được tạo ra
    const timeDifference = now - createdAtDate;

    // Chuyển đổi thành đơn vị thích hợp
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Xây dựng chuỗi kết quả
    let result = "";
    if (days > 0) {
      result += `${days} ngày`;
      if (days > 1) result += "giây";
    } else if (hours > 0) {
      result += `${hours} giờ`;
      if (hours > 1) result;
    } else if (minutes > 0) {
      result += `${minutes} phút`;
      if (minutes > 1) result;
    } else {
      result += `Mới đây`;
      if (seconds > 1) result;
    }

    return result;
  }

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

  // nút gửi tin nhắn
  const sendMessage = async (input: string): Promise<void> => {
    if (input.trim() !== "" || input.trim() === textIconHeart) {
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
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    });
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
                      Tin nhắn
                    </div>
                  </div>
                  <div className="isolate">
                    <div className="h-[calc(100% - 254px)] w-full overflow-hidden px-[8px]">
                      <div className="w-full">
                        {!isLoading ? (
                          <Image
                            priority
                            src={LoadingSpinner}
                            alt="Loading"
                            width={72}
                            height={72}
                          />
                        ) : (
                          myFriends?.map((u, i) => (
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
                                            {u && u?.image === null ? (
                                              <img
                                                src="/icons8-user-64.png"
                                                className="rounded-full"
                                                alt="image"
                                              />
                                            ) : (
                                              <img
                                                className="rounded-full"
                                                src={u?.image}
                                                alt="image"
                                              />
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="max-w-full ml-[16px] flex-auto min-h-0 min-w-0 flex flex-col">
                                      <div className="iFc text-left text-[16px] text-[#111] max-w-[100%] overflow-hidden break-words font-semibold">
                                        {u.name}
                                      </div>
                                      <div className="ml-0 mt-[4px]">
                                        <div className="text-left max-w-[100%] overflow-hidden break-words font-normal text-[12px]">
                                          {u?.username}
                                        </div>
                                      </div>
                                      {lastMessage?.map((messages) => (
                                        <div
                                          key={messages.id}
                                          className="items-baseline flex flex-row m-0"
                                        >
                                          <span>
                                            <div className="text-[16px] iFc text-[#767676] font-normal flex flex-row">
                                              {(myFriends[i].id ===
                                                messages?.receiverId ||
                                                myFriends[i].id ===
                                                  messages?.senderId) && (
                                                <>
                                                  {messages.senderId ===
                                                  session?.user.id
                                                    ? "You: "
                                                    : myFriends[i].username +
                                                      ": "}

                                                  {messages?.content ===
                                                  textIconHeart
                                                    ? "❤️"
                                                    : messages?.content}
                                                  {" ∙ " +
                                                    formatCountdownTime(
                                                      messages.createdAt
                                                    )}
                                                </>
                                              )}
                                            </div>
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
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
            <DetailsMessages
              onClose={() => handleBack()}
              ChooseUserName={ChooseUserName}
              userInfo={userInfo}
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              ChooseUser={ChooseUser}
              setOpenSendMessage={setOpenSendMessage}
              messagesSender={messagesSender}
              setMessagesSender={setMessagesSender}
              selecteUser={selecteUser}
              lastMessage={lastMessage}
            />
          ) : (
            <NewMessages
              handleCloseMessage={handleCloseMessage}
              handleOpenMessage={handleOpenMessage}
              handleClickSelectedUser={handleClickSelectedUser}
              userInfo={userInfo}
              input={input}
              setInput={setInput}
              sendMessage={sendMessage}
              ChooseUser={ChooseUser}
              setOpenSendMessage={setOpenSendMessage}
              messagesSender={undefined}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Message;
