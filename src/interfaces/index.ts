export interface ShayoBanner {
  src: string;
  alt: string;
  imageId: string;
}

export interface QuotesTalks {
  quoteAuthor: string;
  quouteContent: string | JSX.Element | JSX.Element[];
  quoteId: string;
}

export interface Founders {
  founderName: string;
  founderEmail: string;
  founderPhoneNumber: string;
  founderAddress: string;
  founderId: string;
}

export interface SVideos {
  videoUrl: string;
  videoId: string;
}
