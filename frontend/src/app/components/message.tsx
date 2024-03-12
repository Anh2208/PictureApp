"use client";
const Message = () => {
  return (
    <div className="top-0 z-50 h-full w-[360px] right-0 fixed">
      <div className="mt-[80px] h-[calc(-88px+100vh)] mr-2 rounded-[32px] relative bg-white shadow-custom">
        <div className="h-full">
          <div className="block">
            <div className="h-[64px] items-center p-2 flex flex-row">
              <div className="flex-1 min-h-0 min-w-0">
                <div className="text-center break-words text-[16px] font-semibold iFc">
                  Hộp thư đến
                </div>
              </div>
              <div className="mr-4 right-0 absolute flex flex-row">
                <button className="p-0 cursor-pointer">
                  <div className="h-[48px] w-[48px] rounded-[50%] justify-center items-center flex">
                    <img
                      src="/icons8-three-dots-100.png"
                      alt="dots"
                      className="h-[20px] w-[20px]"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-[calc(100%-64px)] overflow-hidden">
            <div className="p-3">
              <span>
                <div className="items-center flex flex-row relative">
                  <div className="transform left-0 right-0 px-4 absolute">
                    <img
                      src="/icons8-search.svg"
                      alt="search"
                      className="h-[16px] w-[16px]"
                    />
                  </div>
                  <input
                    type="search"
                    placeholder="Tìm kiếm theo tên hoặc email"
                    role="searchbox"
                    className="XgI Lfz LJB KI_ min-h-[48px] w-full px-[40px] py-[8px] iFc text-[16px]"
                  />
                </div>
              </span>
            </div>
            <div className="block box-border">
              <div className="w-full cursor-pointer transition-transform duration-85 ease-out block">
                <div className="mx-2 rounded-[8px] items-center box-border p-2 mb-2 flex flex-row">
                  <div className="w-[48px] h-[48px] mr-2 rounded-[50%] justify-center items-center flex flex-row bg-customColor-color_red_pushpin_450">
                    <img
                      src="/writing-white.png"
                      alt="writing"
                      className="w-[20px] h-[20px]"
                    />
                  </div>
                  <div className="text-left overflow-hidden break-words font-semibold text-[16px] cursor-pointer iFc leading-[22px]">
                    Tin nhắn mới
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full cursor-pointer block">
              <div className="mx-2 rounded-[8px] p-2 mb-2">
                <div className="relative box-border">
                  <div className="items-center flex flex-row m-0">
                    <div className="h-[48px] w-[48px] mr-2 rounded-[50%] justify-center items-center bg-customColor-color_background_box_secondary flex flex-row">
                      <img
                        src="/icons8-add-user-64.png"
                        alt="add"
                        className="h-[20px] w-[20px]"
                      />
                    </div>
                    <div className="block box-border">
                      <div className="text-left font-semibold overflow-hidden text-[16px] iFc leading-[22px]">
                        Mời bạn bè
                      </div>
                      <div className="text-left font-normal overflow-hidden break-words text-customColor-color_text_subtle text-[16px] iFc leading-[22px]">
                        Kết nối để bắt đầu trò chuyện
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
  );
};

export default Message;
