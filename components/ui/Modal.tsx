"use client";

import { useEffect, useRef } from "react";
import Portal from "./Portal";
import useClickOutSide from "@/hooks/useClickOutSide";

type ModalProps = {
  children: React.ReactNode;
  onClose?: () => void;
};

export default function Modal({ children, onClose }: ModalProps) {
  const ref = useClickOutSide({ onClose });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Portal selector="modal">
      <div className="fixed z-50 inset-0 bg-black-100/50 flex justify-center items-center">
        <div className="bg-white-100 p-5 w-full m-5 rounded-[16px]" ref={ref}>
          {children}
        </div>
      </div>
    </Portal>
  );
}
