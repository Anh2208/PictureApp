import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_ID,
  process.env.GOOGLE_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const scopes = ["https://www.googleapis.com/auth/userinfo.email"];

export const POST = async (req: NextRequest) => {
  try {
    const url = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
    });
    console.log("URL", url);

    // Redirect người dùng đến URL xác thực
    return NextResponse.redirect(url);
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// Xử lý callback từ Google OAuth2
export const GET = async (req: NextRequest) => {
  try {
    const url = new URL(req.url ?? "", "http://localhost");
    const code = url.searchParams.get("code");

    if (!code) {
      throw new Error("No authorization code provided");
    }

    // Hoán đổi mã xác thực để nhận access token
    const { tokens } = await oauth2Client.getToken(code);
    const access_token = tokens.access_token;

    // Sau khi nhận được access token, bạn có thể sử dụng nó để gọi các API khác của Google
    // Ví dụ: checkGoogleAccount(access_token);

    return new NextResponse("Authentication successful", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
