import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    if (!body) {
      throw new Error("Empty request body");
    }
    const messages = await prisma.message.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error1", { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const messages = await prisma.message.findMany();
    return new NextResponse(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error1", { status: 500 });
  }
};
