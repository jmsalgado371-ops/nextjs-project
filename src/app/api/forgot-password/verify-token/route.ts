import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await request.json();
  return NextResponse.json(
    { message: "Token verification is disabled because database integration was removed." },
    { status: 501 },
  );
};
