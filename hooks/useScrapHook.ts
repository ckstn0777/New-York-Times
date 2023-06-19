import { useScrap } from "@/store/useScrap";
import { Nytimes } from "@/types/Nytimes";

export default function useScrapHook() {
  const { scrap, setScrap } = useScrap();

  const onScrap = (card: Nytimes) => {
    setScrap([...scrap, card]);
  };
  const onUnScrap = (card: Nytimes) => {
    setScrap(scrap.filter((item) => item.id !== card.id));
  };

  return { scrap, onScrap, onUnScrap };
}
