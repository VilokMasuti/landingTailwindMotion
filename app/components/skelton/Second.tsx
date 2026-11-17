import { ChildClassPros } from "@/types/type";
import { IconCircleDashedCheck } from "@tabler/icons-react";
import { cn } from "cn";
import { ReactNode } from "react";
import { HubSpot, Salesforce, Sheets } from "../icons";
import { LogoSvg } from "../Logo";

const Second = () => {
  return (
    <div className=" flex-1 rounded-t-3xl flex items-center justify-center  w-full h-full absolute inset-x-0 p-2  transform-3d perspective-distant    translate-x-10">
      <Circle className="flex items-center justify-center border-neutral-200  bg-black shadow-brand  ">
        <LogoSvg className="size-10  text-white rotate-x-180" />
        <div
          className="size-8 flex absolute inset-0 m-auto items-center justify-center
          rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:20s]"
        >
          <Salesforce className="size-7" />
        </div>
        <div
          className="size-8 flex absolute inset-0 m-auto items-center justify-center
          rounded-sm animate-orbit [--translate-position:152px] [--orbit-duration:10s]"
        >
          <Sheets className="size-7" />
        </div>
        <div
          className="size-8 flex absolute inset-0 m-auto items-center justify-center
          rounded-sm animate-orbit [--translate-position:200px] [--orbit-duration:25s]"
        >
          <HubSpot className="size-7" />
        </div>
        <div
          className="flex absolute w-[25rem] inset-0 m-auto items-center shrink-0  justify-center
         animate-orbit [--translate-position:200px] [--orbit-duration:40s] "
        >
          <SkeletonCard
            className=" h-20  "
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Campaign Planner"
            description="Creates clear, ready-to-use campaign briefs using product info"
          />
        </div>
        <div
          className="flex absolute w-[28rem] inset-0 m-auto items-center shrink-0  justify-center
         animate-orbit [--translate-position:130px] [--orbit-duration:25s] scale-[1.1]"
        >
          <SkeletonCard
            className=" h-10 p-2 rounded-md "
            icon={<IconCircleDashedCheck className="size-4" />}
            title="Ready made solutions"
          />
        </div>
      </Circle>
      <Circle className="shadow border-neutral-100  size-60 bg-neutral-100/80 z-[9] relative"></Circle>
      <Circle className="shadow border-neutral-100 size-80 bg-neutral-100/60 z-[8]"></Circle>
      <Circle className="shadow border-neutral-100 size-100 bg-neutral-100/40 z-[7]"></Circle>
      <Circle className="shadow border-neutral-100 size-120 bg-neutral-100/20 z-[6]"></Circle>
    </div>
  );
};

export default Second;

const Circle = ({ className, children }: ChildClassPros) => {
  return (
    <div
      className={cn(
        "size-50 z-10  border border-transparent  rounded-full absolute shadow-input inset-0 m-auto zoom-90 ",
        className,
      )}
      style={{
        transform: "rotateX(28deg) rotateY(18deg) rotateZ(-10deg) ",
      }}
    >
      {children}
    </div>
  );
};

type SkeletonCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  badge?: ReactNode;
  tags?: readonly string[];
  className?: string;
};

export const SkeletonCard = ({
  icon,
  title,
  description,
  badge,
  tags = [],
  className = "",
}: Partial<SkeletonCardProps>) => {
  return (
    <div
      className={`  max-w-[70%] rounded-2xl  border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-700 dark:bg-neutral-900 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="shrink-0 text-neutral-700 dark:text-neutral-300">
          {icon}
        </span>
        <p className="min-w-0 text-xs font-display font-semibold text-neutral-950 dark:text-neutral-100">
          {title}
        </p>
        {badge}
      </div>

      <p className="mt-3 text-balance  text-xs text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};
