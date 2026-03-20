import { chatbotConfig } from "@/data/resume";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        reply:
          "Chatbot 还没配置好呢 😅 盈豫还在搞 API key... 你可以直接邮件联系她：cathymaoyy@gmail.com",
      },
      { status: 200 }
    );
  }

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 512,
        system: chatbotConfig.systemPrompt,
        messages: messages.slice(-10).map(
          (m: { role: string; content: string }) => ({
            role: m.role,
            content: m.content,
          })
        ),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Anthropic API error:", err);
      throw new Error("API error");
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "嗯...我好像卡住了 🤔";

    return Response.json({ reply });
  } catch (error) {
    console.error("Chat error:", error);
    return Response.json(
      {
        reply:
          "哎呀，出了点小问题 😅 你可以直接邮件联系盈豫：cathymaoyy@gmail.com",
      },
      { status: 200 }
    );
  }
}
