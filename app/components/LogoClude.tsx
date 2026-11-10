"use client";
import { easeOut, motion } from "motion/react";
import Image from "next/image";
const logos = [
  { title: "OpenAI", src: "/openai.png" },
  { title: "Hello Patient", src: "/hello-patient.png" },
  { title: "Granola", src: "/granola.png" },
  { title: "Character AI", src: "/characterai.png" },
  { title: "Oracle", src: "/oracle.png" },
  { title: "Portola", src: "/portola.png" },
];

const LogoClude = () => {
  return (
    <section
      className="  mx-auto items-center justify-center  flex flex-col my-42 sm:my-60 md:my-70
    "
    >
      <h2 className="bg-gradient-to-t  font-display  text-center max-w-xl  font-medium  text-lg from-taupe-50 to-zinc-900 bg-clip-text text-transparent">
        Trusted by modern operators across industries. From pilot to scale
        without chaos.
      </h2>
      <div className="mx-auto my-10 grid w-full max-w-3xl grid-cols-1 items-center justify-items-center gap-x-16 gap-y-12 px-6 sm:grid-cols-2 lg:grid-cols-3">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.title}
            initial={{ opacity: 0, y: -10, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 10, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: easeOut,
            }}
          >
            <Image
              src={logo.src}
              alt={logo.title}
              width={160}
              height={64}
              className="h-12 w-20 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LogoClude;
