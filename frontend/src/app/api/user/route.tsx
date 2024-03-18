import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, birthdate, password } = body;

    // Băm mật khẩu trước khi lưu vào cơ sở dữ liệu
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userData = { email, birthdate, password: hashedPassword };

    // Tiếp tục quá trình đăng ký tài khoản nếu không phải là tài khoản Google
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User with this email already exists" },
        { status: 409 }
      );
    }

    const user = await prisma.user.create({
      data: userData,
    });

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await signIn("credentials", { email, password });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return (
      new NextResponse(JSON.stringify({ message: "Something went wrong!" })),
      { status: 500 }
    );
  }
};
