import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");

  try {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log("Received request body:", body); // Log the received request body
    if (!body) {
      throw new Error("Empty request body");
    }

    const posts = await prisma.post.create({
      data: body,
    });
    return new NextResponse(JSON.stringify(posts), { status: 201 });
  } catch (err) {
    console.error("Error processing request:", err); // Log any errors that occur
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
