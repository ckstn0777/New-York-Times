import { cn } from "@/lib/utils";
import Icon from "./Icon";

type InputProps = {
  value?: string;
  type?: string;
  onReset?: () => void;
} & React.HTMLAttributes<HTMLInputElement>;

export default function Input({
  value,
  type = "text",
  onReset,
  ...rest
}: InputProps) {
  return (
    <div className="relative">
      <input
        value={value}
        type={type}
        className={cn(
          "w-full h-[44px] border-[1px] border-gray rounded-lg px-[20px] py-[10px] outline-none",
          "placeholder:text-gray placeholder:text-sm"
        )}
        {...rest}
      />
      {value && (
        <button type="button" onClick={onReset}>
          <Icon
            name="close"
            fill="gray"
            className="absolute right-[15px] top-[50%] -translate-y-[50%]"
          />
        </button>
      )}
    </div>
  );
}
