import { checkApiLimit, incApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { OpenAI, ClientOptions } from "openai";

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
    const { messages } = body;
    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free Trial has expired", { status: 403 });
    }

    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    if (!isPro) {
      await incApiLimit();
    }
    return NextResponse.json(res.choices[0].message);
  } catch (err) {
    console.log("code error", err);
    return new NextResponse("code error error", { status: 500 });
  }
}
