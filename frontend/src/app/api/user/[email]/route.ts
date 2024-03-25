import { prisma } from "@/app/utils/connect";
import Email from "next-auth/providers/email";
import { NextRequest, NextResponse } from "next/server";

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
  console.log("jkkkkkk");
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
