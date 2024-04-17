import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const myId = url.searchParams.get("myId");
  try {
    const myFriends = await prisma.friends.findMany({
      where: {
        MyId: myId!,
      },
    });
    const all_Friends = [];
    for (var i = 0; i < myFriends.length; i++) {
      const Friends = await prisma.user.findFirst({
        where: {
          id: myFriends[i].MyFriendId,
        },
      });
      all_Friends.push(Friends);
    }
    return new NextResponse(JSON.stringify(all_Friends), { status: 200 });
  } catch (error) {}
};
