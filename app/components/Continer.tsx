import { cn } from "@/lib/utils";
import { ChildClassPros } from "@/types/type";

const Container = ({ children, className }: ChildClassPros) => {
  return (
    <article className={cn("  max-w-7xl mx-auto", className)}>
      {children}
    </article>
  );
};

export default Container;
