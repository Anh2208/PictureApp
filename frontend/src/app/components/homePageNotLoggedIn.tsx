"use client";
import { useRef, useState } from "react";
import { createRef, RefObject } from "react";

const links_bottom = [
  { url: "/1", name: "Điều khoản Dịch vụ" },
  { url: "/2", name: "Chính sách Quyền riêng tư" },
  { url: "/3", name: "Trợ giúp" },
  { url: "/4", name: "Ứng dụng cho iPhone" },
  { url: "/5", name: "Ứng dụng cho Android" },
  { url: "/6", name: "Người dùng" },
  { url: "/7", name: "Bộ sưu tập" },
  { url: "/8", name: "Mua sắm" },
  { url: "/9", name: "Hôm nay" },
  { url: "/10", name: "Khám phá" },
];

const image_01 = [
  {
    number: "1",
    margin: "mt-0",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/e3/41/4b/e3414b2fcf00375a199ba6964be551af.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/78/6e/00/786e00eab219eca59803d118fbe0feb3.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/236x/3b/42/b0/3b42b02bf047097582b26401df90cdb3.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/236x/de/13/6b/de136b0fa0037d3453a430895d8a5c27.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/236x/15/bf/41/15bf41a80a0ffb41cc9d0fd98abed34b.jpg",
        alt: "image",
      },
    ],
  },
  {
    number: "2",
    margin: "mt-[160px]",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/c4/57/bd/c457bd9496170bfa3845b7cee775df65.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/05/65/20/05652045e57af33599557db9f23188c0.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/236x/c5/83/53/c58353e15f32f3cbfc7cdcbcf0dc2f34--mango-coulis-m-sorry.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/564x/94/43/b9/9443b93bd8773fec91bc1837e8424e8e.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/564x/e6/8a/42/e68a42c2e530fbdf6b3ab2f379dcd384.jpg",
        alt: "image",
      },
    ],
  },
  {
    number: "3",
    margin: "mt-[240px]",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/95/f3/73/95f373590dad79bcf3202ce6edad5bcd.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/e7/c6/c6/e7c6c65c6e38f43d4b979d3cb1e46bf7.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/236x/fb/18/de/fb18deb4959e9a0678e1bf99105ea775.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/564x/c5/61/c2/c561c2a77d5b9b03702efc423b18cb9a.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/564x/64/cf/21/64cf2184d33446c4cf1cc8c3c585b9f4.jpg",
        alt: "image",
      },
    ],
  },
  {
    number: "4",
    margin: "mt-[400px]",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/06/e8/14/06e814c8c5c82b9bf794add896616e12.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/62/bb/97/62bb9727b2e09751d43c32589c503b39.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/564x/a9/f9/09/a9f90926afdfbff79f6d2a017c8e19dd.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/564x/96/2c/ce/962cce1d513d665ecca6eb733a90a160.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/564x/af/60/9e/af609e357a691876ac58d02e27af316e.jpg",
        alt: "image",
      },
    ],
  },
  {
    number: "5",
    margin: "mt-[240px]",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/d5/5f/97/d55f97078c0d7b60b758cac3b34114c9.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/22/45/e2/2245e261944f1eae080423f6ff7805e1--romantic-picnics-romantic-ideas.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/236x/65/df/cd/65dfcdd2fc433d45baedb3666cacfd82.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/564x/28/77/f4/2877f4e254c0bd27ac4f4c5d8a43404f.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/564x/8b/21/b0/8b21b0133442afd03d2c5e9a998c96b3.jpg",
        alt: "image",
      },
    ],
  },
  {
    number: "6",
    margin: "mt-[160px]",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/48/9c/d9/489cd9ae5fec17977c73677866202d59.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/14/73/0a/14730af41a58e05384b86b0bacf9d57b.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/236x/16/36/dd/1636dd650e6289cd0ec4f4f06dea7835--british-recipes-the-great-british-bake-off-recipes.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/564x/da/fe/1e/dafe1e26613892b2bc26508b33de353d.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/564x/f3/9c/11/f39c11819b48bf4dc34fa1670fb1fef6.jpg",
        alt: "image",
      },
    ],
  },
  {
    number: "7",
    margin: "mt-0",
    array: [
      {
        number: "1",
        url: "https://i.pinimg.com/236x/d4/32/cd/d432cdc35cf6cc5c7ec07a5036a87bca.jpg",
        alt: "image",
      },
      {
        number: "2",
        url: "https://i.pinimg.com/236x/c1/d0/7f/c1d07f45a5c2b121255ba9ec54b9adf7.jpg",
        alt: "image",
      },
      {
        number: "3",
        url: "https://i.pinimg.com/236x/18/dc/f7/18dcf759aa96740f8d335dc6231a9cf9.jpg",
        alt: "image",
      },
      {
        number: "4",
        url: "https://i.pinimg.com/564x/63/3e/c1/633ec1128e0b7ed911c462cb89620c64.jpg",
        alt: "image",
      },
      {
        number: "5",
        url: "https://i.pinimg.com/564x/4f/df/82/4fdf820192314371138c0f4f999cdddc.jpg",
        alt: "image",
      },
    ],
  },
];

