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
        followerId: post.userId,
      },
    });

    const user = { ...post.user, followers: followersCount };

    const reactList = await prisma.reactPost.findMany({
      where: {
        postId: id,
      },
    });

    return new NextResponse(
      JSON.stringify({ post, user, reactList, reactCount: reactList.length }),
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const post = await prisma.post.findUnique({
      where: {
        id: body.postId,
      },
    });
    if (post) {
      const ReactPostbyUser = await prisma.reactPost.findFirst({
        where: {
          postId: post.id,
          // reactId: body.iconId.toString(),
          userId: body.userId,
        },
      });
      if (ReactPostbyUser) {
        if (body.isDelete) {
          await prisma.reactPost.delete({
            where: {
              id: ReactPostbyUser.id,
            },
          });
        } else {
          await prisma.reactPost.update({
            where: {
              id: ReactPostbyUser.id,
            },
            data: {
              reactId: body.iconId.toString(),
            },
          });
        }
      } else {
        await prisma.reactPost.create({
          data: {
            postId: post?.id,
            reactId: body?.iconId.toString(),
            userId: body?.userId,
          },
        });
      }
    }
    return new NextResponse(JSON.stringify("Mppppp"), { status: 201 });
  } catch (err) {
    console.error("Error processing request:", err); // Log any errors that occur
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
