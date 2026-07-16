import { NextResponse } from "next/server";

const featuresData = [
  {
    id: "f1",
    icon: "fa-gem",
    title: "Portitor ullamcorper",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  },
  {
    id: "f2",
    icon: "fa-paper-plane",
    title: "Sapien veroeros",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    isSolid: true,
  },
  {
    id: "f3",
    icon: "fa-rocket",
    title: "Quam lorem ipsum",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    isSolid: true,
  },
  {
    id: "f4",
    icon: "fa-signal",
    title: "Sed magna finibus",
    description:
      "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    isSolid: true,
  },
];

export async function GET() {
  return NextResponse.json(featuresData);
}
