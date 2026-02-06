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

    // Try Supabase insert
    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      try {
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
          console.error("Supabase error:", response.status, errText);
          // Still return success to user - we got their data logged
        } else {
          console.log("Lead saved to Supabase successfully");
        }
      } catch (dbError) {
        console.error("Supabase connection error:", dbError);
        // Still return success - don't block the user
      }
    } else {
      console.warn("Supabase not configured - lead data:", JSON.stringify(payload));
    }

    // Always return success to the user
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: true });
}
