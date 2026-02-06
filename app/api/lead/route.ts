import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Basic validation - just need name and email
    if (!body.name || !body.email) {
      return NextResponse.json(
        { ok: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Clean the data - convert empty strings to null
    const payload: Record<string, string | null> = {
      type: body.type || "quote",
      name: body.name,
      email: body.email,
      phone_number: body.phone_number || null,
      genre: body.genre || null,
      service_interest: body.service_interest || null,
      budget_range: body.budget_range || null,
      timeline: body.timeline || null,
      message: body.message || null,
      created_at: new Date().toISOString()
    };

    // Check if Supabase is configured
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      return NextResponse.json({
        ok: false,
        error: "Supabase not configured on server",
        debug: {
          hasUrl: !!SUPABASE_URL,
          hasKey: !!SUPABASE_SERVICE_ROLE_KEY
        }
      }, { status: 500 });
    }

    // Insert into Supabase
    const response = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        Prefer: "return=minimal"
      },
      body: JSON.stringify([payload])
    });

    if (!response.ok) {
      const errText = await response.text();
      return NextResponse.json({
        ok: false,
        error: "Supabase insert failed",
        details: errText,
        status: response.status
      }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true });
}
