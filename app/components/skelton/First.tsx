"use client";

import { cn } from "cn";
import icon from "lucide-react/icons/";
import { motion } from "motion/react";
import {
  HubSpot,
  HumanInTheLoop,
  Salesforce,
  Sheets,
  WorkflowSettings,
} from "../icons";

const item = {
  hidden: { opacity: 0, y: -24 },
  show: { opacity: 1, y: 0 },
};
const First = () => {
  return (
    <div className=" flex-1 rounded-t-3xl bg-neutral-100 border border-neutral-200 max-w-sm mx-auto w-full h-full absolute inset-x-0 p-px">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.91,
              type: "spring",
              mass: 3,
              ease: "easeInOut",
            },
          },
        }}
        className=" flex flex-col gap-2 p-1 mt-2"
      >
        <Card
          icon={<HumanInTheLoop className=" text-white" />}
          iconbg="bg-blue-600"
          title="       Human-in-the-Loop"
          subtitle="          Add reviews, approvals and escalations without slowing work."
        />
        <Card
          icon={<WorkflowSettings className=" text-white" />}
          iconbg="bg-green-600"
          title=" Define Processing Logic"
          subtitle="Create workflows, decision points, and conditional actions for each task."
        />
        <Card
          icon={<WorkflowSettings className=" text-white" />}
          iconbg="bg-red-600"
          title="  Processing Logic Out"
          subtitle="Create workflows, decision points, and conditional actions for each task."
        />
      </motion.div>
    </div>
  );
};

export default First;

interface CardPro {
  icon: icon;
  title: string;
  subtitle: string;
  className: string;
  iconbg: string;
}

type icon = React.ReactNode;
export const Card = ({
  icon,
  title,
  subtitle,
  className,
  iconbg,
}: Partial<CardPro>) => {
  return (
    <motion.div
      variants={item}
      className={cn(
        " p-4 shadow-black/10 gap-4  border bg-white dark:bg-neutral-800 border-transparent ring-1 rounded-[16px] ring-black/10 flex items-start",
        className,
      )}
    >
      <div className={cn("rounded-full p-1 ", iconbg)}>{icon}</div>

      <div className=" flex flex-col gap-1 ">
        <h2 className=" font-display antialiased  tracking-tight text-balance text-lg font-bold text-black">
          {title}
        </h2>
        <p className="  font-inter text-balance text-sm text-neutral-500 max-w-[20rem] ">
          {subtitle}
        </p>

        <div
          className=" flex
         items-center gap-2.5 pt-1"
        >
          <Tag icon={<Salesforce />} label="Salesforce" />
          <Tag icon={<HubSpot />} label="Hubspot" />
          <Tag icon={<Sheets />} label="Sheets" />
        </div>
      </div>
    </motion.div>
  );
};

const Tag = ({ icon, label }: { icon: icon; label: string }) => {
  return (
    <div className=" shadow-input  w-fit rounded flex items-center  gap-1 px-2   ">
      <span className="  ">{icon}</span>
      <p className="  text-xs antialiased  text-[0.8rem]  font-light text-neutral-600 font-inter ">
        {label}
      </p>
    </div>
  );
};
