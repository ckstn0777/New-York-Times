"use client";

import { FC, SVGProps } from "react";
import * as Icons from "./icons";
import { Color, ColorType } from "@/lib/styles";

export type IconName = keyof typeof Icons;

type IconProps = {
  name: IconName;
  fill?: ColorType;
  stroke?: ColorType;
} & SVGProps<SVGSVGElement>;

export default function Icon({ name, fill, stroke, ...rest }: IconProps) {
  const Svg = Icons[name] as FC<SVGProps<SVGSVGElement>>;

  return (
    <Svg
      fill={fill && Color[fill]}
      stroke={stroke && Color[stroke]}
      {...rest}
    />
  );
}
