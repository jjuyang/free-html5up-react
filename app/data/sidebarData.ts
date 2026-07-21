// app/data/sidebarData.ts

export interface SidebarHeader {
  id: string;
  title: string;
}

export interface SubMenuItem {
  id: string;
  title: string;
  link: string;
}

export interface MenuItem {
  id: string;
  title: string;
  link: string;
  submenu?: SubMenuItem[];
}

export interface AnteItem {
  id: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

// ⚡ ContactInfo 타입 추가
export interface ContactInfo {
  description: string;
  email: string;
  phone: string;
  address: string;
}

// sidebar Header data
export const sidebarHeaderData: SidebarHeader[] = [
  { id: "header1", title: "Menu" },
  { id: "header2", title: "Ante interdum(API)" },
  { id: "header3", title: "Get in touch" },
];

// 1. 메인 메뉴 데이터
export const menuList: MenuItem[] = [
  { id: "menu1", title: "Homepage", link: "/" },
  { id: "menu2", title: "Generic", link: "/Generic" },
  { id: "menu3", title: "Elements", link: "/Elements" },
  {
    id: "menu4",
    title: "Submenu",
    link: "#",
    submenu: [
      { id: "sub1-1", title: "Lorem Dolor", link: "#" },
      { id: "sub1-2", title: "Ipsum Adipiscing", link: "#" },
      { id: "sub1-3", title: "Tempus Magna", link: "#" },
      { id: "sub1-4", title: "Feugiat Veroeros", link: "#" },
    ],
  },
  { id: "menu5", title: "Etiam Dolore", link: "#" },
  { id: "menu6", title: "Adipiscing", link: "#" },
  {
    id: "menu7",
    title: "Another Submenu",
    link: "#",
    submenu: [
      { id: "sub2-1", title: "Lorem Dolor", link: "#" },
      { id: "sub2-2", title: "Ipsum Adipiscing", link: "#" },
      { id: "sub2-3", title: "Tempus Magna", link: "#" },
      { id: "sub2-4", title: "Feugiat Veroeros", link: "#" },
    ],
  },
  { id: "menu8", title: "Maximus Erat", link: "#" },
  { id: "menu9", title: "Sapien Mauris", link: "#" },
  { id: "menu10", title: "Amet Lacinia", link: "#" },
];

// 2. Ante interdum data
export const anteData: AnteItem[] = [
  {
    id: "ante1",
    image: "images/pic07.jpg",
    title: "Flight Above the Clouds",
    description:
      "An incredible view from the airplane window, capturing a soaring wing high above a sea of fluffy clouds.",
    link: "#",
  },
  {
    id: "ante2",
    image: "images/pic08.jpg",
    title: "Tower Bridge, London, UK",
    description:
      "A stunning aerial panorama of the iconic Tower Bridge spanning the River Thames against the vibrant London skyline.",
    link: "#",
  },
  {
    id: "ante3",
    image: "images/pic09.jpg",
    title: "Serene Coastal Ocean View",
    description:
      "A peaceful sandy beach with gentle ocean waves crashing along the coastline, creating a tranquil seascape.",
    link: "#",
  },
];

// 3. Get in touch data
export const contactInfo = {
  description:
    "Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  email: "information@untitled.tld",
  phone: "(000) 000-0000",
  address: "1234 Somewhere Road #8254<br />Nashville, TN 1234-0000",
};
