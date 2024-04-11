"use client";

import { useEffect, useState } from "react";

interface PostData {
  id: string;
  title: string;
  images: string;
  description: string;
  link: string;
}

const getData = async (): Promise<PostData[]> => {
  const res = await fetch(`http://localhost:3000/api/post`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const HomePageLoggedIn = () => {
  const [postData, setPostData] = useState<PostData[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        if (response) {
          setPostData(response);
        } else {
          // Handle the case when the response is empty
        }
      } catch (error) {
        throw new Error("Fetch post data failed");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pt-[80px] box-border block">
        <div className="pb-[24px] box-border block">
          <div className="box-border block">
            <div className="mb-0 mt-0 block">
              <div className="w-full">
                <div className=" 2xl:columns-6 xl:columns-5 lg:columns-4 md:columns-3 sm:columns-2 h-auto relative mx-[10px] my-0">
                  {postData &&
                    postData.map((post, index) => (
                      <div
                        key={index}
                        className="h-auto mt-2 w-[236px]"
                        // style={{ transform: `translate(auto, 0)` }}
                      >
                        <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                          <div className=" rounded-[16px] relative overflow-hidden"></div>
                          <a href={post.link} className="rounded-[8px]">
                            <div className="min-h-[55px]">
                              <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                                <div className="relative cursor-zoom-in">
                                  <img
                                    src={post.images}
                                    alt={post.title}
                                    className=" w-full cursor-zoom-in rounded-[16px]"
                                  />
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageLoggedIn;

{
  /* <div className="transform translate-x-[271px] translate-y-0 h-auto top-0 left-0 absolute w-[236px]">
                    <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                      <div className=" rounded-[16px] relative overflow-hidden"></div>
                      <a href="/" className="bg-red-300 rounded-[8px]">
                        <div className="min-h-[55px]">
                          <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                            <div className=" bg-black relative cursor-zoom-in">
                              <img
                                src="https://i.pinimg.com/564x/55/46/fd/5546fdb5793a4ce561736872d6be30de.jpg"
                                alt=""
                                className=" w-full cursor-zoom-in"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="transform translate-x-[523px] translate-y-0 h-auto top-0 left-0 absolute w-[236px]">
                    <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                      <div className=" rounded-[16px] relative overflow-hidden"></div>
                      <a href="/" className="bg-red-300 rounded-[8px]">
                        <div className="min-h-[55px]">
                          <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                            <div className=" bg-black relative cursor-zoom-in">
                              <img
                                src="https://i.pinimg.com/564x/55/46/fd/5546fdb5793a4ce561736872d6be30de.jpg"
                                alt=""
                                className=" w-full cursor-zoom-in"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="transform translate-x-[775px] translate-y-0 h-auto top-0 left-0 absolute w-[236px]">
                    <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                      <div className=" rounded-[16px] relative overflow-hidden"></div>
                      <a href="/" className="bg-red-300 rounded-[8px]">
                        <div className="min-h-[55px]">
                          <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                            <div className=" bg-black relative cursor-zoom-in">
                              <img
                                src="https://i.pinimg.com/564x/55/46/fd/5546fdb5793a4ce561736872d6be30de.jpg"
                                alt=""
                                className=" w-full cursor-zoom-in"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="transform translate-x-[1027px] translate-y-0 h-auto top-0 left-0 absolute w-[236px]">
                    <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                      <div className=" rounded-[16px] relative overflow-hidden"></div>
                      <a href="/" className="bg-red-300 rounded-[8px]">
                        <div className="min-h-[55px]">
                          <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                            <div className=" bg-black relative cursor-zoom-in">
                              <img
                                src="https://i.pinimg.com/564x/55/46/fd/5546fdb5793a4ce561736872d6be30de.jpg"
                                alt=""
                                className=" w-full cursor-zoom-in"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="transform translate-x-[1279px] translate-y-0 h-auto top-0 left-0 absolute w-[236px]">
                    <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                      <div className=" rounded-[16px] relative overflow-hidden"></div>
                      <a href="/" className="bg-red-300 rounded-[8px]">
                        <div className="min-h-[55px]">
                          <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                            <div className=" bg-black relative cursor-zoom-in">
                              <img
                                src="https://i.pinimg.com/564x/55/46/fd/5546fdb5793a4ce561736872d6be30de.jpg"
                                alt=""
                                className=" w-full cursor-zoom-in"
                              />
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div> */
}
