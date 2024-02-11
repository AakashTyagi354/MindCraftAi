import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  Check,
  CheckCircle,
  Code,
  Code2,
  ImageIcon,
  MessageCircle,
  MoveRight,
  Music,
  TicketCheck,
  Video,
} from "lucide-react";
import { cn } from "@/lib/utils";
const features = [
  {
    icon: Code2,
    title: "Code Generator",
    href: "/code",
    iconColr: "text-purple-500",
  },
  {
    icon: Music,
    title: "Music Generator",
    href: "/music",
    iconColr: "text-rose-700",
  },
  {
    icon: Video,
    title: "Video Generator",
    href: "/video",
    iconColr: "text-orange-700",
  },
  {
    icon: MessageCircle,
    title: "Converstaion Generator",
    href: "/converstaion",
    iconColr: "text-green-700",
  },
  {
    icon: ImageIcon,
    title: "Image Generator",
    href: "/image",
    iconColr: "text-purple-500",
  },
];
const free = [
  "5 Request Per User",
  "1 Customer Voice",
  "Limited Image Generation",
  "Ai Customer Support",
  "Limited Code Generation",
  "Limited Video Generation",
  "Limited Music Generation",
];
const pro = [
  "UnLimited Request Per User",
  "5 Customer Voice",
  "UnLimited Image Generation",
  "Ai Customer Support",
  "UnLimited Code Generation",
  "UnLimited Video Generation",
  "UnLimited Music Generation",
  "Customized Output",
  "Set Reminders",
  "UnLimited Uploads",
  "UnLimited Sharing",
];
export default function Home() {
  return (
    <div className=" min-h-screen ">
      <div className=" h-[820px]  flex flex-col justify-center items-center">
        <h1 className="font-bold w-[80%] text-5xl linh ">
          Transform Ideas into Reality <br /> Explore Our Revolutionary AI
          Platform
        </h1>
        <p className="text-gray-500 w-[80%] mt-14 text-[16px]">
          Welcome to MindCrafAi, where boundless creativity meets cutting-edge
          AI technology. With our platform, you can unleash your imagination and
          bring your ideas to life in ways you never thought possible. From
          generating captivating songs and stunning images to crafting
          compelling videos, writing code snippets, and generating engaging
          text, the possibilities are endless.Whether you are a seasoned creator
          or just starting your journey, our AI-powered tools empower you to
          express yourself like never before. Join us and discover the limitless
          potential of AI-driven content creation.
        </p>{" "}
        <div className=" w-[80%] flex justify-start mt-14">
          <Button className="h-14 w-48" variant={"premium"}>
            <Link href={"/dashboard"}>Start Generating</Link>
          </Button>
        </div>
      </div>
      <div className=" flex flex-col items-center min-h-[800px] ">
        <h1 className=" text-4xl md:text-6xl font-[500] text-gray-500 i">
          What We Provide?
        </h1>
        <div className="mt-12">
          {features.map((ele) => (
            <Card
              key={ele.href}
              className="bg-inherit mt-6 w-[400px] md:w-[640px] h-20 flex items-center hover:shadow-gray-500 transition cursor-pointer relative"
            >
              <ele.icon className={cn("ml-6", ele.iconColr)} size={40} />
              <p className="ml-4 font-semibold text-[18px]">{ele.title}</p>
              <Link
                href={ele.href}
                className="absolute right-0 mr-6 flex items-center h-full"
              >
                <Button variant="link">
                  <MoveRight size={34} />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center min-h-[900px] ">
        <h1 className=" text-4xl md:text-6xl font-[500] text-gray-500 i">
          Chose Your Plane
        </h1>
        <div className="flex gap-12 flex-col md:flex-row md:gap-12 mt-12">
          <Card className="h-[700px] w-72 bg-inherit">
            <p className="text-4xl text-gray-200 mt-4 mx-4">Free</p>
            <p className="mt-4 mx-4 text-gray-200">
              For beginners embarking on their Ai creation voyage.
            </p>
            <p className=" text-4xl my-12 mx-4">$0</p>
            <Button variant={"secondary"} className="mx-4 w-64">
              Get Started
            </Button>
            <p className="text-gray-400 mt-6 ml-4">Incluse:</p>
            {free.map((ele) => (
              <div key={ele} className="flex gap-4 mt-6 ml-4">
                <CheckCircle className="text-purple-600" />
                <p className="text-gray-300"> {ele}</p>
              </div>
            ))}
          </Card>

          <Card className="h-[900px] w-72 bg-inherit shadow-sm shadow-purple-300">
            <p className="text-4xl text-gray-200 mt-4 mx-4">Pro</p>
            <p className="mt-4 mx-4 text-gray-200">
              For beginners embarking on their Ai creation voyage.
            </p>
            <p className=" text-4xl my-12 mx-4">$56/M</p>
            <Button variant={"premium"} className="mx-4 w-64">
              Subscribe
            </Button>
            <p className="text-gray-400 mt-6 ml-4">Incluse:</p>
            {pro.map((ele) => (
              <div key={ele} className="flex gap-4 mt-6 ml-4">
                <CheckCircle className="text-purple-600" />
                <p className="text-gray-300"> {ele}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
}
