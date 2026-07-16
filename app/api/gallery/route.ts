import { NextResponse } from "next/server";
import { galleryImages } from "../../data/galleryImageData";

export async function GET() {
  return NextResponse.json(galleryImages);
}
