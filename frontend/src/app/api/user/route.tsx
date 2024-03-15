import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// tạo URL xác nhận quyền cho Blogger và Google Calendar
const scopes = ["https://www.googleapis.com/auth/gmail.readonly"];

export const POST = async (req: NextRequest) => {
  try {
    const url = oauth2Client.generateAuthUrl({
      // 'online' (mặc định) hoặc 'offline' (lấy refresh_token)
      access_type: "offline",

      // Nếu chỉ cần 1 scope, có thể truyền dưới dạng chuỗi
      scope: scopes,
    });
    console.log("url", url);
    const body = await req.json();
    const { email, password } = body;

    // // Tiếp tục quá trình đăng ký tài khoản nếu không phải là tài khoản Google
    // const existingUserByEmail = await prisma.user.findUnique({
    //   where: { email: email },
    // });
    // if (existingUserByEmail) {
    //   return NextResponse.json(
    //     { user: null, message: "User with this email already exists" },
    //     { status: 409 }
    //   );
    // }

    // const user = await prisma.user.create({
    //   data: body,
    // });

    return new NextResponse(JSON.stringify(body), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
