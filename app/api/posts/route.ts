// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { postData } from "@/app/data/postData";

/**
 * 모든 포스트 데이터를 제공하는 API
 */
export async function GET() {
  // postData를 JSON 형태로 반환합니다.
  return NextResponse.json(postData);
}
