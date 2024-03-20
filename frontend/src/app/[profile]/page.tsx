"use client";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface User {
  image: string;
  name: string;
  firstname: string;
  lastname: string;
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

const ProfilePage = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.email) {
        try {
          const userData = await getData(session.user.email);
          setUser(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [session]);
  console.log(user);
  return (
    <div className="pt-[80px]">
      <div className="block box-border">
        <div className="justify-center mb-8 flex flex-row">
          <div className="max-w-[488px] w-full mt-3">
            <div className="justify-center items-center flex flex-col my-1">
              <div className="my-1">
                <div className="flex flex-row justify-center m-0">
                  <div className="rounded-[50%] cursor-pointer">
                    <div className="h-[120px] w-[120px] rounded-[50%] relative">
                      {user?.image ? (
                        <img
                          src={user.image}
                          className="absolute w-full rounded-[50%]"
                          alt="image"
                        />
                      ) : (
                        <img
                          src="/icons8-user-64.png"
                          className="absolute w-full  rounded-[50%]"
                          alt="image"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-1">
                <div className="items-center flex flex-col m-0">
                  <div className="text-center break-words font-semibold iFc text-[36px]">
                    <div className="box-border inline-block text-center font-semibold break-words">
                      {user?.firstname || user?.lastname
                        ? `${user?.firstname || ""} ${
                            user?.lastname || ""
                          }`.trim()
                        : user?.name || ""}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="items-center flex flex-row m-0">
                      <div className="block m-[2px]">
                        <img
                          src="/logo-picbu.png"
                          alt="logo"
                          className="h-[16px] w-[16px]"
                        />
                      </div>
                      <div className="my-[2px]">
                        <span className="text-left break-words font-normal iFc text-[14px]">
                          {user?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-1">
                <div className="items-center flex flex-row m-0">
                  <div className="">
                    <span className="text-left break-words font-normal iFc text-[16px]">
                      0 Người đang theo dõi
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-1">
                <div className="pt-2">
                  <div className="flex flex-row">
                    <div className="mx-1">
                      <button className="min-w-[60px] p-0">
                        <div className="justify-center items-center flex px-4 py-3 w-full bg-customColor-color_background_button_secondary_default rounded-[24px]">
                          <div className="text-center font-semibold iFc text-[16px] cursor-pointer">
                            Chia sẻ
                          </div>
                        </div>
                      </button>
                    </div>
                    <div className="mx-1">
                      <button className="min-w-[60px] p-0">
                        <div className="justify-center items-center flex px-4 py-3 w-full bg-customColor-color_background_button_secondary_default rounded-[24px]">
                          <div className="text-center font-semibold iFc text-[16px] cursor-pointer">
                            Chỉnh sửa hồ sơ
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
        <div className="pb-[16px] w-full px-4 bg-white">
          <div className="w-full justify-between items-center flex flex-row">
            <div className="w-[calc(2/12*100%)] flex flex-row items-center"></div>
            <div className="block m-auto">
              <div className="items-center flex flex-row mx-2">
                <div className="mx-2">
                  <div className="py-3">
                    <a href="/" className="rounded-[8px] w-full cursor-pointer">
                      <div className="items-center flex flex-col">
                        <div className="rounded-[8px] bg-white relative px-1 py-2">
                          <div className="items-center justify-center flex flex-row mx-1">
                            <div className="text-left font-semibold iFc text-[16px] iFc leading-[22px]">
                              Đã tạo
                            </div>
                          </div>
                          <div className="bottom-[-3px] right-[8px] w-[calc(100%-16px)] absolute">
                            <div className="rounded h-[3px] w-full bg-black"></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mx-2">
                  <div className="py-3">
                    <a href="/" className="rounded-[8px] w-full cursor-pointer">
                      <div className="items-center flex flex-col">
                        <div className="rounded-[8px] bg-white relative px-1 py-2">
                          <div className="items-center justify-center flex flex-row mx-1">
                            <div className="text-left font-semibold iFc text-[16px] iFc leading-[22px]">
                              Đã lưu
                            </div>
                          </div>
                          <div className="bottom-[-3px] right-[8px] w-[calc(100%-16px)] absolute">
                            <div className="rounded h-[3px] w-full bg-black"></div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[calc(2/12*100%)] flex flex-row items-center"></div>
          </div>
        </div>
        <div className="3"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
