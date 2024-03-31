"use client";
import { Session } from "inspector";
import HomePageNotLoggedIn from "./components/homePageNotLoggedIn";
import { useSession } from "next-auth/react";
import HomePageLoggedIn from "./components/homePageLoggedIn";

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <>
      {status == "authenticated" ? (
        <HomePageLoggedIn />
      ) : (
        <HomePageNotLoggedIn />
      )}
    </>
  );
}
