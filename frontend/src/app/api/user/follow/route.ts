import { prisma } from "@/app/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (req: NextRequest) => {
  try {
    console.log("939921391");
    const body = await req.json();
    console.log("bodl", body);
    const userFollowing = await prisma.user.findUnique({
      where: {
        email: body.emailUserFollowing,
      },
      select: {
        id: true,
      },
    });

    const userFollower = await prisma.user.findUnique({
      where: {
        email: body.emailUserFollower,
      },
      select: {
        id: true,
      },
    });

    if (!userFollowing || !userFollower) {
      throw new Error("User not found");
    }

    await prisma.follows.delete({
      where: {
        followerId_followingId: {
          followerId: userFollower.id,
          followingId: userFollowing.id,
        },
      },
    });
    return NextResponse.json(
      { message: "create follow success" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    console.log(body);
    const userFollowing = await prisma.user.findUnique({
      where: {
        email: body.emailUserFollowing,
      },
      select: {
        id: true,
      },
    });

    const userFollower = await prisma.user.findUnique({
      where: {
        email: body.emailUserFollower,
      },
      select: {
        id: true,
      },
    });

    if (!userFollowing || !userFollower) {
      throw new Error("User not found");
    }

    const follow = await prisma.follows.create({
      data: {
        followerId: userFollower.id,
        followingId: userFollowing.id,
      },
    });
    return NextResponse.json(
      { message: "create follow success" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};

// export const GET = async (req: NextRequest) => {
//   console.log("duma");
//   const body = await req.json();
//   try {
//     console.log("1112331", body);

//     return NextResponse.json({ message: "get success" }, { status: 200 });
//   } catch (error) {
//     console.error("Error:", error);
//     return new NextResponse("Internal Server Error", { status: 500 });
//   }
// };

// // export const GET = async (req: NextRequest) => {
// //   try {
// //     const { searchParams } = new URL(req.url);
// //     const email = searchParams.get("emailUser");
// //     console.log("1111111112", searchParams);
// //     const userFollowing = await prisma.user.findUnique({
// //       where: {
// //         email: body.emailUser,
// //       },
// //       select: {
// //         id: true,
// //       },
// //     });

// //     const userFollower = await prisma.user.findUnique({
// //       where: {
// //         email: body.emailUserFollow,
// //       },
// //       select: {
// //         id: true,
// //       },
// //     });

// //     if (!userFollowing || !userFollower) {
// //       return new NextResponse("Follow not found", { status: 404 });
// //     }

// //     const follow = await prisma.follows.findUnique({
// //       where: {
// //         followerId_followingId: {
// //           followerId: userFollowing.id,
// //           followingId: userFollower.id,
// //         },
// //       },
// //     });

// //     if (follow) {
// //       console.log("kkkkkkk");
// //     }

// //     return NextResponse.json({ message: "find follow" }, { status: 200 });
// //   } catch (error) {
// //     console.error("Error:", error);
// //     return new NextResponse("Internal Server Error", { status: 500 });
// //   }
// // };
