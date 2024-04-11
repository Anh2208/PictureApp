import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
      include: {
        user: {
          select: {
            image: true,
            username: true,
            email: true,
          },
        },
      },
    });

    if (!post) {
      return new NextResponse(JSON.stringify({ message: "Can't find Post!" }), {
        status: 404,
      });
    }

    const followersCount = await prisma.follows.count({
      where: {
        followingId: post.userId,
      },
    });

    const user = { ...post.user, followers: followersCount };

    return new NextResponse(JSON.stringify({ post, user }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
