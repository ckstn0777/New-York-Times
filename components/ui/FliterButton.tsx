import { cn } from "@/lib/utils";
import Icon, { IconName } from "./Icon";

type FilterButtonProps = {
  text: string;
  leftIcon?: IconName;
  outline?: boolean;
  active?: boolean;
  textEllipsis?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function FliterButton({
  text,
  leftIcon,
  outline,
  active,
  textEllipsis,
  ...rest
}: FilterButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        "border border-gray rounded-[30px] text-black-80 flex justify-center items-center gap-[4px] px-[12px] pt-[6px] pb-[4px] ",
        outline && "border-primary text-primary",
        active && "bg-primary-sub text-white-100 border-white-60",
        textEllipsis && "flex-1 overflow-auto max-w-fit"
      )}
      {...rest}
    >
      {leftIcon && (
        <Icon
          name={leftIcon}
          fill={outline ? "primary" : "black-80"}
          className="min-w-fit"
        />
      )}
      <p
        className={cn(
          "text-sm h-[24px] leading-[24px]",
          textEllipsis && "text-ellipsis whitespace-nowrap overflow-hidden"
        )}
      >
        {text}
      </p>
    </button>
  );
}
