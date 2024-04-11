import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;

  try {
    console.log("1111111112", email);
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // if (!userFollowing || !userFollower) {
    //   return new NextResponse("Follow not found", { status: 404 });
    // }

    if (!user) {
      return new NextResponse(JSON.stringify({ message: "Can't find User!" }), {
        status: 404,
      });
    }

    const follow = await prisma.follows.findMany({
      where: {
        followerId: user.id,
      },
    });
    if (follow) {
      console.log("kkkkkkk", follow);
    }

    return new NextResponse(JSON.stringify(follow), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
