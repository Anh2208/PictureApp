"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

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
                      <div key={index} className="h-auto mt-2 w-[236px]">
                        <div className=" rounded-[16px] h-full relative flex flex-col box-border overflow-hidden">
                          <div className=" rounded-[16px] relative overflow-hidden"></div>
                          <Link
                            href={`/pin/${post.id}`}
                            passHref
                            className="rounded-[8px]"
                          >
                            {/* <a className="rounded-[8px]"> */}
                            <div className="min-h-[55px]">
                              <div className="min-h-[120px] items-center flex flex-row m-0 cursor-zoom-in">
                                <div className="relative cursor-zoom-in">
                                  {post.images.substring(
                                    post.images.lastIndexOf(".") + 1
                                  ) != "mp4" ? (
                                    <img
                                      src={post.images}
                                      alt={post.title}
                                      className=" w-full cursor-zoom-in rounded-[16px]"
                                    />
                                  ) : (
                                    <video
                                      src={post.images}
                                      autoPlay
                                      className="autoplay"
                                      muted
                                      loop
                                    />
                                  )}
                                </div>
                              </div>
                            </div>
                            {/* </a> */}
                          </Link>
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

// export default HomePageLoggedIn;
