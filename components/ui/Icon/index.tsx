"use client";

import { FC, SVGProps } from "react";
import * as Icons from "./icons";
import { Color, ColorType } from "@/lib/styles";

type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  fill?: ColorType;
  stroke?: ColorType;
} & SVGProps<SVGSVGElement>;

export default function Icon({
  name,
  fill = "black-100",
  stroke = "black-100",
  ...rest
}: IconProps) {
  const Svg = Icons[name] as FC<SVGProps<SVGSVGElement>>;

  return <Svg fill={Color[fill]} stroke={Color[stroke]} {...rest} />;
}
