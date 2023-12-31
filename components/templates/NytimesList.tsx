"use client";

import NytimesCard from "../ui/NytimesCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getNytimes } from "@/hooks/hydration/hydratedNytimes";
import { useEffect, useMemo } from "react";
import { useInView } from "react-intersection-observer";
import { CardSkeleton } from "../ui/CardSkeleton";
import useScrapHook from "@/hooks/useScrapHook";
import { Toaster } from "react-hot-toast";
import { useHomeFilter } from "@/store/useHomeFilter";
import NytimesEmpty from "./NytimesEmpty";
import NytimesListError from "./NytimesListError";
import { useDidMountEffect } from "@/hooks/useDidMountEffect";

export default function NytimesList() {
  const { ref, inView } = useInView();

  const { headline, pubDate, country } = useHomeFilter();
  const { scrap, onScrap, onUnScrap } = useScrapHook();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
    error,
  } = useInfiniteQuery({
    queryKey: ["infinite-scroll-nytimes"],
    queryFn: async ({ pageParam = 0 }) => {
      const res = await getNytimes({
        page: pageParam,
        headline,
        pubDate,
        country,
      });
      return res;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.pageInfo.nextPage) {
        return lastPage.pageInfo.nextPage;
      }
      return undefined;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes 동안 fresh 하게 유지
  });

  const nytimes = useMemo(() => {
    if (!data) return [];

    return data.pages.flatMap((page) => page.nytimes);
  }, [data]);

  useEffect(() => {
    if (!inView) return;
    if (!hasNextPage) return;
    if (!fetchNextPage) return;
    console.log("fetch next page");

    fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);

  // filter가 바뀌면 react-query refetch
  useDidMountEffect(() => {
    refetch();
  }, [headline, pubDate, country, refetch]);

  if (error) {
    return (
      <NytimesListError
        /* @ts-ignore */
        errorMessage={error.message || "알 수 없는 에러가 발생하였습니다."}
      />
    );
  }

  // 처음에만 로딩 스켈레톤 10개 보여주기
  // isFetchingNextPage이 처음에는 false이고, 이후 fetchNextPage 호출될때 true로 바뀜
  if (!isFetchingNextPage && isFetching) {
    return (
      <section className="h-full grid grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-3 mx-[20px] my-[20px]">
        {Array.from({ length: 10 }).map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
      </section>
    );
  }

  return (
    <>
      {nytimes.length > 0 ? (
        <section className="h-full grid grid-cols-1 gap-[8px] sm:grid-cols-2 lg:grid-cols-3 mx-[20px] my-[20px]">
          {nytimes.map((card) => (
            <NytimesCard
              key={card.id}
              card={card}
              isScraped={scrap.some((item) => item.id === card.id)}
              onScrap={onScrap}
              onUnScrap={onUnScrap}
            />
          ))}

          {hasNextPage &&
            Array.from({ length: 2 }).map((_, idx) => (
              <CardSkeleton key={idx} ref={idx === 0 ? ref : undefined} />
            ))}
        </section>
      ) : (
        <NytimesEmpty />
      )}

      <Toaster position="bottom-center" />
    </>
  );
}
