import { NextResponse } from "next/server";
import {
  sidebarHeaderData,
  menuList,
  anteData,
  contactInfo,
} from "../../data/sidebarData";

export async function GET() {
  return NextResponse.json({
    headers: sidebarHeaderData,
    menu: menuList,
    miniPosts: anteData,
    contact: contactInfo,
  });
}
