import { Founders, QuotesTalks, ShayoBanner, SVideos } from "src/interfaces";
import { nanoid } from "nanoid";

export const ShayoBannerImages: ShayoBanner[] = [
  {
    src: "/images/party-one.png",
    alt: "party-one",
    imageId: nanoid(7),
  },
  {
    src: "/images/party-two.png",
    alt: "party-two",
    imageId: nanoid(7),
  },
  {
    src: "/images/party-three.png",
    alt: "party-three",
    imageId: nanoid(7),
  },
];

export const ShayoQuotes: QuotesTalks[] = [
  {
    quoteAuthor: "(D)esmond",
    quouteContent: "Your only competition is you from yesterday",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "Paulaways",
    quouteContent: "Friends that force you to level up * 100",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "Davido",
    quouteContent: "E CHOKE!!!",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "Abdul(S)amad",
    quouteContent: "Always keep it a 100",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "TAT BLACK WEIRDO",
    quouteContent:
      "Even if you're not ready for day, it cannot always be night",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "WIZKID",
    quouteContent: "Everywhere STEW.......",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "DSL",
    quouteContent: "Come shayo with DSL",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "(L)ateef",
    quouteContent: "Stay Grinding, it makes sense at the End",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "Mother Theresa",
    quouteContent: "If you judge people, you have no time to love them",
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "Pooh Shiesty",
    quouteContent: "Always keep it G",
    quoteId: nanoid(7),
  },
];

export const DSLFounders: Founders[] = [
  {
    founderName: "Nzewi (D)esmond",
    founderEmail: "johnDoe@gmail.com",
    founderAddress: "12, Chapel Street, Apogbon, Lagos, Nigeria.",
    founderPhoneNumber: "09036340011",
    founderId: nanoid(7),
  },
  {
    founderName: "Olagbile Abdul (S)amad",
    founderEmail: "johnDoe@gmail.com",
    founderAddress: "12, Chapel Street, Apogbon, Lagos, Nigeria.",
    founderPhoneNumber: "09036340011",
    founderId: nanoid(7),
  },
  {
    founderName: "Balogun Abdul(L)ateef",
    founderEmail: "johnDoe@gmail.com",
    founderAddress: "12, Chapel Street, Apogbon, Lagos, Nigeria.",
    founderPhoneNumber: "09036340011",
    founderId: nanoid(7),
  },
];

export const ShayoVideos: SVideos[] = [
  {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/swdsl-5185c.appspot.com/o/site-videos%2FDrink%20advertising%20Video%20Shoot.webm?alt=media&token=578a67e5-7a3b-4804-8d9e-d1add8543e6c",
    videoId: nanoid(7),
  },
  {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/swdsl-5185c.appspot.com/o/site-videos%2FClase%20Azul%20Mezcal%20Guerrero%20-%20A%20Warrior%20Cloaked%20in%20Beauty.webm?alt=media&token=e66932d8-7371-41d5-a146-3332b8524582",
    videoId: nanoid(7),
  },
  {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/swdsl-5185c.appspot.com/o/site-videos%2FGlenfiddich%2012%20year%20whiskey%20commercial.webm?alt=media&token=566a4dd5-2df2-4b3c-896b-881a2cedb35b",
    videoId: nanoid(7),
  },
  {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/swdsl-5185c.appspot.com/o/site-videos%2FRED%20WINE%20ADS.webm?alt=media&token=df84faa5-a1d2-4482-9846-5795ac78b11a",
    videoId: nanoid(7),
  },
];
