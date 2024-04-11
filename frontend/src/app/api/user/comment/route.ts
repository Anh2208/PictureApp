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
        id: true,
      },
    });
    const comment = await prisma.comment.create({
      data: {
        postId: body.postId,
        content: body.content,
        creatorId: user?.id,
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
