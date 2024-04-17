"use client";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import ReactComponent from "../../components/react";
import { Post } from "@prisma/client";
import { getSession, useSession } from "next-auth/react";
import { setDefaultOptions, formatDistanceToNowStrict } from "date-fns";
import { vi } from "date-fns/locale";
import LeftPin from "@/app/components/Pin/Left";
import ReplyComment from "../../components/ReplyComment";
setDefaultOptions({ locale: vi });

interface EmojiClickData {
  emoji: string;
}

interface User {
  username: string;
  image: string;
  followers: number;
  email: string;
}

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
  children: Comment[];
}

interface ReactList {
  id: String;
  number: number;
  postId: String;
  reactId: String;
  userId: String;
}

interface Like {
  id: string;
  commentId: string;
  userId: string;
}
const getDataPost = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const getDataFollow = async (email: string) => {
  const res = await fetch(`http://localhost:3000/api/user/follow/${email}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const getDataComment = async (postId: string) => {
  const res = await fetch(`http://localhost:3000/api/user/comment/${postId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const formatCreatedAt = (createdAt: Date): string => {
  return formatDistanceToNowStrict(new Date(createdAt));
};

const PostId = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [emojiPicker, setEmojiPicker] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [following, setFollowing] = useState(false);
  const [Post, setPost] = useState<Post | null>(null);
  const [comment, setComment] = useState<Comment[] | undefined>(undefined);
  const [reactList, setReactList] = useState<ReactList[] | []>();
  const [reactCount, setReactCount] = useState();
  const [replyingToComment, setReplyingToComment] = useState<string | null>(
    null
  );
  const [user, setUser] = useState<User | null>(null);
  const { data: session, status } = useSession();
  const [imageHeight, setImageHeight] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    const addEmoji = emojiObject.emoji;

    setCommentValue((prevInput) => prevInput + addEmoji);
    setEmojiPicker(false);
  };

  const handleCountUpdate = async () => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    const response = await getDataPost(id);
    if (response) {
      setReactCount(response.reactCount);
      setReactList(response.reactList);
    }
    // setReactCount(newCount);
  };
  const handlerReplyComment = (commentId: string) => {
    setReplyingToComment(commentId);
  };

  const handleUpdateReplyComment = async () => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    const newCommentList = await getDataComment(id);
    setComment(newCommentList);
  };

  // API Start
  // Create comment
  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/user/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          postId: Post?.id,
          emailUser: session?.user?.email,
          content: commentValue,
        }),
      });
      if (response) {
        const url = window.location.href;
        const id = url.substring(url.lastIndexOf("/") + 1);
        const newCommentList = await getDataComment(id);
        setComment(newCommentList);
        setCommentValue("");
      }
    } catch (error) {
      console.log("error create comment");
    }
  };

  //user follow Poster
  const handlerSubmitFollow: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/user/follow`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailUserFollowing: session?.user?.email,
          emailUserFollower: user?.email,
        }),
      });
      if (response.ok) {
        setFollowing(!following);
      }
    } catch (error) {
      console.log("error create comment");
    }
  };

  //user unFollow Poster
  const handlerSubmitUnFollow: MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/user/follow`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailUserFollowing: session?.user?.email,
          emailUserFollower: user?.email,
        }),
      });
      if (response.ok) {
        setFollowing(!following);
      }
    } catch (error) {
      console.log("error create comment");
    }
  };

  // like comment
  const handlerLikeComment = async (
    e: React.MouseEvent<HTMLDivElement>,
    commentDetail: Comment
  ) => {
    e.preventDefault();
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    try {
      const action = commentDetail.likes.some(
        (like: Like) => like.userId === session?.user.id
      );
      if (action) {
        await fetch(
          `http://localhost:3000/api/user/comment/${commentDetail.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: session?.user.id,
              isDelete: true,
            }),
          }
        );
      } else {
        await fetch(
          `http://localhost:3000/api/user/comment/${commentDetail.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: session?.user.id,
              isDelete: false,
            }),
          }
        );
      }

      const commentList = await getDataComment(id);
      setComment(commentList);
    } catch (error) {
      console.log("error like comment", error);
    }
  };
  // API end
  useEffect(() => {
    const url = window.location.href;
    const id = url.substring(url.lastIndexOf("/") + 1);
    const fetchData = async () => {
      const userFollowing = await getSession();
      try {
        const response = await getDataPost(id);
        if (response) {
          setPost(response.post);
          setUser(response.user);
          setReactCount(response.reactCount);
          setReactList(response.reactList);
        }
        const commentList = await getDataComment(id);
        if (commentList) {
          setComment(commentList);
        }
        const followList = await getDataFollow(response.user.email);
        const isFollowing = followList.some(
          (item: any) => item.followingId === userFollowing?.user.id
        );
        setFollowing(isFollowing);
        const imgElement = imgRef.current;
        if (imgElement) {
          const height = imgElement.clientHeight;
          setImageHeight(height);
        }
      } catch (error) {
        throw new Error("Fetch post data failed");
      }
    };
    fetchData();
  }, []);
  const maxHeight =
    imageHeight < window.innerHeight - 96
      ? `calc(100vh - 96px)`
      : `${imageHeight}px`;
  return (
    <>
      <div className="pt-[80px] box-border block">
        <div className="flex flex-col m-0">
          <div className="flex flex-auto justify-center flex-row">
            <div className=" justify-center mb-4 mt-2 flex flex-row">
              <div className="w-full h-full bg-white flex flex-col cursor-zoom-out">
                <div className="flex flex-auto">
                  <div className="h-full mb-0">
                    <div className="h-full w-full max-w-[1016px] rounded-[32px] relative flex flex-row">
                      <div className="rounded-[32px] shadow-md relative bg-white flex flex-row cursor-auto">
                        <div className="flex flex-col m-0 cursor-auto">
                          <div className="w-[1016px] flex flex-row m-0 cursor-auto">
                            <div className="w-[50%] box-border">
                              <div className="relative justify-center box-border flex flex-row w-full h-full">
                                <div className="h-full w-full justify-center box-border cursor-auto rounded-[32px]">
                                  <div className=" bg-black box-border relative cursor-auto rounded-[32px]">
                                    <div className="relative ">
                                      {/* <img
                                        ref={imgRef}
                                        src={Post?.images}
                                        alt=""
                                        className="w-full h-auto rounded-l-[32px] relative"
                                      /> */}
                                      {Post?.images.substring(
                                        Post?.images.lastIndexOf(".") + 1
                                      ) != "mp4" ? (
                                        <img
                                          ref={imgRef}
                                          src={Post?.images}
                                          alt={Post?.title}
                                          className=" w-full cursor-zoom-in rounded-[16px]"
                                        />
                                      ) : (
                                        <video
                                          src={Post?.images}
                                          autoPlay={true}
                                          controls
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Info */}
                            {!comment ? (
                              <div
                                className="h-full w-[50%] box-border flex flex-col cursor-auto relative justify-center items-center"
                                style={{ maxHeight: maxHeight }}
                              >
                                <div className="loader_dots_animation"></div>
                              </div>
                            ) : (
                              <div
                                className="h-full w-[50%] box-border flex flex-col cursor-auto"
                                style={{ maxHeight: maxHeight }}
                              >
                                <div className="pl-[32px] flex flex-auto min-h-0 min-w-0 box-border flex-col cursor-auto">
                                  <div className="top-[64px] z-10 sticky cursor-auto">
                                    <div className="pt-8 pr-8 pl-0 min-h-[92px] mt-0 bg-white">
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
                                          <div className="ml-3 block cursor-auto">
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
                                  <div className="flex-auto min-h-0 min-w-0 box-border overflow-auto flex-col flex cursor-auto">
                                    <div className="flex-col m-0 flex cursor-auto">
                                      <div className="pr-8 box-border cursor-auto">
                                        <div className="box-border flex-row flex cursor-auto">
                                          <div className="w-full box-border relative mt-0 inline-block cursor-auto">
                                            <div className="items-center flex-row m-0 flex cursor-auto">
                                              <div className="box-border inline-block cursor-auto"></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="pr-8 box-border cursor-auto">
                                        <div className="box-border bg-white cursor-auto">
                                          <div className="text-black font-bold cursor-auto">
                                            <div className="box-border mt-4 text-black font-bold cursor-auto iFc">
                                              <div className="text-black font-bold cursor-auto">
                                                <a
                                                  href="/"
                                                  className=" rounded-none S9z"
                                                >
                                                  <h1 className="text-left break-words font-semibold iFc text-[28px]">
                                                    Stream
                                                  </h1>
                                                  <div className="inline box-border relative text-black font-bold"></div>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="box-border cursor-auto">
                                        <div className="flex flex-col m-0 cursor-auto min-h-0 min-w-0">
                                          <div className="pr-[32px] box-border cursor-auto">
                                            <div className=" items-baseline flex-row m-0 flex cursor-auto">
                                              <div className="max-w-[444px] box-border">
                                                <span className="text-left text-black break-words font-normal iFc text-[16px]">
                                                  <span
                                                    className="richPinInformation"
                                                    data-test-id="richPinInformation-description"
                                                  ></span>
                                                </span>
                                              </div>
                                            </div>
                                            <div className="mb-8">
                                              <div className="min-h-[48px] mt-[16px] box-border">
                                                <div className="box-border relative">
                                                  <div className="items-center flex flex-row m-0">
                                                    {/* info creator */}
                                                    <div className="flex flex-auto box-border min-h-0 min-w-0">
                                                      <div className="mx-1 items-center flex flex-row pointer-events-auto box-border">
                                                        <div className="flex flex-grow-0 flex-shrink-0 flex-basis-auto px-1">
                                                          <a
                                                            href="/"
                                                            className="w-full rounded-none cursor-pointer"
                                                          >
                                                            <div className=" rounded-[50%] relative overflow-hidden">
                                                              <div className="h-[48px] w-[48px] rounded-[50%] relative">
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
                                                                  {
                                                                    user?.username
                                                                  }
                                                                </div>
                                                              </div>
                                                            </a>
                                                          </div>
                                                          <div className="px-1 flex flex-row">
                                                            <div className="text-left break-words font-normal iFc text-[14px]">
                                                              {user?.followers}{" "}
                                                              người theo dõi
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    {/* follow status */}
                                                    <div className="flex">
                                                      {following == false ? (
                                                        <div className="flex flex-row relative">
                                                          <button
                                                            className="min-w-[60px] p-0 w-full rounded-[24px]"
                                                            onClick={
                                                              handlerSubmitFollow
                                                            }
                                                          >
                                                            <div className="min-w-[60px] justify-center items-center flex min-h-[48px] px-4 py-3 w-full cursor-pointer bg-customColor-color_background_box_secondary rounded-[24px]">
                                                              <div className="text-black text-center font-semibold iFc text-[16px]">
                                                                Theo dõi
                                                              </div>
                                                            </div>
                                                          </button>
                                                        </div>
                                                      ) : (
                                                        <div className="flex flex-row relative">
                                                          <button
                                                            className="min-w-[60px] p-0 w-full rounded-[24px]"
                                                            onClick={
                                                              handlerSubmitUnFollow
                                                            }
                                                          >
                                                            <div className="min-w-[60px] justify-center items-center flex min-h-[48px] px-4 py-3 w-full cursor-pointer bg-black rounded-[24px]">
                                                              <div className="text-white text-center font-semibold iFc text-[16px]">
                                                                Người đang theo
                                                                dõi
                                                              </div>
                                                            </div>
                                                          </button>
                                                        </div>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="pr-[32px] cursor-auto">
                                            <div className="mt-10 caption-top">
                                              <div className="flex flex-col">
                                                <div className="my-[10px]">
                                                  <div className="flex flex-col my-3">
                                                    <div className="w-full cursor-pointer">
                                                      <div className="flex flex-row justify-between items-center">
                                                        <h2 className="text-left break-words font-semibold iFc text-[16px]">
                                                          Nhận xét
                                                        </h2>
                                                        <div
                                                          className="items-center flex flex-row cursor-pointer"
                                                          onClick={() =>
                                                            setShowMessage(
                                                              (prev) => !prev
                                                            )
                                                          }
                                                        >
                                                          <div className="w-[48px] ml-0 justify-center items-center flex flex-row">
                                                            {!showMessage ? (
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
                                                {/* Comment */}
                                                <div className="my-3">
                                                  <div className="w-full flex flex-col mx-0">
                                                    {showMessage &&
                                                      comment &&
                                                      comment.map(
                                                        (commentDetail) => (
                                                          <div
                                                            className="my-[10px] mx-0"
                                                            key={
                                                              commentDetail.id
                                                            }
                                                          >
                                                            <div className="flex flex-row m-0">
                                                              <div className="mr-2 box-border">
                                                                <a href="/">
                                                                  <div className="relative h-[32px] w-[32px] rounded-[50%]">
                                                                    <img
                                                                      src={
                                                                        commentDetail.creatorImage
                                                                      }
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
                                                                                href={
                                                                                  commentDetail.creatorUrl
                                                                                }
                                                                                className=" font-semibold iFc inline-block text-[16px] break-words"
                                                                              >
                                                                                {
                                                                                  commentDetail.creatorUserName
                                                                                }
                                                                              </a>
                                                                            </span>
                                                                            <span className="text-left break-words font-normal iFc text-[16px]">
                                                                              <span className=" font-normal iFc inline-block text-[16px] break-words">
                                                                                &#160;
                                                                                {
                                                                                  commentDetail.content
                                                                                }
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </div>
                                                                      </span>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                                <div className="justify-between items-center relative flex flex-row cursor-auto">
                                                                  <div className="items-center flex flex-row">
                                                                    <div className="mx-[10px]">
                                                                      <div className="text-left text-customColor-color_text_subtle break-words font-normal text-[14px] iFc">
                                                                        {formatCreatedAt(
                                                                          commentDetail.createdAt
                                                                        )}
                                                                      </div>
                                                                    </div>
                                                                    <div
                                                                      className="mx-[10px]"
                                                                      onClick={() =>
                                                                        handlerReplyComment(
                                                                          commentDetail.id
                                                                        )
                                                                      }
                                                                    >
                                                                      <div
                                                                        className="w-full cursor-pointer S9z"
                                                                        role="button"
                                                                      >
                                                                        <div className="text-left text-customColor-color_text_subtle break-words font-semibold text-[14px] iFc">
                                                                          Trả
                                                                          lời
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="mx-[10px]">
                                                                      <div className="items-center flex flex-row cursor-auto">
                                                                        <div className="mx-[2px]">
                                                                          <div
                                                                            className="w-full cursor-pointer S9z"
                                                                            role="button"
                                                                            onClick={(
                                                                              e
                                                                            ) =>
                                                                              handlerLikeComment(
                                                                                e,
                                                                                commentDetail
                                                                              )
                                                                            }
                                                                          >
                                                                            {!commentDetail.likes.some(
                                                                              (
                                                                                like: Like
                                                                              ) =>
                                                                                like.userId ===
                                                                                session
                                                                                  ?.user
                                                                                  .id
                                                                            ) ? (
                                                                              <svg
                                                                                className="h-[16px] w-[16px] text-customColor-color_text_subtle"
                                                                                viewBox="0 0 24 24"
                                                                                aria-hidden="true"
                                                                                aria-label=""
                                                                                role="img"
                                                                              >
                                                                                <path d="M5.94 6c.92 0 1.83.37 2.49 1.02l1.48 1.44L12 10.5l2.09-2.04 1.48-1.44A3.6 3.6 0 0 1 18.06 6c.49 0 1.2.11 1.85.63a2.8 2.8 0 0 1 .23 4.23l-.07.07-.07.08c-.06.07-5.59 6.22-8 8.75-2.41-2.54-7.94-8.69-8-8.75l-.06-.08-.08-.07A2.8 2.8 0 0 1 3 8.71 2.9 2.9 0 0 1 5.94 6m12.12-3a6.6 6.6 0 0 0-4.58 1.87L12 6.31l-1.48-1.44A6.6 6.6 0 0 0 5.94 3c-1.33 0-2.65.42-3.73 1.29a5.8 5.8 0 0 0-.44 8.72s6.29 7.01 8.48 9.26c.47.49 1.11.73 1.75.73s1.28-.24 1.75-.73c2.19-2.25 8.48-9.26 8.48-9.26a5.8 5.8 0 0 0-.44-8.72A6 6 0 0 0 18.06 3"></path>
                                                                              </svg>
                                                                            ) : (
                                                                              <div
                                                                                className="h-[16px] w-[16px] box-border cursor-pointer"
                                                                                style={{
                                                                                  backgroundImage: `url(https://s.pinimg.com/webapp/commentLoved-7942dc4f.svg)`,
                                                                                }}
                                                                              ></div>
                                                                            )}
                                                                          </div>
                                                                        </div>
                                                                        <div className="mx-[2px]">
                                                                          <div
                                                                            className="w-full cursor-pointer S9z"
                                                                            role="button"
                                                                          >
                                                                            <span className="text-left text-customColor-color_text_subtle break-words font-semibold text-[14px] iFc">
                                                                              {commentDetail.likeCount.toString()}
                                                                            </span>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                    <div className="mx-[10px]"></div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            {commentDetail.children &&
                                                              commentDetail.children.map(
                                                                (item) => {
                                                                  return (
                                                                    <div
                                                                      className="flex flex-row mt-4 ml-12"
                                                                      key={
                                                                        item.id
                                                                      }
                                                                    >
                                                                      <div className="mr-2 box-border">
                                                                        <a href="/">
                                                                          <div className="relative h-[32px] w-[32px] rounded-[50%]">
                                                                            <img
                                                                              src={
                                                                                item.creatorImage
                                                                              }
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
                                                                                        href={
                                                                                          item.creatorUrl
                                                                                        }
                                                                                        className=" font-semibold iFc inline-block text-[16px] break-words"
                                                                                      >
                                                                                        {
                                                                                          item.creatorUserName
                                                                                        }
                                                                                      </a>
                                                                                    </span>
                                                                                    <span className="text-left break-words font-normal iFc text-[16px]">
                                                                                      <span className=" font-normal iFc inline-block text-[16px] break-words">
                                                                                        &#160;
                                                                                        {
                                                                                          item.content
                                                                                        }
                                                                                      </span>
                                                                                    </span>
                                                                                  </span>
                                                                                </div>
                                                                              </span>
                                                                            </div>
                                                                          </div>
                                                                        </div>
                                                                        <div className="justify-between items-center relative flex flex-row cursor-auto">
                                                                          <div className="items-center flex flex-row">
                                                                            <div className="mx-[10px]">
                                                                              <div className="text-left text-customColor-color_text_subtle break-words font-normal text-[14px] iFc">
                                                                                {formatCreatedAt(
                                                                                  item.createdAt
                                                                                )}
                                                                              </div>
                                                                            </div>
                                                                            <div
                                                                              className="mx-[10px]"
                                                                              onClick={() =>
                                                                                handlerReplyComment(
                                                                                  commentDetail.id
                                                                                )
                                                                              }
                                                                            >
                                                                              <div
                                                                                className="w-full cursor-pointer S9z"
                                                                                role="button"
                                                                              >
                                                                                <div className="text-left text-customColor-color_text_subtle break-words font-semibold text-[14px] iFc">
                                                                                  Trả
                                                                                  lời
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="mx-[10px]">
                                                                              <div className="items-center flex flex-row cursor-auto">
                                                                                <div className="mx-[2px]">
                                                                                  <div
                                                                                    className="w-full cursor-pointer S9z"
                                                                                    role="button"
                                                                                    onClick={(
                                                                                      e
                                                                                    ) =>
                                                                                      handlerLikeComment(
                                                                                        e,
                                                                                        item
                                                                                      )
                                                                                    }
                                                                                  >
                                                                                    {item.likes &&
                                                                                    item.likes.some(
                                                                                      (
                                                                                        like: Like
                                                                                      ) =>
                                                                                        like.userId ===
                                                                                        session
                                                                                          ?.user
                                                                                          ?.id
                                                                                    ) ? (
                                                                                      <div
                                                                                        className="h-[16px] w-[16px] box-border cursor-pointer"
                                                                                        style={{
                                                                                          backgroundImage: `url(https://s.pinimg.com/webapp/commentLoved-7942dc4f.svg)`,
                                                                                        }}
                                                                                      ></div>
                                                                                    ) : (
                                                                                      <svg
                                                                                        className="h-[16px] w-[16px] text-customColor-color_text_subtle"
                                                                                        viewBox="0 0 24 24"
                                                                                        aria-hidden="true"
                                                                                        aria-label=""
                                                                                        role="img"
                                                                                      >
                                                                                        <path d="M5.94 6c.92 0 1.83.37 2.49 1.02l1.48 1.44L12 10.5l2.09-2.04 1.48-1.44A3.6 3.6 0 0 1 18.06 6c.49 0 1.2.11 1.85.63a2.8 2.8 0 0 1 .23 4.23l-.07.07-.07.08c-.06.07-5.59 6.22-8 8.75-2.41-2.54-7.94-8.69-8-8.75l-.06-.08-.08-.07A2.8 2.8 0 0 1 3 8.71 2.9 2.9 0 0 1 5.94 6m12.12-3a6.6 6.6 0 0 0-4.58 1.87L12 6.31l-1.48-1.44A6.6 6.6 0 0 0 5.94 3c-1.33 0-2.65.42-3.73 1.29a5.8 5.8 0 0 0-.44 8.72s6.29 7.01 8.48 9.26c.47.49 1.11.73 1.75.73s1.28-.24 1.75-.73c2.19-2.25 8.48-9.26 8.48-9.26a5.8 5.8 0 0 0-.44-8.72A6 6 0 0 0 18.06 3"></path>
                                                                                      </svg>
                                                                                    )}
                                                                                  </div>
                                                                                </div>
                                                                                <div className="mx-[2px]">
                                                                                  <div
                                                                                    className="w-full cursor-pointer S9z"
                                                                                    role="button"
                                                                                  >
                                                                                    <span className="text-left text-customColor-color_text_subtle break-words font-semibold text-[14px] iFc">
                                                                                      {item.likeCount.toString()}
                                                                                    </span>
                                                                                  </div>
                                                                                </div>
                                                                              </div>
                                                                            </div>
                                                                            <div className="mx-[10px]"></div>
                                                                          </div>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  );
                                                                }
                                                              )}
                                                            {/* reply */}
                                                            {replyingToComment ===
                                                              commentDetail.id && (
                                                              <div className="ml-[48px] box-border mt-3 cursor-auto bg-red-500">
                                                                <ReplyComment
                                                                  postId={
                                                                    Post?.id ??
                                                                    ""
                                                                  }
                                                                  commentId={
                                                                    commentDetail?.id ??
                                                                    ""
                                                                  }
                                                                  updateCommentList={
                                                                    handleUpdateReplyComment
                                                                  }
                                                                />
                                                              </div>
                                                            )}
                                                          </div>
                                                        )
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
                                <div className="bottom-0 z-1 sticky cursor-auto">
                                  <div className="mx-0 box-border cursor-auto">
                                    <div className="px-8 py-2 bg-white cursor-auto">
                                      <div className="flex flex-col m-0">
                                        <ReactComponent
                                          id={Post?.id ?? ""}
                                          reactCount={reactCount ?? 0}
                                          reactList={reactList ?? []}
                                          onCountUpdate={handleCountUpdate}
                                        />
                                        <div className="mb-3 mt-0">
                                          <div className="flex flex-row justify-center m-0">
                                            <div className="mr-2 flex items-end flex-row">
                                              <div className="h-[48px] w-[48px] rounded-[50%] relative">
                                                <div className=" rounded-[50%] relative">
                                                  <img
                                                    src={
                                                      session?.user?.image ||
                                                      "/icons8-cat-64.png"
                                                    }
                                                    alt=""
                                                    className="rounded-[50%] w-full"
                                                  />
                                                </div>
                                              </div>
                                            </div>
                                            <div className=" focus-within:bg-white bg-customColor-color_background_button_secondary_default rounded-[24px] border-solid border-customColor-color_gray_roboflow_200 border-[2px] flex flex-auto">
                                              <div className="rounded-none w-full cursor-pointer">
                                                <div className=" justify-center flex flex-row h-full">
                                                  <div className="min-h-[48px] flex-auto justify-between flex flex-row">
                                                    <div className="py-[15px] pl-[1px] cursor-pointer mx-4 flex-auto flex flex-col">
                                                      <div className=" box-border block cursor-pointer">
                                                        <input
                                                          type="text"
                                                          placeholder="Thêm nhận xét"
                                                          className="outline-none bg-customColor-color_background_button_secondary_default focus:bg-white w-full"
                                                          value={commentValue}
                                                          onChange={(e) =>
                                                            setCommentValue(
                                                              e.target.value
                                                            )
                                                          }
                                                        />
                                                      </div>
                                                    </div>
                                                    <div className="py-[6px] pr-[6px] justify-center items-center flex flex-row cursor-pointer">
                                                      <div className="rounded-[50%] justify-center box-border flex flex-row">
                                                        <div className="absolute top-[-380px]">
                                                          {emojiPicker && (
                                                            <EmojiPicker
                                                              className=" relative"
                                                              onEmojiClick={
                                                                handleEmojiClick
                                                              }
                                                            />
                                                          )}
                                                        </div>
                                                        <div
                                                          className="text-[24px] h-[40px] w-[40px] justify-center items-center flex flex-row"
                                                          onClick={() =>
                                                            setEmojiPicker(
                                                              (prev) => !prev
                                                            )
                                                          }
                                                        >
                                                          😃
                                                        </div>
                                                        {commentValue && (
                                                          <div className="m-[2px] cursor-pointer">
                                                            <button
                                                              className="p-0"
                                                              type="button"
                                                              onClick={
                                                                handlerSubmit
                                                              }
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
                                  </div>
                                </div>
                              </div>
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
          {/* <div className=""></div> */}
        </div>
      </div>
    </>
  );
};

export default PostId;
