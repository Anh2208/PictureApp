import { prisma } from "@/app/utils/connect";
import Email from "next-auth/providers/email";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
const validWebsiteRegex =
  /^(http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

interface User {
  email: string;
  name: string;
  firstname: string;
  lastname: string;
  birthdate: Date;
  gender: string;
  password: string;
}
// Get user by email
export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// Update user by email
export const PUT = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  const body = await req.json();
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "Can't find user by" }),
        { status: 500 }
      );
    }
    if (body.password) {
      if (!body.oldpassword) {
        const result = await createPassword(user.email, body.password);
        if (result == true) {
          return new NextResponse(
            JSON.stringify({ message: "Create password success" }),
            { status: 200 }
          );
        } else {
          return new NextResponse(
            JSON.stringify({ message: "Create password faild" }),
            { status: 500 }
          );
        }
      }
      if (body.password && body.oldpassword && user.password) {
        console.log(user.password, body.password);
        const result = await changePassword(
          user.email,
          user.password,
          body.password
        );
        if (result == true) {
          return new NextResponse(
            JSON.stringify({ message: "Create password success" }),
            { status: 200 }
          );
        } else {
          return new NextResponse(
            JSON.stringify({ message: "Password don't match" }),
            { status: 500 }
          );
        }
      }
    }

    if (
      !validWebsiteRegex.test(body.website) &&
      user.website != null &&
      body.website != null
    ) {
      console.log(" result is", !validWebsiteRegex.test(body.website));
      return new NextResponse(
        JSON.stringify({ message: "The website link is incorrect" }),
        { status: 500 }
      );
    }
    const userUpdate = await prisma.user.update({
      where: { email },
      data: body,
    });

    if (!userUpdate) {
      return new NextResponse("No user with email found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(userUpdate), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "There was a problem updating users" }),
      { status: 500 }
    );
  }
};

const createPassword = async (email: string, newPassword: string) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
};
const changePassword = async (
  email: string,
  oldPasswordHashed: string,
  newPassword: string
) => {
  try {
    // So sánh mật khẩu cũ (đã hash) và mật khẩu nhập vào
    let compareResult = true;
    bcrypt.compare(newPassword, oldPasswordHashed, function (err, result) {
      if (result == false) {
        compareResult = false;
      }
    });
    console.log(compareResult);
    if (!compareResult) {
      // Mật khẩu cũ không khớp
      return false;
    }

    // Hash mật khẩu mới
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Cập nhật mật khẩu mới vào cơ sở dữ liệu
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
      },
    });

    return true;
  } catch (error) {
    console.error("Error:", error);
    return false;
  }
};
