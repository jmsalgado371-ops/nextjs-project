import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await request.json();
  return NextResponse.json(
    { message: "Password update is disabled because database integration was removed." },
    { status: 501 },
  );
}
