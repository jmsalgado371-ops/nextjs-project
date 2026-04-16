import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const tag = typeof body?.tag === "string" ? body.tag : "blog";
    revalidateTag(tag, { expire: 0 });
    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      tag,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
