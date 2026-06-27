import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is too short").max(80),
  email: z.string().email("Invalid email"),
  subject: z.string().max(120).optional(),
  message: z.string().min(10, "Message should be at least 10 characters").max(4000),
  budget: z.string().max(60).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const saved = await db.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject ?? null,
        message: data.message,
        budget: data.budget ?? null,
      },
    });

    return NextResponse.json({ ok: true, id: saved.id });
  } catch (err) {
    console.error("[contact] error", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const messages = await db.contactMessage.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        subject: true,
        createdAt: true,
        read: true,
      },
    });
    return NextResponse.json({ ok: true, messages });
  } catch (err) {
    console.error("[contact:list] error", err);
    return NextResponse.json({ ok: false, messages: [] }, { status: 500 });
  }
}
