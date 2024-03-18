import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt, { compare } from "bcrypt";
import { signIn } from "next-auth/react";

export const POST = async (req: NextRequest, res: NextResponse) => {
  console.log("kkkk");
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "email or password null!" }),
        { status: 409 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!existingUser) {
      return new NextResponse(JSON.stringify({ message: "can't find user!" }), {
        status: 409,
      });
    }

    if (!existingUser.password) {
      return new NextResponse(
        JSON.stringify({ message: "User password not found!" }),
        { status: 409 }
      );
    }

    const passwordMatch = await compare(password, existingUser.password);

    if (!passwordMatch) {
      return new NextResponse(
        JSON.stringify({ message: "Incorrect password!" }),
        { status: 401 }
      );
    }

    return new NextResponse(JSON.stringify(existingUser), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
