"use client";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: React.ReactNode;
  selector: string;
};

export default function Portal({ children, selector }: PortalProps) {
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (document) {
      setElement(document.getElementById(selector));
    }
  }, [selector]);

  if (!element) {
    return <></>;
  }

  return ReactDOM.createPortal(children, element);
}
