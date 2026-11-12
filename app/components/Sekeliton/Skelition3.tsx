import { cn } from "@/lib/utils";
import {
  IconCircleCheckFilled,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";

export const Skelition3 = () => {
  return (
    <div
      style={{
        transform: "rotateX(14deg) rotateY(20deg) rotateZ(-20deg)    ",
      }}
      className={cn(
        "max-w-[85%] perspective-distant h-full my-auto bg-neutral-100 mx-auto w-full p-3 rounded-2xl dark:border-neutral-700 shadow-2xl flex flex-col",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10",
        "  translate-x-10   ",
      )}
    >
      <div className="flex gap-3 items-center">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-inter font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>

      <div className="group relative overflow-hidden flex-1 bg-neutral-200 mt-4 border border-neutral-200 rounded-2xl  ">
        <Pattern />

        <div className=" absolute    transition-all duration-500 inset-0  bg-white h-full w-full    rounded-2xl group-hover:translate-x-0  -translate-y-2 translate-x-2  group-hover:translate-y-0 scale-100   ">
          <Row
            icon={
              <IconCircleCheckFilled className="size-4 shrink-0 text-green-500" />
            }
            text="Fetching Data"
            time="10s"
          />
          <GradientHr />
          <Row
            icon={
              <IconCircleCheckFilled className="size-4 shrink-0 text-green-500" />
            }
            text="Processing Data"
            time="20s"
          />
          <GradientHr />
          <Row
            icon={
              <IconCircleCheckFilled className="size-4 shrink-0 text-green-500" />
            }
            text="Performing Action"
            time="30s"
          />
          <GradientHr />
          <Row
            icon={
              <IconCircleCheckFilled className="size-4 shrink-0 text-green-500" />
            }
            text="Waiting"
            time="40s"
          />
          <GradientHr />
          <Row
            icon={
              <IconLoader2 className="size-4 animate-spin shrink-0 text-yellow-500" />
            }
            text="Generating Report"
            time="50s"
            variant="warning"
          />
        </div>
      </div>
    </div>
  );
};

export const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed"></div>
  );
};
const GradientHr = () => {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
  );
};

export const Row = ({
  icon,
  time,
  text,
  variant = "success",
}: {
  icon: React.ReactNode;
  time: string;
  text: string;
  variant?: "success" | "warning" | "danger";
}) => {
  const iconColors = {
    success: "text-green-500",
    warning: "text-yellow-500",
    danger: "text-red-500",
  };

  return (
    <div className="flex items-center justify-between  px-4 py-2">
      <div className="flex items-center gap-2 mt-2">
        <div
          className={`size-4 flex items-center justify-center [&_svg]:text-current ${iconColors[variant]}`}
        >
          {icon}
        </div>
        <p className="text-neutral-500 text-sm font-inter font-medium">
          {text}
        </p>
      </div>
      <div className="flex items-center  gap-2.5 text-neutral-400">
        <IconRipple className="size-3" />
        <p className="text-[10px] font-bold">{time}</p>
      </div>
    </div>
  );
};
