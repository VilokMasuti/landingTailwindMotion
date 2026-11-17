"use client";
import { ChildClassPros } from "@/types/type";
import { cn } from "cn";
import Container from "./Continer";
import First from "./skelton/First";
import Second from "./skelton/Second";

const FeatuersSecond = () => {
  return (
    <section className="pt-10 py-10 md:pt-20 lg:pt-32 relative overflow-hidden  ">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-200 divide-x divide-neutral-200 dark:divide-neutral-800">
          <div className="p-4 ">
            <h1 className=" font-bold text-lg capitalize font-display ">
              Agent studio
            </h1>
            <Carddis className=" font-inter text-neutral-600 mt-2">
              Design, launch and customize AI agents for marketing, sales,
              support and ops, built around your workflows.
            </Carddis>
            <CardSkeleton className=" mt-8">
              <First />
            </CardSkeleton>
          </div>
          <div className="p-4  ">
            <h1 className=" font-display  capitalize font-semibold text-lg">
              Multi-Agent Orchestration
            </h1>
            <Carddis className="font-inter text-neutral-600 mt-2 ">
              Coordinate multiple agents across workflows using memory,
              interrupts, and conditional logic.
            </Carddis>
            <CardSkeleton>
              <Second />
            </CardSkeleton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeatuersSecond;

const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-80 md:h-80 relative flex flex-col  overflow-hidden perspective-distant ",
        className,
      )}
    >
      {children}
    </div>
  );
};

const Carddis = ({ className, children }: ChildClassPros) => {
  return (
    <p
      className={cn(
        "font-inter antialiased text-neutral-400 mt-2 text-balance max-w-lg",
        className,
      )}
    >
      {children}
    </p>
  );
};
