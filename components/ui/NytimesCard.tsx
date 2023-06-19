import Link from "next/link";
import Icon from "./Icon";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

type CardProps = {
  id: string;
  headline: string;
  webUrl: string;
  source: string;
  pubDate: string;
  isScraped?: boolean;
};

export default function NytimesCard({ card }: { card: CardProps }) {
  return (
    <article key={card.id} className="bg-white-90 rounded-[8px]">
      <Link
        href={card.webUrl}
        className="px-[20px] py-[10px] flex flex-col gap-2"
      >
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold w-[260px] tracking-[-0.05em] line-clamp-2">
            {card.headline}
          </h2>
          <div className="p-1">
            {card.isScraped ? (
              <Icon name="starFill" fill="accent" />
            ) : (
              <Icon name="star" fill="black-80" />
            )}
          </div>
        </div>
        <div className="flex justify-between text-[13px]">
          <div>
            <span className="mr-2">{card.source}</span>
            {/* <span>김정확 기자</span> */}
          </div>
          <div className="text-black-80">
            <span>
              {format(new Date(card.pubDate), "yyyy.M.d.(EE)", {
                locale: ko,
              })}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
