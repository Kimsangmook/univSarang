import Link from "next/link";
// import {getServerSession} from "next-auth";
import getServerSession from "next-auth";
import {auth} from "auth"
import { redirect } from "next/navigation";
import { SessionProvider } from "next-auth/react"
import Main from "@/app/(private)/main/page";

export default async function Home({
}) {
  const session = await auth();

  return (
    <>
      <SessionProvider session={session}>
        <Main></Main>
      </SessionProvider>
    </>
  
  )
}
