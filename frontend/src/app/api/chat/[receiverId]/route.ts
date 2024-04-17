import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const GET = async (
  req: NextRequest,
  { params }: { params: { receiverId: string; myId: string } }
) => {
  const { receiverId, myId } = params;
  console.log(receiverId);
  try {
    const findMyFriend = await prisma.friends.findFirst({
      where: {
        MyFriendId: receiverId,
      },
    });

    const findMe = await prisma.friends.findFirst({
      where: {
        MyId: receiverId,
      },
    });

    if (findMyFriend && findMe) {
      const messages = await prisma.message.findMany({
        where: {
          OR: [
            {
              senderId: findMe?.MyId,
            },
            {
              receiverId: findMyFriend?.MyFriendId,
            },
          ],
        },
      });

      return new NextResponse(JSON.stringify(messages), { status: 200 });
    }
    return new NextResponse("sucess", { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error1", { status: 500 });
  }
};
