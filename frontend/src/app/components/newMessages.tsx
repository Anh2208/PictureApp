"use client";

import SendMessageButton from "./sendMessageButton";

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
  content: string;
  senderId: string;
  receiverId: string;
}

interface ChangeState {
  handleCloseMessage: () => void;
  handleOpenMessage: () => void;
  handleClickSelectedUser: (user: User, username: string, name: string) => void;
  userInfo: User[] | undefined;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  sendMessage: (text: string) => Promise<void>;
  ChooseUser: string | undefined;
  setOpenSendMessage: React.Dispatch<React.SetStateAction<boolean>>;
  messagesSender: Message[] | null | undefined;
}

const NewMessages = ({
  handleCloseMessage,
  handleOpenMessage,
  handleClickSelectedUser,
  userInfo,
  input,
  setInput,
  sendMessage,
  ChooseUser,
  setOpenSendMessage,
}: ChangeState) => {
  return (
    <div className="h-[calc(-88px+100vh)] mr-2 rounded-[32px] relative bg-white shadow-custom">
      <div className="h-full">
        <div className="block">
          <div className="h-[64px] items-center p-2 flex flex-row">
            <div className="flex-1 min-h-0 min-w-0">
              <div className="text-left  break-words text-[20px] p-3 font-semibold iFc">
                Tin nhắn mới
              </div>
            </div>
            <div className="mr-4 right-0 absolute flex flex-row">
              <div className="p-0 cursor-pointer">
                <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                  <button
                    className="iFc text-[16px] hover:bg-slate-200 rounded-full p-2 font-medium"
                    onClick={handleCloseMessage}
                  >
                    Hủy
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
                onClick={() => handleClickSelectedUser(u, u.username, u.name)}
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
                                src={u.image ? u?.image : "/icons8-user-64.png"}
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
          <SendMessageButton
            userInfo={userInfo}
            input={input}
            setInput={setInput}
            sendMessage={sendMessage}
            ChooseUser={ChooseUser}
            setOpenSendMessage={setOpenSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default NewMessages;
