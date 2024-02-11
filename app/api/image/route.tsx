import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI, ClientOptions } from "openai";
import { checkApiLimit, incApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ChatReqMessage {
  role: string;
  content: string;
}

const instructionMessage: ChatReqMessage = {
  role: "system",
  content:
    "You are a code generator. You Must answer only in markdown code snippets.Use Code comments for explanations",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512" } = body;
    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("prompt are required", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("amount are required", { status: 400 });
    }
    if (!resolution) {
      return new NextResponse("resolution are required", { status: 400 });
    }
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();
    if (!freeTrial && !isPro) {
      return new NextResponse("Free Trial has expired", { status: 403 });
    }
    const res = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });
    if (!isPro) {
      await incApiLimit();
    }
    return NextResponse.json(res.data);
  } catch (err) {
    console.log("image error", err);
    return new NextResponse("code error error", { status: 500 });
  }
}
