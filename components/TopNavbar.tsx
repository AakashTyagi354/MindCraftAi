import Image from "next/image";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRightIcon, MoveRight } from "lucide-react";
import { UserButton, auth } from "@clerk/nextjs";

export default function TopNavBar() {
  const { user } = auth();
  return (
    <div className="h-16 sticky top-0 z-[50] w-full flex justify-between items-center border-b-2">
      <div className="flex items-center ml-6">
        <Image src={"/logo.png"} alt="" height={25} width={50} />
        <span className="text-white">MindCraftAI</span>{" "}
      </div>
      <div className="hidden md:flex md:gap-6">
        <Link href="/dashboard">
          <Button className="text-white" variant={"link"}>
            DashBoard
          </Button>
        </Link>
        <Link href="/pricing">
          <Button className="text-white" variant={"link"}>
            Pricing
          </Button>
        </Link>
      </div>
      <div className="flex mr-6 gap-4 ">
        {user && <UserButton afterSignOutUrl="/" />}
        <Link href="/sign-in">
          <Button className="text-white" variant={"link"}>
            {" "}
            Login
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button
            className="bg-[#CE59B8] text-white hover:bg-[#7E23BC]/50"
            variant={"secondary"}
          >
            {" "}
            Try For Free
            <MoveRight className="ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
