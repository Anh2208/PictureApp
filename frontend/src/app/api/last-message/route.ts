import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const receiverId = url.searchParams.get("receiverId");
  const myId = url.searchParams.get("myId");

  try {
    const lastMessage = await prisma.message.findFirst({
      where: {
        OR: [
          { senderId: myId!, receiverId: receiverId! },
          { senderId: receiverId!, receiverId: myId! },
        ],
      },
      orderBy: { createdAt: "desc" },
    });

    

    if (!lastMessage) {
      return new NextResponse("Error", { status: 404 });
    }

    return new NextResponse(JSON.stringify(lastMessage), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
