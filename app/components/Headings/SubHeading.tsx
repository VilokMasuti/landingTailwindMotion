"use client";
import { cn } from "@/lib/utils";
import { ChildClassPros } from "@/types/type";

const SubHeading = ({ children, className, as = "p" }: ChildClassPros) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-base/6 md:text-lg text-neutral-400 dark:text-neutral-400 max-w-xl tracking-tight  font-inter  ",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
