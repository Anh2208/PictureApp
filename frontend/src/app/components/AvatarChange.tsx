"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ChangeState {
  onClose: () => void;
}

const AvatarChange = ({ onClose }: ChangeState) => {
  const [file, setFile] = useState<File | null>(null);
  const { data: session, update } = useSession();

  const upload = async () => {
    const data = new FormData();
    if (file) {
      data.append("file", file!);
      data.append("upload_preset", "PicbuApp");
    }
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/jokeay/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const resData = await res.json();
    console.log("url new is", resData);
    return resData.url;
  };

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên phần tử cha
    const fileInput = document.getElementById("file-input");
    fileInput?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // event.stopPropagation(); // Ngăn chặn sự kiện lan truyền lên phần tử cha
    const newfile = event.target.files?.[0];
    if (newfile) {
      setFile(newfile);
    }
    console.log("new Picture is", file);
  };

  useEffect(() => {
    if (file) {
      const uploadFile = async () => {
        const url = await upload();
        const response = await fetch(
          `http://localhost:3000/api/user/${session?.user?.email}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ image: url }),
          }
        );
        if (response.ok) {
          update();
          toast.success("Cập nhật hình ảnh tành công");
          onClose();
        } else {
          toast.error("Cập nhật thất bại");
        }
      };
      uploadFile();
    }
  }, [file]);

  return (
    <div
      className="justify-center items-center flex w-screen h-screen fixed z-50"
      onClick={onClose}
    >
      <div className="top-0 right-0 bottom-0 left-0 absolute overflow-x-hidden overflow-y-scroll cursor-zoom-out bg-black bg-opacity-80 h-full"></div>
      <div
        className="w-[540px] mx-4 rounded-[16px] flex relative max-h-[calc(100vh-32px)] bg-white"
        onClick={(event) => event.stopPropagation()} // Ngăn chặn sự kiện lan truyền lên phần tử cha
      >
        <div className="w-full flex-1 relative flex flex-col justify-center items-center">
          <div className="relative z-[1]">
            <div className="p-6">
              <h1 className="text-center break-words font-semibold text-[28px] iFc">
                Thay đổi ảnh của bạn
              </h1>
            </div>
          </div>
          <div className="h-full flex flex-1 relative p-0">
            <form>
              <div className="p-4">
                <div className="justify-center items-center flex flex-row">
                  <button
                    className="min-w-[60px] p-0 rounded-[24px]"
                    type="button"
                    onClick={handleButtonClick}
                  >
                    <div className="justify-center items-center flex px-3 py-2 w-full bg-customColor-color_red_pushpin_450 rounded-[24px]">
                      <div className="text-center font-semibold text-[16px] text-white iFc">
                        Chọn ảnh
                      </div>
                    </div>
                  </button>
                  <input
                    type="file"
                    accept="image/png, image/gif, image/jpg, .png, .jpg, .jpeg"
                    id="file-input"
                    name="name"
                    className=" hidden"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarChange;