const HomePageNotLoggedIn = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };
  const snap1Ref = createRef<HTMLDivElement>();
  const snap2Ref = createRef<HTMLDivElement>();
  const snap5Ref = createRef<HTMLDivElement>();

  const scrollToSnap = (snapRef: RefObject<HTMLDivElement>) => {
    snapRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="snap-y snap-mandatory h-screen overflow-auto no-scrollbar">
      {/* Home Page when not logged in */}
      {/* snap 01 */}
      <div
        id="snap1"
        ref={snap1Ref}
        className="snap-center h-screen justify-center items-center bg-customColor-rgb_255_253_146 relative scroll"
      >
        <div className="h-screen bg-white">
          {/* top */}
          <div className="h-[calc(140px+30vh)] justify-end items-center flex flex-col m-0">
            <div className="text-left break-words font-normal iFc text-[16px]">
              <div className="m-[2px] text-[60px] font-semibold text-center break-words leading-[80px]">
                Xem ý tưởng tiếp theo
              </div>
            </div>
            <div className="h-[60px] w-[65%] justify-center items-center mb-8 mt-4 flex flex-row">
              <div className="text-left break-words font-normal iFc text-[16px]">
                <p className="text-[60px] font-semibold text-center w-full left-0 text-customColor-rgb_194_139_0 m-0 iFc leading-[80px]">
                  ý tưởng bữa tối cuối tuần
                </p>
              </div>
            </div>
            <div className="z-1 text-[12px]">
              <ul className="flex m-0 p-0">
                <li className="p-0">
                  <button className="h-[10px] p-[5px] inline-block bg-customColor-rgb_194_139_0 rounded-[50px] m-[6px]" />
                </li>
                <li className="p-0">
                  <button className="h-[10px] p-[5px] inline-block bg-customColor-rgb_97_140_123 rounded-[50px] m-[6px]" />
                </li>
                <li className="p-0">
                  <button className="h-[10px] p-[5px] inline-block bg-customColor-rgb_0_118_211 rounded-[50px] m-[6px]" />
                </li>
                <li className="p-0">
                  <button className="h-[10px] p-[5px] inline-block bg-customColor-rgb_64_122_87 rounded-[50px] m-[6px]" />
                </li>
              </ul>
            </div>
          </div>
          {/* middle */}
          <div className="h-[70vh] left-0 bottom-0 right-0 overflow-hidden absolute">
            <div className="items-center flex flex-col m-0">
              <div className="h-full w-[1750px] relative mt-6">
                <div className="top-[20%] left-auto right-auto w-[1750px] absolute flex flex-row">
                  {image_01.map((list) => (
                    <div
                      className={`w-[calc(3/12*100%)] ${list.margin}`}
                      key={list.number}
                    >
                      {/* <div className={list.margin} key={list.number}> */}
                      {list.array.map((image) => (
                        <div
                          className="animate-translate-y opacity-1 object-cover overflow-visible transform translate-y-[-40px]"
                          key={image.number}
                        >
                          <div className="h-[350px] w-[236px] mx-2 my-4 rounded-[16px] relative overflow-hidden">
                            <div className="h-full relative">
                              <img
                                src={image.url}
                                alt={image.alt}
                                className="absolute object-cover block w-full h-full"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* </div> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="left-0 bottom-0 right-0 absolute h-[200px]">
            <div className="left-0 bottom-0 right-0 absolute">
              <div className="w-full items-center flex flex-col m-0">
                <div className="bouncing-arrow">
                  <div className="rounded-none cursor-pointer">
                    <div className="h-[48px] w-[48px] bg-customColor-rgb_194_139_0 mb-4 flex flex-row justify-center items-center rounded-[50%]">
                      <a href="#" onClick={() => scrollToSnap(snap5Ref)}>
                        <img src="/icons8-down-96.png" alt="icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="h-[60px] w-full bg-customColor-rgb_255_253_146 items-center py-0 flex flex-row">
                  <div className="rounded-none w-full cursor-pointer">
                    <div className="justify-center items-center flex flex-row my-0">
                      <div className="mx-[2px] my-0">
                        <div className="text-left text-black break-words font-semibold text-[16px] iFc">
                          <a href="#" onClick={() => scrollToSnap(snap2Ref)}>
                            Đây là cách thức hoạt động
                          </a>
                        </div>
                      </div>
                      <div className="mx-[2px] my-0">
                        <img
                          src="/icons8-down-100.png"
                          alt="icon"
                          className="h-[12px] w-[12px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* snap 02 */}
      <div
        id="snap2"
        ref={snap2Ref}
        className="snap-center h-screen justify-center items-center bg-customColor-rgb_255_253_146 grid lg:grid-cols-2 sm:grid-cols-1"
      >
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
      <div className="snap-center h-screen justify-center items-center bg-customColor-rgb_255_226_235 grid lg:grid-cols-2 sm:grid-cols-1">
        {/* left */}
        <div className="h-full w-full flex flex-row mx-0 my-0">
          <div className="h-screen w-full relative">
            <a href="#" className="cursor-pointer h-full">
              <div className="h-full relative cursor-pointer">
                <img
                  src="/home-page4-01.png"
                  alt="Mỹ đỗ toa"
                  className="h-full max-w-full object-cover"
                />
              </div>
              <div className="bottom-[96px] left-[84px] absolute">
                <div className="flex flex-col mx-0 my-0">
                  <div className="relative ">
                    <div className="h-[383px] w-[215px]">
                      <div className="h-[383px] w-[215px] rounded-2xl relative">
                        <div className="h-full relative">
                          <img
                            src="https://s.pinimg.com/webapp/creator-pin-img-3bed5463.png"
                            alt="hình ảnh Ghim của người tạo"
                            className=" absolute h-full rounded-2xl"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="left-[-36px] bottom-[-36px] w-[96px] absolute">
                      <div className="w-full relative">
                        <div className="relative bg-white rounded-[50%] pb-[100%]">
                          <img
                            src="https://s.pinimg.com/webapp/creator-avatar-262dfeba.png"
                            alt="angelachu"
                            className="absolute h-auto w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-12 mr-0 mt-1">
                    <div className="w-[125px] flex flex-col items-end mx-0 my-0">
                      <span className="items-start text-white font-semibold iFc text-[16px] leading-[21px]">
                        Scout the City
                      </span>
                      <span className="items-start text-white font-normal iFc text-[16px] leading-[22px]">
                        56,7 nghìn người theo dõi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* right */}
        <div className="pt-[80px] h-screen">
          <div className="h-full justify-center items-center flex flex-col mx-0 my-0">
            <div className="h-full w-full justify-center items-center flex flex-col mx-0 my-0">
              <div className="px-8">
                <div className=" text-black text-start break-words font-normal iFc text-[16px]">
                  <div className="text-[60px] text-customColor-rgb_195_47_0 font-bold items-center justify-center text-center w-[420px] leading-[80px]">
                    Xem, làm, thử, thực hiện
                  </div>
                </div>
                <div className="text-black text-start break-words font-normal iFc text-[16px]">
                  <div className="text-[24px] text-customColor-rgb_195_47_0 flex text-center items-center max-w-[420px] mt-[16px] leading-8">
                    Điều tuyệt nhất trên Pinterest là khám phá những nội dung và
                    ý tưởng mới từ mọi người khắp thế giới.
                  </div>
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
      </div>
      {/* snap 05 */}
      <div
        id="snap5"
        ref={snap5Ref}
        className="snap-center h-screen bg-white relative overflow-hidden"
      >
        <div className="relative h-screen">
          <div>
            <div className="h-screen w-full relative">
              {/* background image */}
              <div className="h-full w-full z-1 absolute">
                <div className="items-center flex flex-col mx-0 my-0">
                  <div className="flex flex-row mx-0 my-0 w-[1750px]">
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-0">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/e3/41/4b/e3414b2fcf00375a199ba6964be551af.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/78/6e/00/786e00eab219eca59803d118fbe0feb3.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/3b/42/b0/3b42b02bf047097582b26401df90cdb3.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/de/13/6b/de136b0fa0037d3453a430895d8a5c27.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/15/bf/41/15bf41a80a0ffb41cc9d0fd98abed34b.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-[-160px]">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/c4/57/bd/c457bd9496170bfa3845b7cee775df65.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/05/65/20/05652045e57af33599557db9f23188c0.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/c5/83/53/c58353e15f32f3cbfc7cdcbcf0dc2f34--mango-coulis-m-sorry.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/94/43/b9/9443b93bd8773fec91bc1837e8424e8e.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/e6/8a/42/e68a42c2e530fbdf6b3ab2f379dcd384.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-[-240px]">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/95/f3/73/95f373590dad79bcf3202ce6edad5bcd.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/e7/c6/c6/e7c6c65c6e38f43d4b979d3cb1e46bf7.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/fb/18/de/fb18deb4959e9a0678e1bf99105ea775.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/c5/61/c2/c561c2a77d5b9b03702efc423b18cb9a.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/64/cf/21/64cf2184d33446c4cf1cc8c3c585b9f4.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-[-400px]">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/06/e8/14/06e814c8c5c82b9bf794add896616e12.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/62/bb/97/62bb9727b2e09751d43c32589c503b39.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/a9/f9/09/a9f90926afdfbff79f6d2a017c8e19dd.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/96/2c/ce/962cce1d513d665ecca6eb733a90a160.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/af/60/9e/af609e357a691876ac58d02e27af316e.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-[-240px]">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/d5/5f/97/d55f97078c0d7b60b758cac3b34114c9.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/22/45/e2/2245e261944f1eae080423f6ff7805e1--romantic-picnics-romantic-ideas.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/65/df/cd/65dfcdd2fc433d45baedb3666cacfd82.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/28/77/f4/2877f4e254c0bd27ac4f4c5d8a43404f.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/8b/21/b0/8b21b0133442afd03d2c5e9a998c96b3.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-[-160px]">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/48/9c/d9/489cd9ae5fec17977c73677866202d59.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/14/73/0a/14730af41a58e05384b86b0bacf9d57b.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/16/36/dd/1636dd650e6289cd0ec4f4f06dea7835--british-recipes-the-great-british-bake-off-recipes.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/da/fe/1e/dafe1e26613892b2bc26508b33de353d.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/f3/9c/11/f39c11819b48bf4dc34fa1670fb1fef6.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[calc(3/12*100%)]">
                      <div className="mt-0">
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/d4/32/cd/d432cdc35cf6cc5c7ec07a5036a87bca.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/c1/d0/7f/c1d07f45a5c2b121255ba9ec54b9adf7.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/236x/18/dc/f7/18dcf759aa96740f8d335dc6231a9cf9.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/63/3e/c1/633ec1128e0b7ed911c462cb89620c64.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                        <div className="h-[350px] w-[236px] mr-2 ml-2 mb-4 mt-4 rounded-2xl">
                          <div className="h-full relative">
                            <img
                              src="https://i.pinimg.com/564x/4f/df/82/4fdf820192314371138c0f4f999cdddc.jpg"
                              alt="food"
                              className="object-cover h-full w-full absolute rounded-2xl"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* background color */}
              <div className="bg-black bg-opacity-60 w-full h-full z-2 absolute block"></div>
              {/* element in page */}
              <div className="h-full w-full z-3 justify-center text-center relative py-0 flex flex-col">
                <div className="h-full w-full justify-center items-center flex flex-row mx-0 my-0">
                  <div className="h-full w-full justify-center items-center flex flex-row">
                    <div className="w-[450px] justify-center items-center flex flex-row mx-0 my-0">
                      <div className="text-left text-black break-words font-normal text-[16px] iFc">
                        <h2 className="text-white w-full text-[70px] font-semibold m-0 text-left break-words iFc leading-[92px]">
                          Đăng ký để nhận thêm ý tưởng
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-full justify-center items-center flex flex-row mx-0 my-0">
                    <div className="bg-white rounded-[32px] relative text-center m-auto w-[484px] min-h-0">
                      <div className=" min-h-[400px] px-[10px] pt-[20px] pb-[24px]">
                        <div className="mx-auto mt-2 mb-2 h-[45px] w-[45px]">
                          <img
                            src="/logo-picbu.png"
                            alt="logo"
                            className="w-[40px] h-[40px]"
                          />
                        </div>
                        <div className="mt-0 mx-auto mb-[22px] w-[400px]">
                          <h1 className="text-black text-[32px] font-semibold tracking-[-1.2px] mx-4 my-0 break-keep iFc">
                            Welcome to Pinterest
                          </h1>
                        </div>
                        <div className="mx-auto mt-0 mb-[22px] w-[270px]">
                          <div className="mt-[-16px] mb-4">
                            <div className="text-black text-center break-words font-normal iFc text-[16px]">
                              Tìm những ý tưởng mới để thử
                            </div>
                          </div>
                        </div>
                        <div className="text-center my-0 mx-auto relative">
                          <div className="my-0 mx-auto w-[268px] text-center">
                            {/* line 1 */}
                            <div className="text-center">
                              <form>
                                <div className="mt-0 mb-1 ml-2">
                                  <label
                                    htmlFor="email"
                                    className=" cursor-pointer"
                                  >
                                    <div className=" break-words font-normal iFc text-[14px] text-left">
                                      Email
                                    </div>
                                  </label>
                                </div>
                                <div className="mb-[7px] text-center">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    autoComplete="email"
                                    className="px-4 py-3 rounded-2xl text-[16px] border-2 border-customColor-color_border_container w-full iFc"
                                  />
                                </div>
                                <div className="mt-0 mb-1 ml-2">
                                  <label
                                    htmlFor="password"
                                    className="cursor-pointer"
                                  >
                                    <div className="text-black break-words font-normal iFc text-[14px] text-left">
                                      Mật khẩu
                                    </div>
                                  </label>
                                </div>
                                <div className=" text-center">
                                  <span>
                                    <div className="text-center relative">
                                      <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Tạo mật khẩu"
                                        className="py-3 pl-4 pr-8 justify-center items-center rounded-2xl text-[16px] border-2 border-customColor-color_border_container w-full iFc"
                                      />
                                      <div className="absolute right-[10px] top-[18px]">
                                        <div className="h-full justify-center items-center">
                                          <img
                                            src="icons8-eye-60.png"
                                            alt="search"
                                            className="h-[20px] w-[20px]"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </span>
                                </div>
                                <div className="ml-2 mt-2 mb-1  relative">
                                  <div className="flex flex-row m-0">
                                    <div className="mr-2 text-center">
                                      <label
                                        htmlFor="date"
                                        className=" cursor-pointer"
                                      >
                                        <div className="text-left break-words iFc text-[14px]">
                                          Ngày sinh
                                        </div>
                                      </label>
                                    </div>
                                    <div className="relative">
                                      <span
                                        className="text-black cursor-pointer"
                                        onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                      >
                                        <img
                                          src="icons8-high-importance-48.png"
                                          alt="icon"
                                          className="w-[20px] h-[20px]"
                                        />
                                      </span>
                                      {showTooltip && (
                                        <div className="absolute z-10 w-[180px] left-0 ml-2 mt-1 p-2 bg-black rounded shadow-md">
                                          <p className="text-[12px] iFc text-left text-white leading-[15px]">
                                            Để giúp giữ cho Pinterest an toàn,
                                            chúng tôi đang cần ngày sinh của
                                            bạn. Ngày sinh cũng giúp chúng tôi
                                            cung cấp các đề xuất được cá nhân
                                            hóa nhiều hơn và quảng cáo có liên
                                            quan hơn. Chúng tôi không chia sẻ
                                            thông tin này và thông tin sẽ không
                                            hiển thị trên hồ sơ của bạn.
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="text-center">
                                  <span className="text-center">
                                    <div className="text-center relative">
                                      <div className="text-center relative">
                                        <input
                                          type="date"
                                          name="date"
                                          id="date"
                                          className="rounded-2xl py-3 px-4 text-[16px] border-2 border-customColor-color_border_container min-h-[48px] w-full"
                                        />
                                      </div>
                                    </div>
                                  </span>
                                </div>
                                <div className="text-center">
                                  <button className="h-[40px] inline-block rounded-[20px] py-0 px-[18px] text-[15px] font-bold cursor-pointer mt-2 align-middle text-center text-white w-full bg-customColor-color_red_pushpin_450 iFc">
                                    <div className="text-[15px]">Tiếp tục</div>
                                  </button>
                                </div>
                              </form>
                              <p className="my-2 text-center text-[14px] text-black font-bold">
                                HOẶC
                              </p>
                              <div className="mt-[10px] text-center text-[12px]">
                                <div className=" relative text-center">
                                  <button className="h-[40px] block rounded-[20px] pl-0 text-[15px] font-normal cursor-pointer mt-0 align-middle text-left w-full bg-customColor-rgb_24_119_242">
                                    <div className="m-0 flex flex-row">
                                      <div className="pt-[3px] pb-[3px] px-[3px] h-6 w-6 ml-1 rounded-[50%] bg-white">
                                        <img
                                          src="/facebook.png"
                                          alt="facebook"
                                        />
                                      </div>
                                      <span className="text-white inline-block iFc text-[16px] font-bold leading-[15px] mr-6 ml-[15px] pt-1 text-center align-text-bottom whitespace-normal w-[88%]">
                                        Tiếp tục với FaceBook
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                            {/* line 2 */}
                            <div className="mt-3 text-center">
                              <span className="text-[11px] font-normal text-center text-customColor-rgb_118_118_118 iFc ">
                                <span className="text-[11px] font-normal text-center text-customColor-rgb_118_118_118 iFc block">
                                  <span>
                                    Bằng cách tiếp tục, bạn đồng ý với &nbsp;
                                    <div className=" font-bold inline-block">
                                      <a href="/"> Điều khoản dịch vụ </a>
                                    </div>
                                    của Pinterest và xác nhận rằng bạn đã đọc
                                    <div className=" font-bold inline-block">
                                      <a href="/">Chính sách quyền riêng tư </a>
                                    </div>
                                    của chúng tôi
                                    <div className=" font-bold inline-block">
                                      <a href="/">Thông báo khi thu thập</a>
                                    </div>
                                  </span>
                                </span>
                              </span>
                            </div>
                            {/* line 3 */}
                            <div className="mt-3 text-center">
                              <div className="mr-auto justify-center items-center w-full mb-1 flex flex-row text-center">
                                <div className=" justify-center flex flex-row m-0 text-center">
                                  <div className="text-left break-words font-normal iFc text-[12px]">
                                    Bạn đã là thành viên ?
                                  </div>
                                  <button className="p-0 text-left text-[12px] block ml-[5px] font-bold cursor-pointer iFc">
                                    Đăng nhập
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" rounded-b-[32px] h-[62px] w-full bg-customColor-color_background_box_secondary">
                        <div className="rounded-none w-full cursor-pointer h-full">
                          <div className="h-full justify-center items-center flex flex-row m-0">
                            <div className="text-left break-words font-semibold iFc text-[16px]">
                              Tạo tài khoản doanh nghiệp miễn phí
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* element top */}
              <div className="top-[76px] w-full z-3 ml-auto justify-center flex flex-row absolute">
                <div className="cursor-pointer">
                  <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center mb-4 mt-2 flex flex-row cursor-pointer bg-white">
                    <span>
                      <a href="#" onClick={() => scrollToSnap(snap1Ref)}>
                        {/* <img src="/icons8-down-96.png" alt="icon" /> */}
                        <img
                          src="/icons8-up-100.png"
                          className="h-[48px] w-[48px]"
                          alt="up"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              {/* element bot */}
              <div className="h-[5vh] w-full z-3 justify-center items-center bottom-0 absolute bg-white flex flex-row">
                {links_bottom.map((link) => (
                  <div className="mr-2" key={link.url}>
                    <div className="text-left text-black break-words font-semibold iFc text-[12px]">
                      <a
                        href="/"
                        className="text-left text-black break-words iFc text-[12px]"
                      >
                        {link.name}
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
  );
};

export default HomePageNotLoggedIn;
