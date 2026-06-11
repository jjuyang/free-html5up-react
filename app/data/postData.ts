// app/data/postData.ts

export interface PostItem {
  id: string;
  title: string;
  description: string;
  link: string;
  Image: string;
}

export const postData: PostItem[] = [
  {
    id: "post1",
    title: "Interdum aenean",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    link: "#",
    Image: "images/pic01.jpg"
  },
  {
    id: "post2",
    title: "Nulla amet dolore",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    link: "#",
    Image: "images/pic02.jpg"
  },
  {
    id: "post3",
    title: "Tempus ullamcorper",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    link: "#", 
    Image: "images/pic03.jpg"
  },
  {
    id: "post4",
    title: "Sed etiam facilis",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    link: "#",
    Image: "images/pic04.jpg"
  },
  {
    id: "post5", 
    title: "Feugiat lorem aenean",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    link: "#", 
    Image: "images/pic05.jpg"
  },
  {
    id: "post6",
    title: "Amet varius aliquam",
    description: "Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.",
    link: "#",
    Image: "images/pic06.jpg"
  }
];