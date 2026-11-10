"use client";
import { cn } from "cn";
import { motion } from "motion/react";
import Image from "next/image";

const LandingImges = () => {
  return (
    <article
      className="relative mx-auto  min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140   w-full max-w-7xl lg:p-20 perspective-distant p-10 pt-20

    "
    >
      <div className=" absolute inset-0   mask-t-from-10% mask-b-from-10% h-full"></div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className={cn(" perspective-[4000px]")}
      >
        <Image
          loading="eager"
          src="/agenforce-hero-screenshot-4.jpg"
          alt="Img-1"
          width={1000}
          height={1000}
          className={cn(
            " absolute  border-4  border-neutral-200  mask-b-from-neutral-100   mask-b-from-20% mask-r-from-20%  inset-0 rounded-lg  shadow-2xl ",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 40 }}
        transition={{
          duration: 0.5,
          delay: 0.8,
          ease: "easeInOut",
        }}
        className={cn(
          "  perspective-[4000px]  -translate-y-20 translate-x-10 md:translate-x-10 lg:-translate-y-40 md:-translate-y-20",
        )}
      >
        <Image
          loading="eager"
          src="/agenforce-hero-screenshot-3.jpg"
          alt="Img-1"
          width={1000}
          height={1000}
          className={cn(
            "absolute inset-0 border-4   mask-r-from-50% border-neutral-200 rounded-lg shadow-2xl ",
          )}
          style={{
            transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)",
          }}
        />
      </motion.div>
    </article>
  );
};

export default LandingImges;
