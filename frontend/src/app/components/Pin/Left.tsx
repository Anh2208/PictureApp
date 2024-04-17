"use client";
interface ImageUrl {
  url: string | null;
}
const LeftPin = ({ url }: ImageUrl) => {
  return (
    <div className="w-[50%] box-border">
      <div className="relative justify-center box-border flex flex-row w-full h-full">
        <div className="h-full w-full justify-center box-border cursor-auto rounded-[32px]">
          <div className=" bg-black box-border relative cursor-auto rounded-[32px]">
            <div className="relative ">
              <img
                src={url || ""}
                alt=""
                className="w-full h-auto rounded-l-[32px] relative"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftPin;
