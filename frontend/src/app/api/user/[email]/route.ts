import { prisma } from "@/app/utils/connect";
import Email from "next-auth/providers/email";
import { NextRequest, NextResponse } from "next/server";

// Get user by email
export const GET = async (
  req: NextRequest,
  { params }: { params: { email: string } }
) => {
  const { email } = params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return new NextResponse(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
