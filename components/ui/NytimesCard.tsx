import Link from "next/link";
import Icon from "./Icon";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Nytimes } from "@/types/Nytimes";

type NytimesCardProps = {
  card: Nytimes;
  isScraped: boolean;
  onScrap: (card: Nytimes) => void;
  onUnScrap: (card: Nytimes) => void;
};

export default function NytimesCard({
  card,
  isScraped,
  onScrap,
  onUnScrap,
}: NytimesCardProps) {
  return (
    <article
      key={card.id}
      className="bg-white-90 rounded-[8px] px-[20px] py-[10px] flex flex-col gap-2"
    >
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold w-[260px] tracking-[-0.05em] line-clamp-2">
          <Link href={card.webUrl}>{card.headline}</Link>
        </h2>
        <div className="p-1">
          {isScraped ? (
            <Icon
              name="starFill"
              fill="accent"
              onClick={() => onUnScrap(card)}
            />
          ) : (
            <Icon name="star" fill="black-80" onClick={() => onScrap(card)} />
          )}
        </div>
      </div>

      <div className="flex justify-between text-[13px] gap-2">
        <div>
          <span className="mr-2">{card.source}</span>
          <span>{card.byline}</span>
        </div>
        <div className="text-black-80 flex-none">
          <span>
            {format(new Date(card.pubDate.split("T")[0]), "yyyy.M.d.(EE)", {
              locale: ko,
            })}
          </span>
        </div>
      </div>
    </article>
  );
}
