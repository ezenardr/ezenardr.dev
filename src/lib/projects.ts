import ImgQMAB from "@/img/quimonteabord.webp";
import ImgWenshair from "@/img/wenshair.webp";
import ImgWhereInTheWorld from "@/img/whereInTheWorld.webp";
import ImgAddressTracker from "@/img/ip-tracker.jpg";
import { StaticImageData } from "next/image";
type TProjects = {
  title: string;
  image: StaticImageData;
  description: string;
  github?: string;
  link: string;
};
export const projects: Array<TProjects> = [
  {
    title: "Wenshair Premium BarberShop",
    image: ImgWenshair,
    description:
      "Welcome to the online hub of sophistication and style – WensHair's official website! Immerse yourself in a virtual haven where timeless craftsmanship converges with contemporary flair, promising a grooming experience like no other.",
    link: "https://wenshair.com",
  },
  {
    title: "Where In The World",
    image: ImgWhereInTheWorld,
    description:
      "Where In The World is your premier destination for unlocking a wealth of information about countries around the world. Our user-friendly and comprehensive Rest Countries API website provides developers, researchers, and enthusiasts with a powerful tool to access up-to-date and detailed data on nations across the globe.",
    github: "https://github.com/ezenardr/where-in-the-world.git",
    link: "https://restcountries.ezenardr.dev/",
  },
  {
    title: "IP Address Tracker",
    image: ImgAddressTracker,
    description:
      "Track and locate the geographical location of any IP address instantly with our powerful and user-friendly IP address tracker web app. Discover detailed information including country, city, region, ISP, and more, providing invaluable insights for network administration, cybersecurity, and targeted marketing strategies.",
    github: "https://github.com/ezenardr/IP-Address-Tracker.git",
    link: "https://iptracker.ezenardr.dev/",
  },
  {
    title: "Qui Monte à Bord",
    image: ImgQMAB,
    description:
      "This blog is your go-to destination for an enriching and dynamic journey into the ever-evolving realm of personal aesthetics.",
    link: "https://quimonteabord.com",
  },
];
