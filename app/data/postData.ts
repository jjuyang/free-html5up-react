// app/data/postData.ts

export interface PostItem {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

export const postData: PostItem[] = [
  {
    id: "post1",
    title: "Amalfi, SA, Italy",
    description:
      "Dramatic cliffs, pastel-colored houses, and the shimmering Tyrrhenian Sea define the enchanting coastline of the Amalfi Coast.",
    link: "#",
    image: "images/pic01.jpg",
  },
  {
    id: "post2",
    title: "Dumbo, New York, United States",
    description:
      "An iconic Brooklyn neighborhood offering cobblestone streets, industrial charm, and breathtaking views of the Manhattan Bridge.",
    link: "#",
    image: "images/pic02.jpg",
  },
  {
    id: "post3",
    title: "Dresden, Germany",
    description:
      "Known as the 'Florence on the Elbe,' boasting magnificent Baroque architecture, historic palaces, and rich cultural heritage.",
    link: "#",
    image: "images/pic03.jpg",
  },
  {
    id: "post4",
    title: "Eiffel Tower, Paris, France",
    description:
      "The timeless symbol of romance and elegance, standing tall over the Champ de Mars in the heart of Paris.",
    link: "#",
    image: "images/pic04.jpg",
  },
  {
    id: "post5",
    title: "Mürren, Lauterbrunnen, Switzerland",
    description:
      "A cozy car-free Alpine village perched high above the cliffside, offering sweeping views of the Eiger, Mönch, and Jungfrau peaks.",
    link: "#",
    image: "images/pic05.jpg",
  },
  {
    id: "post6",
    title: "Santorini, Greece",
    description:
      "Famous for its whitewashed cliffside villages, iconic blue-domed churches, and unforgettable sunsets over the Aegean Sea.",
    link: "#",
    image: "images/pic06.jpg",
  },
];
