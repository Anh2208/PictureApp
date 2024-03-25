import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./connect";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      // Authorization logic for normal account credentials
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (!existingUser) {
          return null;
        }

        if (!existingUser.password) {
          return null;
        }
        const passwordMatch = await compare(
          credentials.password,
          existingUser.password
        );

        if (!passwordMatch) {
          return null;
        }
        console.log("lllaakak", existingUser);
        const session = {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
          username: existingUser.username,
        };
        return session;
      },
    }),
  ],
  callbacks: {
    // async signIn({ account, profile }) {
    //   if (account?.provider === "google" && profile?.email) {
    //     const emailParts = profile.email.split("@");
    //     const username = emailParts[0];

    //     const existingUser = await prisma.user.findUnique({
    //       where: { email: profile.email },
    //     });

    //     if (existingUser) {
    //       await prisma.user.update({
    //         where: { email: profile.email },
    //         data: { username },
    //       });
    //     }
    //     // Trả về true để xác nhận đăng nhập thành công
    //     return true;
    //   }

    //   // Nếu không phải đăng nhập bằng Google hoặc không có email, trả về false để từ chối đăng nhập
    //   return true;
    // },

    async jwt({ token, user }) {
      if (!token.username && token.email) {
        const emailParts = token.email.split("@");
        const newusername = emailParts[0];
        const existingUser = await prisma.user.findUnique({
          where: {
            email: token.email!,
          },
        });

        if (existingUser) {
          await prisma.user.update({
            where: { email: token.email },
            data: { username: newusername },
          });
          return {
            ...token,
            username: newusername,
          };
        }
      }
      if (user) {
        return {
          ...token,
          image: user.image,
          username: user.username,
        };
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("ahahahah", token);

      // if (!token.username && session?.user.email) {
      //   const emailParts = session?.user.email.split("@");
      //   const newusername = emailParts[0];
      //   const existingUser = await prisma.user.findUnique({
      //     where: { email: session?.user.email },
      //   });

      //   if (existingUser) {
      //     console.log("ihihiihih", existingUser);
      //     await prisma.user.update({
      //       where: { email: session?.user.email },
      //       data: { username: newusername },
      //     });
      //   }
      // }
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
          image: token.picture,
        },
      };
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
