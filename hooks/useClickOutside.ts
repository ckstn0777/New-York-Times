import { useEffect, useRef } from "react";

type Props = {
  onClose?: () => void;
};

export default function useClickOutSide({ onClose }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      // datepicker 선택 시 모달이 닫히는걸 방지
      if ((e.target as Element)?.className?.includes("react-datepicker")) {
        return;
      }

      // 모달 컨텐츠 영역 밖을 클릭했을 때 onClose 실행
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [onClose]);

  return ref;
}
