"use client";

import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { useSession } from "next-auth/react";
import { MouseEventHandler, useState } from "react";

interface Comment {
  id: string;
  content: string;
  creatorImage: string;
  creatorUrl: string;
  creatorUserName: string;
  postId: string;
  createdAt: Date;
  likeCount: number;
  likes: Like[];
}

interface Like {
  id: string;
  commentId: string;
  userId: string;
}
const getDataComment = async (postId: string) => {
  console.log("cacacac", postId);
  const res = await fetch(`http://localhost:3000/api/user/comment/${postId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const ReplyComment = ({
  postId,
  commentId,
  updateCommentList,
}: {
  postId: string;
  commentId: string;
  updateCommentList: () => void;
}) => {
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [comment, setComment] = useState<Comment[] | undefined>(undefined);
  const { data: session, status } = useSession();
  const handlerSubmit: MouseEventHandler<HTMLDivElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/user/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: postId,
          emailUser: session?.user?.email,
          content: commentValue,
          parentId: commentId,
        }),
      });
      if (response) {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf("/") + 1);
        const newCommentList = await getDataComment(id);
        setComment(newCommentList);
        setCommentValue("");
        updateCommentList();
      }
    } catch (error) {
      console.log("error create comment");
    }
  };
  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    const addEmoji = emojiObject.emoji;

    setCommentValue((prevInput) => prevInput + addEmoji);
    setEmojiPicker(false);
  };

  return (
    <div className="box-border bg-white">
      <div className="flex flex-col m-0">
        <div className="box-border my-0">
          <div className="justify-center flex flex-row m-0">
            <div className="rounded-[16px] border border-gray-200 border-solid py-3 flex flex-auto">
              <div className="w-full S9z h-full">
                <div className="h-full justify-center flex flex-row m-0">
                  <div className="min-h-[48px] w-full flex flex-row justify-between box-border">
                    <div className="mx-4 flex flex-auto overflow-auto flex-col">
                      <div className=" box-border block cursor-pointer">
                        <input
                          type="text"
                          placeholder="Thêm nhận xét"
                          className="outline-none"
                          value={commentValue}
                          onChange={(e) => setCommentValue(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-center">
                      <div className="rounded-[50%] justify-center box-border flex flex-row">
                        <div className="absolute top-[-10px] z-20">
                          {emojiPicker && (
                            <EmojiPicker
                              className="relative"
                              onEmojiClick={handleEmojiClick}
                            />
                          )}
                        </div>
                        <div
                          className="text-[24px] h-[40px] w-[40px] justify-center items-center flex flex-row"
                          onClick={() => setEmojiPicker((prev) => !prev)}
                        >
                          😃
                        </div>
                        {/* {commentValue && (
                          <div className="m-[2px] cursor-pointer">
                            <button
                              className="p-0"
                              type="button"
                              onClick={handlerSubmit}
                            >
                              <div className="w-[40px] h-[40px] rounded-[50%] justify-center items-center flex bg-customColor-color_red_pushpin_450">
                                <svg
                                  className="h-[18px] w-[18px] text-white fill-white"
                                  viewBox="0 0 24 24"
                                  aria-hidden="true"
                                  aria-label=""
                                  role="img"
                                >
                                  <path d="m.46 2.43-.03.03c-.4.42-.58 1.06-.28 1.68L3 10.5 16 12 3 13.5.15 19.86c-.3.62-.13 1.26.27 1.67l.05.05c.4.38 1 .56 1.62.3l20.99-8.5q.28-.12.47-.3l.04-.04c.68-.71.51-2-.51-2.42L2.09 2.12Q1.79 2 1.49 2q-.61.01-1.03.43"></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end box-border mt-4 flex flex-row">
          <div className="min-w-[60px] box-border inline-block rounded-[24px] cursor-auto">
            <div className="justify-center items-center flex box-border min-h-[40px] px-3 py-2 w-full cursor-pointer rounded-[24px] bg-customColor-color_background_button_secondary_default S9z">
              <div className="text-black text-center font-semibold iFc text-[16px]">
                Hủy
              </div>
            </div>
          </div>
          {commentValue ? (
            <div
              className="min-w-[60px] box-border inline-block rounded-[24px] cursor-auto ml-2"
              onClick={handlerSubmit}
            >
              <div className="justify-center items-center flex box-border min-h-[40px] px-3 py-2 w-full cursor-pointer rounded-[24px] bg-customColor-color_red_pushpin_450 S9z">
                <div className="text-white text-center font-semibold iFc text-[16px]">
                  Lưu
                </div>
              </div>
            </div>
          ) : (
            <div className="min-w-[60px] box-border inline-block rounded-[24px] cursor-auto ml-2">
              <div className="justify-center items-center flex box-border min-h-[40px] px-3 py-2 w-full cursor-pointer rounded-[24px] bg-customColor-color_background_button_secondary_default S9z">
                <div className="text-black text-center font-semibold iFc text-[16px]">
                  Lưu
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReplyComment;
