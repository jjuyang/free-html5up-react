// app/api/posts/route.ts
import { NextResponse } from "next/server";
import { ApiPost } from "@/app/types";

const myPostsData: ApiPost[] = [
  {
    userId: 1,
    id: "post1",
    title: "Amalfi, SA, Italy",
    description:
      "Dramatic cliffs, pastel-colored houses, and the shimmering Tyrrhenian Sea define the enchanting coastline of the Amalfi Coast.",
  },
  {
    userId: 2,
    id: "post2",
    title: "Dumbo, New York, United States",
    description:
      "An iconic Brooklyn neighborhood offering cobblestone streets, industrial charm, and breathtaking views of the Manhattan Bridge.",
  },
  {
    userId: 3,
    id: "post3",
    title: "Dresden, Germany",
    description:
      "Known as the 'Florence on the Elbe,' boasting magnificent Baroque architecture, historic palaces, and rich cultural heritage.",
  },
  {
    userId: 4,
    id: "post4",
    title: "Eiffel Tower, Paris, France",
    description:
      "The timeless symbol of romance and elegance, standing tall over the Champ de Mars in the heart of Paris.",
  },
  {
    userId: 5,
    id: "post5",
    title: "Mürren, Lauterbrunnen, Switzerland",
    description:
      "A cozy car-free Alpine village perched high above the cliffside, offering sweeping views of the Eiger, Mönch, and Jungfrau peaks.",
  },
  {
    userId: 6,
    id: "post6",
    title: "Santorini, Greece",
    description:
      "Famous for its whitewashed cliffside villages, iconic blue-domed churches, and unforgettable sunsets over the Aegean Sea.",
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
