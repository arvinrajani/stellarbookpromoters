import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validators";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function insertLead(data: Record<string, unknown>) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.warn("Supabase credentials not configured");
    return { ok: false, error: "Supabase credentials missing" };
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      Prefer: "return=minimal"
    },
    body: JSON.stringify([data])
  });

  if (!response.ok) {
    const message = await response.text();
    console.error("Supabase insert failed:", message);
    return { ok: false, error: message };
  }

  return { ok: true };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const payload = { ...parsed.data, created_at: new Date().toISOString() };
    const { ok, error } = await insertLead(payload);

    if (!ok) {
      return NextResponse.json({ ok: false, error }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true });
}
