const ProfilePage = ({ params }: { params: { username: string } }) => {
  return (
    <div className="snap-y snap-mandatory h-[calc(100vh-5rem)] overflow-auto no-scrollbar">
      <div className="snap-center flex h-[calc(100vh-5rem)] justify-center items-center bg-red-300">
        01
      </div>
      <div className="snap-center h-[calc(100vh-5rem)] justify-center items-center bg-customColor-rgb_255_253_146 grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-grow flex-shrink justify-center items-center ">
          <div className="h-[611px] w-[537px] relative">
            <a href="#" className="h-full cursor-pointer">
              <div className="top-0 right-[15px] absolute">
                <div className="w-[178px] h-[218px]">
                  <div className="h-full relative">
                    <img
                      src="/home-page2-01.png"
                      alt="công thức món gà sốt cam"
                    />
                  </div>
                </div>
              </div>
              <div className="top-[150px] left-0 absolute">
                <div className="w-[204px] h-[285px]">
                  <div className="h-full relative">
                    <img src="/home-page2-03.png" alt="công thức món gà" />
                  </div>
                </div>
              </div>
              <div className="right-0 bottom-0 absolute">
                <div className="w-[164px] h-[258px]">
                  <div className="h-full relative">
                    <img src="/home-page2-04.png" alt="công thức món gà" />
                  </div>
                </div>
              </div>
              <div className="top-[88px] left-[148px] absolute">
                <div className="w-[298px] h-[456px]">
                  <div className="h-full relative">
                    <img src="/home-page2-02.png" alt="công thức món gà" />
                  </div>
                </div>
              </div>
              <div className="top-[231px] left-[103px] h-[100px] w-[316px] bg-white absolute rounded-full justify-center items-center flex flex-row cursor-pointer">
                <img
                  src="/icons8-search.svg"
                  alt="search"
                  className="w-[24px] h-[24px"
                />
                <div className="text-left text-black font-normal text-[16px]">
                  <div className="text-[24px] text-customColor-rgb_110_15_60 font-bold text-center ml-2">
                    bữa tối với món gà dễ làm
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="h-1/2 w-full justify-center items-center flex flex-col">
          <div className="font-normal text-[16px] justify-start">
            <div className="text-[60px] text-customColor-rgb_195_25_82 font-bold">
              Tìm kiếm ý tưởng
            </div>
          </div>
          <div className="text-black font-normal text-[16px]">
            <div className="text-[24px] text-customColor-rgb_195_25_82 font-normal max-w-[400px] text-center mt-4">
              Bạn muốn thử điều gì tiếp theo? Hãy nghĩ về ý tưởng bạn yêu
              thích—như "bữa tối với món gà dễ làm"—và xem bạn tìm thấy gì.
            </div>
          </div>
          <div className="justify-center items-center mb-12 mt-6 px-4 flex flex-row">
            <a
              href="/"
              className="rounded-full min-w-[60px] justify-center items-center min-h-12 px-4 py-3 Il7"
            >
              <div className="justify-center items-center flex flex-row px-[-4px]">
                <div className="text-white text-[16px] items-center font-semibold">
                  Khám phá
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="snap-center flex h-[calc(100vh-5rem)] justify-center items-center bg-green-300">
        3
      </div>
      <div className="snap-center flex h-[calc(100vh-5rem)] justify-center items-center bg-pink-300">
        4
      </div>
      <div className="snap-center flex h-[calc(100vh-5rem)] justify-center items-center bg-red-300">
        5
      </div>
    </div>
  );
};

export default ProfilePage;
