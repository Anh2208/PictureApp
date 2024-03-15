import { prisma } from "@/app/utils/connect";
import { NextResponse } from "next/server";

// FETCH ALL CONTENT

export const GET = async () => {
  try {
    const contents = await prisma.user.findMany();
    return new NextResponse(JSON.stringify(contents), { status: 200 });
  } catch (error) {
    console.log("error:", error);
    return (
      new NextResponse(JSON.stringify({ message: "Something went wrong!" })),
      { status: 500 }
    );
  }
};
