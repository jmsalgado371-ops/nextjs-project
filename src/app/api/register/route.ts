import { NextResponse } from "next/server";

export async function POST(request: any) {
  await request.json();
  return NextResponse.json(
    { message: "Registration API is disabled because database integration was removed." },
    { status: 501 },
  );
}
