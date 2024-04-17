import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("body is", body.emailUser);
    const user = await prisma.user.findUnique({
      where: {
        email: body.emailUser,
      },
      select: {
        username: true,
        image: true,
      },
    });
    console.log(user?.username);
    const comment = await prisma.comment.create({
      data: {
        postId: body.postId,
        content: body.content,
        creatorUrl: `http://localhost:3000/${user?.username}`,
        parentId: body.parentId,
        creatorImage: user?.image,
        creatorUserName: user?.username,
      },
    });
    return NextResponse.json(
      { message: "create user success" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
