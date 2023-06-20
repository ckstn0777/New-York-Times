export type Filter = {
  headline: string;
  pubDate: Date | null;
  country: string[];
};

export type FliterStore = Filter & {
  setFilter: ({ headline, pubDate, country }: Filter) => void;
};
