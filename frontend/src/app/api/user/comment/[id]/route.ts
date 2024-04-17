import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

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
    });

    let CommentList: any[] = [];

    if (post) {
      CommentList = await prisma.comment.findMany({
        where: {
          postId: id,
          parentId: null,
        },
        include: {
          likes: true,
          children: {
            include: {
              likes: true,
              children: true,
            },
          },
        },
      });
    }
    return new NextResponse(JSON.stringify(CommentList), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const body = await req.json();
    const comment = await prisma.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      return new NextResponse(
        JSON.stringify({ message: "Comment not found" }),
        { status: 404 }
      );
    }

    if (body.isDelete) {
      await prisma.comment.update({
        where: { id },
        data: { likeCount: Math.max(comment.likeCount - 1, 0) }, // Ensure likeCount is not negative
      });
      const like = await prisma.like.findFirst({
        where: { commentId: id, userId: body.userId },
      });
      if (like) {
        await prisma.like.delete({ where: { id: like.id } });
      }
    } else {
      await prisma.comment.update({
        where: { id },
        data: { likeCount: comment.likeCount + 1 },
      });
      await prisma.like.create({
        data: { commentId: id, userId: body.userId },
      });
    }
    return new NextResponse(JSON.stringify("Cac"), { status: 201 });
  } catch (err) {
    console.error("Error processing request:", err); // Log any errors that occur
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
