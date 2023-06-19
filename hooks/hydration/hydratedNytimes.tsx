import Cards from "@/components/templates/NytimesList";
import Category from "@/components/templates/Category";
import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import NytimesList from "@/components/templates/NytimesList";
import { Nytimes } from "@/types/Nytimes";

export async function getNytimes() {
  const res = await fetch("http://localhost:3000/api/nytimes/search");
  const nytimes = (await res.json()) as Nytimes[];

  return nytimes;
}

export default async function HydratedNytimes() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["nytimes"], getNytimes);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <NytimesList />
    </Hydrate>
  );
}
