import ReactParser from 'html-react-parser';

import { UseQueryResult } from 'react-query';
import {
  DocumentData,
  FirestoreError,
  QueryDocumentSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';

import { Founders, QuotesTalks, ShayoBanner, SVideos } from '@interfaces/index';

export const ShayoBannerImages: ShayoBanner[] = [
  {
    src: '/images/party-one.png',
    alt: 'party-one',
    imageId: '1',
  },
  {
    src: '/images/party-two.png',
    alt: 'party-two',
    imageId: '2',
  },
  {
    src: '/images/party-three.png',
    alt: 'party-three',
    imageId: '3',
  },
];

export const ShayoQuotes: QuotesTalks[] = [
  {
    quoteAuthor: '(D)esmond',
    quouteContent: 'Your only competition is you from yesterday',
    quoteId: '1',
  },
  {
    quoteAuthor: 'Stoney Paula',
    quouteContent: 'Friends that force you to level up * 100',
    quoteId: '2',
  },
  {
    quoteAuthor: 'Davido',
    quouteContent: 'E CHOKE!!!',
    quoteId: '3',
  },
  {
    quoteAuthor: 'Abdul(S)amad',
    quouteContent: 'Always keep it a 100',
    quoteId: '4',
  },
  {
    quoteAuthor: 'TAT BLACK WEIRDO',
    quouteContent: ReactParser(
      `Even if you're not ready for day <br /> it cannot always be night`
    ),
    quoteId: '5',
  },
  {
    quoteAuthor: 'WIZKID',
    quouteContent: 'Everywhere STEW....',
    quoteId: '6',
  },
  {
    quoteAuthor: '(L)ateef',
    quouteContent: 'Stay Grinding, it makes sense at the End',
    quoteId: '7',
  },
  {
    quoteAuthor: 'Mother Theresa',
    quouteContent: 'If you judge people, you have no time to love them',
    quoteId: '8',
  },
  {
    quoteAuthor: 'Pooh Shiesty',
    quouteContent: 'Always keep it G',
    quoteId: '9',
  },
];

export const DSLFounders: Founders[] = [
  {
    founderName: 'Nzewi (D)esmond',
    founderEmail: 'Shayowithdsl@gmail.com',
    founderAddress: '12, Chapel Street, Apogbon, Lagos, Nigeria.',
    founderPhoneNumber: '09036340011',
    founderId: '1',
  },
  {
    founderName: 'Olagbile Abdul (S)amad',
    founderEmail: 'Shayowithdsl@gmail.com',
    founderAddress: '12, Chapel Street, Apogbon, Lagos, Nigeria.',
    founderPhoneNumber: '09036340011',
    founderId: '2',
  },
  {
    founderName: 'Balogun Abdul(L)ateef',
    founderEmail: 'Shayowithdsl@gmail.com',
    founderAddress: '12, Chapel Street, Apogbon, Lagos, Nigeria.',
    founderPhoneNumber: '09036340011',
    founderId: '3',
  },
];

export const ShayoVideos: SVideos[] = [
  {
    videoUrl: '/videos/video-1.mp4',
    videoId: '1',
  },
  {
    videoUrl: '/videos/video-2.webm',
    videoId: '2',
  },
  {
    videoUrl: '/videos/video-3.webm',
    videoId: '3',
  },
];

export const DrinkCategory = [
  'Non alcoholic',
  'Whisky',
  'Cognac',
  'Red wine',
  'Champagne',
  'Rum',
  'Irish cream',
  'White wine',
  'Gin',
  'Sparkling wine',
  'Brandy',
  'Juice',
  'Tequila',
  'Vodka',
  'Others',
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
