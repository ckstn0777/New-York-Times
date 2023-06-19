import { useScrap } from "@/store/useScrap";
import { Nytimes } from "@/types/Nytimes";
import toast from "react-hot-toast";

export default function useScrapHook() {
  const { scrap, setScrap } = useScrap();

  const onScrap = (card: Nytimes) => {
    setScrap([...scrap, card]);
    toast.success("스크랩 되었습니다.");
  };
  const onUnScrap = (card: Nytimes) => {
    setScrap(scrap.filter((item) => item.id !== card.id));
    toast.success("스크랩이 해제되었습니다.");
  };

  return { scrap, onScrap, onUnScrap };
}
