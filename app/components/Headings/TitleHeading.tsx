"use client";
import { cn } from "@/lib/utils";
import { ChildClassPros } from "@/types/type";
const TitleHeading = ({ children, className, as = "h1" }: ChildClassPros) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl lg:text-6xl tracking-tight antialiased font-display  font-medium ",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default TitleHeading;
