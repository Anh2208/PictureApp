export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto no-scrollbar">
      {/* Home Page when not logged in */}
      {/* snap 01 */}
      <div className="snap-center flex h-[calc(100vh-5rem)] justify-center items-center bg-red-300">
        01
      </div>

      {/* snap 02 */}
      <div className="snap-center h-screen justify-center items-center bg-customColor-rgb_255_253_146 grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="h-full w-full flex flex-row justify-center items-center">
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
                    <div className="text-[24px] text-customColor-rgb_110_15_60 font-bold text-center iFc ml-2 leading-8">
                      bữa tối với món gà dễ làm
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="h-full justify-center flex flex-col pt-[80px]">
          <div className="h-1/2 w-full justify-center items-center flex flex-col">
            <div className="font-normal text-[16px] justify-start">
              <div className="text-[60px] text-customColor-rgb_195_25_82 font-bold iFc leading-[80px]">
                Tìm kiếm ý tưởng
              </div>
            </div>
            <div className="text-black font-normal text-[16px]">
              <div className="text-[24px] text-customColor-rgb_195_25_82 font-normal max-w-[400px] text-center mt-4 iFc leading-8">
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
                  <div className="text-white text-[16px] items-center font-semibold iFc">
                    Khám phá
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* snap 03 */}
      <div className="snap-center h-screen w-screen justify-center relative items-center bg-customColor-rgb_218_255_246 grid lg:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-grow justify-center items-center w-full pt-[80px]">
          <div className="h-1/2 w-full justify-center items-center flex flex-col">
            <div className="items-left font-normal text-[16px]">
              <div className="text-customColor-rgb_0_107_108 text-[60px] font-bold items-center leading-[80px] iFc">
                Lưu ý tưởng bạn thích
              </div>
            </div>
            <div className="max-w-[375px] items-start items-left font-normal text-[16px] mt-[16px]">
              <div className="text-customColor-rgb_0_107_108 text-[24px] text-center iFc leading-8">
                Thu thập nội dung bạn yêu thích để bạn có thể quay lại xem sau.
              </div>
            </div>
            <div className="justify-center items-center mb-12 mt-6 px-4 flex flex-row">
              <a
                href="/"
                className="rounded-full min-w-[60px] justify-center items-center min-h-12 px-4 py-3 Il7"
              >
                <div className="justify-center items-center flex flex-row px-[-4px]">
                  <div className="text-white text-[16px] items-center font-semibold iFc">
                    Khám phá
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-screen items-center relative px-0 mt-0 flex flex-row">
          <div className="mt-[80px] h-[695px] w-[687px] relative">
            {/* Image 01 */}
            <div className="top-0 left-[10px] absolute">
              <a
                href="https://s.pinimg.com/webapp/future-home-vibes-adb19e98.png"
                className="h-full cursor-pointer"
              >
                <div className="w-[400px] h-[420px] rounded-[32px] relative">
                  <img
                    src="https://s.pinimg.com/webapp/future-home-vibes-adb19e98.png"
                    alt="cảm hứng về ngôi nhà tương lai"
                  />
                </div>
                <div className="h-full top-[10%] absolute px-0">
                  <div className="h-full ml-[40px] mr-8 mb-0 justify-center flex flex-col">
                    <div className="text-[56px] font-medium text-white iFc leading-snug">
                      Dương xỉ trang trí
                    </div>
                    <div className="flex flex-row mx-[-4px] my-0">
                      {/* <div className="ml-1 mr-1 mt-0 mb-0 flex flex-row"> */}
                      <div className="mx-[4px] my-0">
                        <div className="w-[90px] h-[130px] relative">
                          <img
                            src="https://s.pinimg.com/webapp/future-home1-b8bc36e8.png"
                            alt="cảm hứng giường ngủ cho ngôi nhà tương lai"
                          />
                        </div>
                      </div>
                      <div className="mx-[4px] my-0">
                        <div className="w-[90px] h-[130px] relative">
                          <img
                            src="https://s.pinimg.com/webapp/future-home2-31c812cc.png"
                            alt="cảm hứng ghế trường kỷ cho ngôi nhà tương lai"
                          />
                        </div>
                      </div>
                      <div className="mx-[4px] my-0">
                        <div className="w-[90px] h-[130px] relative">
                          <img
                            src="https://s.pinimg.com/webapp/future-home3-037e8d49.png"
                            alt="cảm hứng phòng khách cho ngôi nhà tương lai"
                          />
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </a>
            </div>
            {/* Image 02 */}
            <div className="top-0 left-[464px] absolute">
              <a href="#" className="h-full cursor-pointer">
                <div className="flex flex-col justify-end mx-0 my-0 cursor-pointer">
                  <div className="w-[223px] h-[235px] rounded-[32px] relative">
                    <img
                      src="https://s.pinimg.com/webapp/scandinavian-bedroom-696dfba5.png"
                      alt="phòng ngủ phong cách scandinavia"
                    />
                  </div>
                  <div className="text-white font-medium text-[28px] absolute p-6 cursor-pointer iFc leading-9">
                    Phòng ngủ phong cách Scandinavia
                  </div>
                </div>
              </a>
            </div>
            {/* Image 03 */}
            <div className="top-[280px] left-[447px] absolute">
              <a href="#" className="h-full cursor-pointer">
                <div className="flex flex-col justify-end mx-0 my-0 cursor-pointer">
                  <div className="w-[165px] h-[173px] rounded-[32px] relative">
                    <img
                      src="https://s.pinimg.com/webapp/deck-of-dreams-205a139e.png"
                      alt="sân hiên trong mơ"
                    />
                  </div>
                  <div className="text-white font-medium text-[20px] absolute pt-0 pr-[22px] pb-[24px] pl-[16px] cursor-pointer iFc leading-6">
                    Sân hiên trong mơ
                  </div>
                </div>
              </a>
            </div>
            {/* Image 04 */}
            <div className="top-[500px] left-[429px] absolute">
              <a href="#" className="h-full cursor-pointer">
                <div className="flex flex-col justify-end mx-0 my-0 cursor-pointer">
                  <div className="w-[223px] h-[235px] rounded-[32px] relative">
                    <img
                      src="https://s.pinimg.com/webapp/bathroom-upgrade-02599fd4.png"
                      alt="nâng cấp phòng tắm"
                    />
                  </div>
                  <div className="text-white font-medium text-[28px] absolute p-6 mb-6 cursor-pointer iFc leading-9">
                    Nâng cấp phòng tắm
                  </div>
                </div>
              </a>
            </div>
            {/* Image 05 */}
            <div className="top-[460px] left-[159px] absolute">
              <a href="#" className="h-full cursor-pointer">
                <div className="flex flex-col justify-end mx-0 my-0 cursor-pointer">
                  <div className="w-[223px] h-[235px] rounded-[32px] relative">
                    <img
                      src="https://s.pinimg.com/webapp/serve-my-drinks-4de83489.png"
                      alt="phục vụ đồ uống"
                    />
                  </div>
                  <div className="text-white font-medium text-[28px] absolute p-8 cursor-pointer iFc leading-9">
                    Đồ uống phong cách
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* snap 04 */}
      <div className="snap-center h-screen justify-center items-center bg-customColor-rgb_255_253_146 grid lg:grid-cols-2 sm:grid-cols-1">
        4
      </div>
      {/* snap 05 */}
      <div className="snap-center flex h-[calc(100vh-5rem)] justify-center items-center bg-red-300">
        5
      </div>
    </div>
  );
}
