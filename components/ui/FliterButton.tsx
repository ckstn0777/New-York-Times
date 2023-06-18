import Icon, { IconName } from "./Icon";

type FilterButtonProps = {
  text: string;
  leftIcon?: IconName;
  active?: boolean;
};

export default function FliterButton({
  text,
  leftIcon,
  active,
}: FilterButtonProps) {
  return (
    <div className="border border-gray rounded-[30px] flex justify-center items-center gap-[4px] px-[12px] pt-[6px] pb-[4px]">
      {leftIcon && <Icon name={leftIcon} fill="black-80" />}
      <p className="text-sm text-black-80 h-[24px] leading-[24px]">{text}</p>
    </div>
  );
}
