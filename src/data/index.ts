import { nanoid } from "nanoid";
import ReactParser from "html-react-parser";

import {
  DrinkCategoryInterface,
  Founders,
  QuotesTalks,
  ShayoBanner,
  SVideos,
} from "src/interfaces";
import { UseQueryResult } from "react-query";
import {
  DocumentData,
  FirestoreError,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from "firebase/firestore";

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
    quoteAuthor: "Stoney Paula",
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
    quouteContent: ReactParser(
      `Even if you're not ready for day <br /> it cannot always be night`
    ),
    quoteId: nanoid(7),
  },
  {
    quoteAuthor: "WIZKID",
    quouteContent: "Everywhere STEW....",
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
    videoUrl: "/videos/video-1.mp4",
    videoId: nanoid(7),
  },
  {
    videoUrl: "/videos/video-2.webm",
    videoId: nanoid(7),
  },
  {
    videoUrl: "/videos/video-3.webm",
    videoId: nanoid(7),
  },
];

export const DrinkCategory = [
  "Non alcoholic",
  "Whisky",
  "Cognac",
  "Red wine",
  "Champagne",
  "Rum",
  "Irish cream",
  "White wine",
  "Gin",
  "Sparkling wine",
  "Brandy",
  "Juice",
  "Others",
];

export const authContextInitialValues = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  setUser: () => {},
  setIsLoggedIn: () => {},
  setIsLoading: () => {},
  signOutUser: () => {},
  resetPassword: () => {},
  sendPasswordEmailReset: () => {},
  signInUser: () => {},
};

export const productContextInitialValues = {
  products: [] as QueryDocumentSnapshot<DocumentData>[],
  storeQuery: {} as UseQueryResult<QuerySnapshot<DocumentData>, FirestoreError>,
  cart: [] as any[],
  addProduct: () => {},
  removeProduct: () => {},
  removeAllProductQty: () => {},
};
