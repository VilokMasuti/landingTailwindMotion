import { cn } from "@/lib/utils";
import { ChildClassPros } from "@/types/type";

const Container = ({ children, className }: ChildClassPros) => {
  return (
    <article
      className={cn(" w-full  max-w-7xl md:px-8  px4 mx-auto", className)}
    >
      {children}
    </article>
  );
};

export default Container;
