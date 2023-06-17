import { ColorType } from "@/lib/styles";

type ButtonProps = {
  background: ColorType;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ background, children, ...rest }: ButtonProps) {
  const bgColor = `bg-${background}`;

  return (
    <button
      className={`w-full py-[18px] rounded-[16px] text-white-100 ${bgColor}`}
      {...rest}
    >
      {children}
    </button>
  );
}
