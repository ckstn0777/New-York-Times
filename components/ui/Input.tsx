import { cn } from "@/lib/utils";

type InputProps = {
  type?: string;
} & React.HTMLAttributes<HTMLInputElement>;

export default function Input({ type = "text", ...rest }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "w-full h-[44px] border-[1px] border-gray rounded-lg px-[20px] py-[10px] outline-none",
        "placeholder:text-gray placeholder:text-sm"
      )}
      {...rest}
    />
  );
}
