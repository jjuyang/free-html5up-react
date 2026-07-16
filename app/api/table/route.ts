import { NextResponse } from "next/server";

const tableData = [
  {
    id: "1",
    name: "Item1-1",
    description: "Ante turpis integer aliquet porttitor.",
    price: "29.99",
  },
  {
    id: "2",
    name: "Item1-2",
    description: "Vis ac commodo adipiscing arcu aliquet.",
    price: "19.99",
  },
  {
    id: "3",
    name: "Item1-3",
    description: "Morbi faucibus arcu accumsan lorem.",
    price: "29.99",
  },
  {
    id: "4",
    name: "Item1-4",
    description: "Vitae integer tempus condimentum.",
    price: "19.99",
  },
  {
    id: "5",
    name: "Item1-5",
    description: "Ante turpis integer aliquet porttitor.",
    price: "29.99",
  },
];

const tableData2 = [
  {
    id: "1",
    name: "Item2-1",
    description: "Ante turpis integer aliquet porttitor.",
    price: "29.99",
  },
  {
    id: "2",
    name: "Item2-2",
    description: "Vis ac commodo adipiscing arcu aliquet.",
    price: "19.99",
  },
  {
    id: "3",
    name: "Item2-3",
    description: "Morbi faucibus arcu accumsan lorem.",
    price: "29.99",
  },
  {
    id: "4",
    name: "Item2-4",
    description: "Vitae integer tempus condimentum.",
    price: "19.99",
  },
  {
    id: "5",
    name: "Item2-5",
    description: "Ante turpis integer aliquet porttitor.",
    price: "33.99",
  },
];

export async function GET() {
  return NextResponse.json({
    defaultTable: tableData,
    alternateTable: tableData2,
  });
}
