// app/api/sidebar/route.ts
import { NextResponse } from "next/server";
import {
  sidebarHeaderData,
  menuList,
  anteData,
  contactInfo,
} from "@/app/data/sidebarData";

/**
 * 사이드바에 필요한 모든 데이터를 한번에 제공하는 API
 */
export async function GET() {
  return NextResponse.json({
    sidebarHeaderData,
    menuList,
    anteData,
    contactInfo,
  });
}
