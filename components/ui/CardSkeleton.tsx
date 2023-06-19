import { forwardRef } from "react";

export const CardSkeleton = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-gray rounded-lg p-4 animate-pulse" ref={ref}>
      <div className="h-6 w-5/6 rounded-lg bg-bg-gray" />

      <div className="mt-[10px] flex justify-between">
        <div className=" basis-2/4 h-4 rounded-lg bg-bg-gray" />
        <div className=" basis-1/4 h-4 rounded-lg bg-bg-gray" />
      </div>
    </div>
  );
});

CardSkeleton.displayName = "CardSkeleton";
