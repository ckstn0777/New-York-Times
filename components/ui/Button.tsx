import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "w-full py-[18px] rounded-[16px] text-white-100",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
