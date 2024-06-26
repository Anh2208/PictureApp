"use client";

import { url } from "inspector";
import { useSession } from "next-auth/react";
import { MouseEventHandler, useEffect, useRef, useState } from "react";

interface Post {
  id: String;
  reactCount: number;
}

interface ReactList {
  id: String;
  number: number;
  postId: String;
  reactId: String;
  userId: String;
}

const icons = [
  {
    id: 1,
    urlStatic: "https://s.pinimg.com/webapp/goodIdeaStatic-855554b0.svg",
    urlDynamic: "https://s.pinimg.com/webapp/goodIdeaAnimated-5de05cb7.svg",
    step: "steps(90)",
    text: "Ý hay",
    delay: "0s",
  },
  {
    id: 2,
    urlStatic: "https://s.pinimg.com/webapp/loveStatic-31fc2a99.svg",
    urlDynamic: "https://s.pinimg.com/webapp/loveAnimated-ccd5b808.svg",
    step: "steps(90)",
    text: "Thích",
    delay: "2s",
  },
  {
    id: 3,
    urlStatic: "https://s.pinimg.com/webapp/thanksStatic-51f19932.svg",
    urlDynamic: "https://s.pinimg.com/webapp/thanksAnimated-6831daf3.svg",
    step: "steps(60)",
    text: "Cảm ơn",
    delay: "4s",
  },
  {
    id: 4,
    urlStatic: "https://s.pinimg.com/webapp/wowStatic-d966adbd.svg",
    urlDynamic: "https://s.pinimg.com/webapp/wowAnimated-b776449f.svg",
    step: "steps(90)",
    text: "Wow",
    delay: "6s",
  },
  {
    id: 5,
    urlStatic: "https://s.pinimg.com/webapp/hahaStatic-28ee6e1e.svg",
    urlDynamic: "	https://s.pinimg.com/webapp/hahaAnimated-df9cb2fa.svg",
    step: "steps(60)",
    text: "Haha",
    delay: "8s",
  },
];
const React = ({
  id,
  reactCount,
  reactList,
  onCountUpdate,
}: Post & {
  reactList: ReactList[];
  onCountUpdate: () => void;
}) => {
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [reactByUser, setReactByUser] = useState("");
  const timeoutId = useRef<any | null>(null);
  const { data: session } = useSession();
  const [loveReact, setLoveReact] = useState(false);
  const [ideaReact, setIdeaReact] = useState(false);
  const [thankReact, setThankReact] = useState(false);
  const [hahaReact, setHahaReact] = useState(false);
  const [wowReact, setWowReact] = useState(false);

  const handleHoverHeart = () => {
    // Xóa setTimeout trước đó nếu có
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    // Đặt setTimeout mới để hiển thị ô chọn icon sau 2 giây
    timeoutId.current = setTimeout(() => {
      setShowIconPicker(true);
    }, 2000);
  };

  const handleLeaveHeart = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setShowIconPicker(false);
    }, 250);
  };

  const submitHandle: (
    e: React.MouseEvent<HTMLDivElement>,
    iconId: number,
    iconUrlStatic: string
  ) => Promise<void> = async (e, iconId, iconUrlStatic) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/post/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          iconId: iconId,
          userId: session?.user.id,
          postId: id,
        }),
      });
      setReactByUser(iconId.toString());
      onCountUpdate();
    } catch (error) {
      console.log("error is", error);
    }
  };

  const submitHandleRemoveReact: (
    e: React.MouseEvent<HTMLDivElement>,
    iconId: string
  ) => Promise<void> = async (e, iconId) => {
    e.preventDefault();
    try {
      if (reactByUser !== "") {
        await fetch(`http://localhost:3000/api/post/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            isDelete: true,
            iconId: parseInt(iconId),
            userId: session?.user.id,
            postId: id,
          }),
        });
        onCountUpdate();
        setReactByUser("");
      } else {
        await fetch(`http://localhost:3000/api/post/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            iconId: 2,
            userId: session?.user.id,
            postId: id,
          }),
        });
        onCountUpdate();
      }
    } catch (error) {
      console.log("error is", error);
    }
  };

  useEffect(() => {
    setIdeaReact(false);
    setLoveReact(false);
    setThankReact(false);
    setHahaReact(false);
    setWowReact(false);
    if (reactList) {
      reactList.forEach((item) => {
        if (item.reactId === "1") {
          setIdeaReact(true);
        }
        if (item.reactId === "2") {
          setLoveReact(true);
        }
        if (item.reactId === "3") {
          setThankReact(true);
        }
        if (item.reactId === "4") {
          setHahaReact(true);
        }
        if (item.reactId === "5") {
          setWowReact(true);
        }
        if (item.userId == session?.user.id) {
          // setIsReact(true);
          setReactByUser(item.reactId.toString());
        }
      });
    }
  }, [reactCount, reactList]);
  return (
    <>
      <div className="h-[44px] justify-between items-center mt-1 mb-3 flex flex-row">
        <h3 className="text-left break-words font-semibold iFc text-[20px]">
          Bạn nghĩ gì?
        </h3>
        <div className="items-center flex flex-row">
          <div className="mx-[6px]">
            <div className="items-center box-border flex flex-row">
              {ideaReact && (
                <div className="flex flex-row mr-[2px]">
                  <div
                    className="bg-image-heart"
                    style={{
                      backgroundImage:
                        'url("https://s.pinimg.com/webapp/goodIdeaStatic-855554b0.svg")',
                    }}
                  ></div>
                </div>
              )}
              {loveReact && (
                <div className="flex flex-row mr-[2px]">
                  <div
                    className="bg-image-heart"
                    style={{
                      backgroundImage:
                        'url("https://s.pinimg.com/webapp/loveStatic-31fc2a99.svg")',
                    }}
                  ></div>
                </div>
              )}
              {thankReact && (
                <div className="flex flex-row mr-[2px]">
                  <div
                    className="bg-image-heart"
                    style={{
                      backgroundImage:
                        'url("https://s.pinimg.com/webapp/thanksStatic-51f19932.svg")',
                    }}
                  ></div>
                </div>
              )}
              {wowReact && (
                <div className="flex flex-row mr-[2px]">
                  <div
                    className="bg-image-heart"
                    style={{
                      backgroundImage:
                        'url("https://s.pinimg.com/webapp/wowStatic-d966adbd.svg")',
                    }}
                  ></div>
                </div>
              )}
              {hahaReact && (
                <div className="flex flex-row mr-[2px]">
                  <div
                    className="bg-image-heart"
                    style={{
                      backgroundImage:
                        'url("https://s.pinimg.com/webapp/hahaStatic-28ee6e1e.svg")',
                    }}
                  ></div>
                </div>
              )}
              <div className="text-left break-words font-semibold iFc text-[16px]">
                {reactCount != 0 && reactCount.toString()}
              </div>
            </div>
          </div>
          <div className="mx-[6px] my-0">
            <div className="box-border relative">
              <div
                className="rounded-[50%] w-full cursor-pointer"
                onClick={(e) => submitHandleRemoveReact(e, reactByUser)}
              >
                <div
                  className="rounded-[50%] bg-customColor-color_background_box_secondary"
                  onMouseEnter={handleHoverHeart}
                  onMouseLeave={handleLeaveHeart}
                >
                  <div className="min-h-[48px] min-w-[48px] justify-center items-center flex flex-row m-0">
                    {reactByUser == "" ? (
                      <div
                        className="bg-image-heart-no-color"
                        style={{
                          backgroundImage:
                            'url("https://s.pinimg.com/webapp/reactionHeartOutline-24ab75a6.svg")',
                        }}
                      ></div>
                    ) : reactByUser == "1" ? (
                      <div
                        className="bg-image-heart-no-color"
                        style={{
                          backgroundImage:
                            'url("https://s.pinimg.com/webapp/goodIdeaStatic-855554b0.svg")',
                        }}
                      ></div>
                    ) : reactByUser == "2" ? (
                      <div
                        className="bg-image-heart-no-color"
                        style={{
                          backgroundImage:
                            'url("https://s.pinimg.com/webapp/loveStatic-31fc2a99.svg")',
                        }}
                      ></div>
                    ) : reactByUser == "3" ? (
                      <div
                        className="bg-image-heart-no-color"
                        style={{
                          backgroundImage:
                            'url("https://s.pinimg.com/webapp/thanksStatic-51f19932.svg")',
                        }}
                      ></div>
                    ) : reactByUser == "4" ? (
                      <div
                        className="bg-image-heart-no-color"
                        style={{
                          backgroundImage:
                            'url("https://s.pinimg.com/webapp/wowStatic-d966adbd.svg")',
                        }}
                      ></div>
                    ) : (
                      <div
                        className="bg-image-heart-no-color"
                        style={{
                          backgroundImage:
                            'url("https://s.pinimg.com/webapp/hahaStatic-28ee6e1e.svg")',
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              </div>
              {/* choose icon */}
              {showIconPicker && (
                <div
                  className="justify-center items-center flex flex-row cursor-auto"
                  onMouseEnter={handleHoverHeart}
                  onMouseLeave={handleLeaveHeart}
                >
                  <div className="top-0 z-1 sticky">
                    <div className="border-none w-full cursor-pointer transition-transform duration-85 ease-out">
                      <div className="ml-[-150px] mt-[-128px] justify-center items-center flex flex-row cursor-pointer absolute">
                        <div
                          className="h-[80px] w-[300px] rounded-[999px] justify-center items-center bg-white flex flex-row cursor-pointer"
                          style={{
                            boxShadow: "rgba(0, 0, 0, 0.4) 0px 9px 26px",
                          }}
                        >
                          <div className="w-full justify-around items-center px-5 flex flex-row cursor-pointer">
                            {icons.map((icon) => (
                              <div
                                className="justify-between items-center flex flex-row cursor-pointer transition icon-animation-display"
                                key={icon.id}
                              >
                                <div className="my-transition-icon transition max-w-[40px] max-h-[40px] justify-center items-center relative flex flex-row cursor-pointer">
                                  <div
                                    className="relative group justify-center items-center flex flex-col cursor-pointer"
                                    onClick={(e) =>
                                      submitHandle(e, icon.id, icon.urlStatic)
                                    }
                                  >
                                    <div className="icon-animation-text group-hover:flex hidden rounded-[999px] justify-center items-center px-2 py-1 bg-black text-white flex-row">
                                      <div className="text-left iFc text-[12px] items-center justify-center text-white font-semibold">
                                        {icon.text}
                                      </div>
                                    </div>
                                    <div
                                      style={{
                                        backgroundImage: `url(${icon.urlDynamic})`,
                                      }}
                                      className={`bg-no-repeat animation-steps-${icon.step} hover:emoji bg-cover box-border h-[40px] w-[40px] justify-center items-center flex flex-row cursor-pointer`}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default React;
