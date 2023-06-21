import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import NytimesList from "@/components/templates/NytimesList";
import { Nytimes } from "@/types/Nytimes";
import { format } from "date-fns";
import { formatDate } from "@/lib/utils";
import { FILTER_COUNTRIES } from "@/lib/country";
import { TooManyRequestError } from "@/lib/error";

type GetNytimesPrams = {
  page: number;
  headline: string;
  pubDate: Date | string | null;
  country: string[];
  limit?: number;
};

export async function getNytimes({
  page = 0,
  headline,
  pubDate,
  country,
  limit = 10,
}: GetNytimesPrams) {
  try {
    const headLinePrams = headline === "" ? "" : `&fq=headline:("${headline}")`;

    const pubDatePrams =
      pubDate === null
        ? ""
        : `&begin_date=${formatDate(pubDate, "yyyyMMdd")}&end_date=${formatDate(
            pubDate,
            "yyyyMMdd"
          )}`;

    const countryParams =
      country.length === 0
        ? ""
        : `&fq=glocations:("${country
            .map(
              (c) =>
                FILTER_COUNTRIES[c as unknown as keyof typeof FILTER_COUNTRIES]
            )
            .join('","')}")`;

    const res = await fetch(
      `/api/nytimes/search?page=${page}${headLinePrams}${pubDatePrams}${countryParams}&sort=newest`
    );

    if (!res.ok) {
      // console.log(res.status, res.body, res.text, res.statusText);
      if (res.status === 429) {
        throw new TooManyRequestError(res.statusText || "Too Many Requests");
      }
      throw new Error("error");
    }

    const response = await res.json();

    const nytimes = response.response.docs.map((nytimes: any) => ({
      id: nytimes._id,
      headline: nytimes.headline.main,
      webUrl: nytimes.web_url,
      source: nytimes.source,
      pubDate: nytimes.pub_date,
      byline: nytimes.byline.original,
    })) as Nytimes[];

    const total = Math.min(response.response.meta.hits, 1000);

    return {
      nytimes,
      pageInfo: {
        total: total, // 최대 1000개
        nextPage:
          total > response.response.meta.offset + limit ? page + 1 : null,
      },
    };
  } catch (err) {
    throw err;
  }
}

// NytimesList까지 SSR이 필요하다면 사용
// export default async function HydratedNytimes() {
//   const queryClient = getQueryClient();
//   await queryClient.prefetchQuery(["nytimes"], getNytimes);
//   const dehydratedState = dehydrate(queryClient);

//   return (
//     <Hydrate state={dehydratedState}>
//       <NytimesList />
//     </Hydrate>
//   );
// }
