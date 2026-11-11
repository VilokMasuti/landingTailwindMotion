import { IconCircleDashedCheck, IconClockHour1 } from "@tabler/icons-react";
import type { ReactNode } from "react";
export default function Skeleton1() {
  return (
    <div
      className=" perspective-distant h-full w-full md:-translate-y-10   mask-radial-from-50% mask-r-from-50% "
      style={{
        transform: "rotateX(30deg) rotateY(-20deg) rotateZ(15deg) scale(1.1) ",
      }}
    >
      <SkeletonCard
        className="absolute z-10 bottom-20 left-4 max-w-[80%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Risk Analysis"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="40s" variant="warning" />}
        tags={["Google Ads", "SaaS", "Content"]}
      />

      <SkeletonCard
        className="absolute left-4 bottom-10 z-20 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Issue Tracker"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="10s" variant="success" />}
        tags={["Google Ads", "SaaS", "Content"]}
      />

      <SkeletonCard
        className="absolute left-10 bottom-0 max-w-[90%] z-30"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        description="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
        badge={<Badge text="120s" variant="danger" />}
        tags={["Google Ads", "SaaS", "Content"]}
      />
    </div>
  );
}

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
}: SkeletonCardProps) => {
  return (
    <div
      className={`mx-auto my-auto h-fit  max-w-[70%] rounded-2xl  border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-700 dark:bg-neutral-900 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="shrink-0 text-neutral-700 dark:text-neutral-300">
          {icon}
        </span>
        <p className="min-w-0 text-sm font-semibold text-neutral-950 dark:text-neutral-100">
          {title}
        </p>
        {badge}
      </div>

      <p className="mt-3 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap items-center gap-2.5">
          {tags.map((tag, index) => (
            <Tag key={`${tag}-${index}`} text={tag} />
          ))}
        </div>
      )}
    </div>
  );
};

const badgeVariants = {
  danger: "border-red-500/40 bg-red-500/10 text-red-500",
  success: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
  warning: "border-yellow-500/40 bg-yellow-500/10 text-yellow-500",
};

type BadgeProps = {
  text: string;
  variant?: keyof typeof badgeVariants;
};

export const Badge = ({ text, variant = "success" }: BadgeProps) => (
  <span
    className={`inline-flex shrink-0 items-center gap-1 rounded-full border px-2 py-1 ${badgeVariants[variant]}`}
  >
    <IconClockHour1 className="size-3.5 shrink-0" />
    <span className="text-xs font-normal leading-none">{text}</span>
  </span>
);

const Tag = ({ text }: { text: string }) => (
  <span className="rounded-md bg-neutral-200 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
    {text}
  </span>
);
