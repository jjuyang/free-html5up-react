// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { ApiPost } from "@/app/types";

const myPostsData: ApiPost[] = [
  {
    userId: 1,
    id: "post1",
    title: "Interdum aenean",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
  {
    userId: 2,
    id: "post2",
    title: "Nulla amet dolore",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
  {
    userId: 3,
    id: "post3",
    title: "Tempus ullamcorper",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
  {
    userId: 4,
    id: "post4",
    title: "Sed etiam facilis",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
  {
    userId: 5,
    id: "post5",
    title: "Feugiat lorem aenean",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
  {
    userId: 6,
    id: "post6",
    title: "Amet varius aliquam",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
];

// ⚡ GET 요청이 들어오면 내 진짜 데이터를 JSON으로 응답하는 함수 (GET handler)
export async function GET() {
  return NextResponse.json(myPostsData); // myPostsData를 JSON으로 응답
}

// ⚡ POST 요청이 들어오면 요청 본문을 JSON으로 파싱하여 응답하는 함수 (POST handler)
export async function POST(request: Request) {
  const body = await request.json(); // 요청 본문을 JSON으로 파싱
  return NextResponse.json({
    received: body,
    message: "Post request successful!",
  }); // 파싱된 본문과 메시지를 JSON으로 응답
}
