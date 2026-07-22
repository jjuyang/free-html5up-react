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
  { id: "header2", title: "Post API 최신 3개" },
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

// 3. Get in touch data
export const contactInfo = {
  description:
    "Sed varius enim lorem ullamcorper dolore aliquam aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin sed aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
  email: "information@untitled.tld",
  phone: "(000) 000-0000",
  address: "1234 Somewhere Road #8254<br />Nashville, TN 1234-0000",
};
