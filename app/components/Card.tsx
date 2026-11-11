import type { ChildClassPros } from "@/types/type";
import { cn } from "cn";

const Card = ({ children, className }: ChildClassPros) => {
  return <div className={cn("  bg-neutral-100 ", className)}>{children}</div>;
};

export default Card;

export const CardTitle = ({ children, className }: ChildClassPros) => {
  return (
    <h1
      className={cn(" text-lg md:text-2xl font-bold font-display", className)}
    >
      {children}
    </h1>
  );
};

export const CardContiner = ({ children, className }: ChildClassPros) => {
  return <div className={cn("px-4 md:pb-12 pb-6", className)}>{children}</div>;
};

export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-80 md:h-80 relative  overflow-hidden perspective-distant",
        className,
      )}
    >
      {children}
    </div>
  );
};
