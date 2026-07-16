import { NextResponse } from "next/server";
import { headerData } from "../../data/headerData";

export async function GET() {
  return NextResponse.json(headerData);
}
