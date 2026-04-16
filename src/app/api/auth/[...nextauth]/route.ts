import NextAuth from "next-auth";
import { authOptions } from "@/libs/auth";

const handler = NextAuth(authOptions);

export const GET = handler as any;
export const POST = handler as any;

