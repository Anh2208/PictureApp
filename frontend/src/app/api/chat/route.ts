import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    if (!body) {
      throw new Error("Empty request body");
    }
    const { content, senderId, receiverId } = body;

    const findMyFriend = await prisma.friends.findFirst({
      where: {
        MyId: senderId,
        MyFriendId: receiverId,
      },
    });

    const findMe = await prisma.friends.findFirst({
      where: {
        MyId: receiverId,
        MyFriendId: senderId,
      },
    });

    if (!findMyFriend || !findMe) {
      await prisma.friends.create({
        data: {
          MyId: senderId,
          MyFriendId: receiverId,
        },
      });
      await prisma.friends.create({
        data: {
          MyId: receiverId,
          MyFriendId: senderId,
        },
      });

      // Create the message with extracted fields
      const messages = await prisma.message.create({
        data: {
          content,
          senderId,
          receiverId,
        },
      });

      return new NextResponse(JSON.stringify(messages), { status: 200 });
    } else {
      // Create the message with extracted fields
      const messages = await prisma.message.create({
        data: {
          content,
          senderId,
          receiverId,
        },
      });

      return new NextResponse(JSON.stringify(messages), { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error1", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const receiverId = url.searchParams.get("receiverId");
  const myId = url.searchParams.get("myId");
  try {
    const findMyFriend = await prisma.friends.findFirst({
      where: {
        MyId: receiverId!,
        MyFriendId: myId!,
      },
    });
    const findMe = await prisma.friends.findFirst({
      where: {
        MyId: myId!,
        MyFriendId: receiverId!,
      },
    });
    if (findMyFriend && findMe) {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            {
              senderId: receiverId!,
              receiverId: myId!,
            },
            {
              senderId: myId!,
              receiverId: receiverId!,
            },
          ],
        },
      });

      return new NextResponse(JSON.stringify(messages), { status: 200 });
    }

    return new NextResponse("success", { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error1", { status: 500 });
  }
};
