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
      "https://firebasestorage.googleapis.com/v0/b/swdsl-5185c.appspot.com/o/site-videos%2FY2Mate.is%20-%20EPIC%20Cocktail%20B-ROLL%20Video%20(Inspired%20by%20DANIEL%20SCHIFFER)-P2EOVODrSzs-1080p-1641819470018.mp4?alt=media&token=4ed4bd1d-8acf-475d-b66c-10ba5a32ec60",
    videoId: nanoid(7),
  },
  {
    videoUrl:
      "https://firebasestorage.googleapis.com/v0/b/swdsl-5185c.appspot.com/o/site-videos%2FWhatsApp%20Video%202022-01-12%20at%204.12.21%20PM.mp4?alt=media&token=9e162559-7384-4baa-b0d1-abfd8de714dd",
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
