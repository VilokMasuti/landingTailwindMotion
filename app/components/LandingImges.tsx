"use client";

import { cn } from "cn";
import {
  motion,
  type TargetAndTransition,
  type Transition,
} from "motion/react";
import Image from "next/image";
import type { CSSProperties } from "react";
import Container from "./Continer";

export type LandingImage = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  wrapperClassName?: string;
  className?: string;
  imageStyle?: Omit<CSSProperties, "transform">;
  initial?: TargetAndTransition;
  whileInView?: TargetAndTransition;
  transition?: Transition;
};

type LandingImageAnimation = Pick<
  LandingImage,
  "initial" | "whileInView" | "transition"
>;

type LandingImagesProps = {
  images?: LandingImage[];
  animation?: LandingImageAnimation;
  containerClassName?: string;
  className?: string;
  sectionClassName?: string;
  imageClassName?: string;
};

const defaultImages: LandingImage[] = [
  {
    src: "/agenforce-hero-screenshot-4.jpg",
    alt: "Agent workflow dashboard",
  },
  {
    src: "/agenforce-hero-screenshot-3.jpg",
    alt: "Agent workflow dashboard",
  },
];

const defaultImageStyles: Omit<LandingImage, "src" | "alt">[] = [
  {
    wrapperClassName: "perspective-[4000px]",
    className:
      "absolute inset-0 border-4 border-neutral-200 mask-b-from-neutral-100 mask-b-from-50% mask-r-from-20% rounded-lg shadow-2xl",
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 40 },
    transition: { duration: 0.5, delay: 0.5, ease: "easeInOut" },
  },
  {
    wrapperClassName:
      "perspective-[4000px] -translate-y-20 translate-x-12 md:translate-x-10 md:-translate-y-20 lg:-translate-y-40",
    className:
      "absolute inset-0 border-4 mask-r-from-50% border-neutral-200 rounded-lg shadow-2xl",
    initial: { opacity: 0, y: -40 },
    whileInView: { opacity: 1, y: 40 },
    transition: { duration: 0.5, delay: 0.8, ease: "easeInOut" },
  },
];

const rotation = "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)";

const LandingImges = ({
  images = defaultImages,
  animation,
  containerClassName,
  className,
  sectionClassName,
  imageClassName,
}: LandingImagesProps) => {
  return (
    <Container className={containerClassName}>
      <article
        className={cn(
          "relative mx-auto w-full aspect-[16/10] lg:p-20 perspective-distant p-10 pt-10 scale-[0.82] md:scale-[0.9] lg:scale-[0.92] xl:scale-[0.95]",
          className,
        )}
      >
        <section className={cn("mt-[-80]", sectionClassName)}>
          {images.map((image, index) => {
            const defaults = defaultImageStyles[index] ?? defaultImageStyles[0];

            return (
              <motion.div
                key={`${image.src}-${index}`}
                initial={
                  image.initial ?? animation?.initial ?? defaults.initial
                }
                whileInView={
                  image.whileInView ??
                  animation?.whileInView ??
                  defaults.whileInView
                }
                transition={
                  image.transition ??
                  animation?.transition ??
                  defaults.transition
                }
                className={cn(
                  defaults.wrapperClassName,
                  image.wrapperClassName,
                )}
              >
                <Image
                  loading="eager"
                  src={image.src}
                  alt={image.alt ?? ""}
                  width={image.width ?? 1080}
                  height={image.height ?? 1080}
                  className={cn(
                    defaults.className,
                    image.className,
                    imageClassName,
                  )}
                  style={{ transform: rotation, ...image.imageStyle }}
                />
              </motion.div>
            );
          })}
        </section>
      </article>
    </Container>
  );
};

export default LandingImges;
