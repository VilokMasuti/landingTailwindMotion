"use client";
import { Button } from "@/app/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";
import Container from "../Continer";
import Logo, { LogoSvg } from "../Logo";

const navlinks = [
  { label: "Features", href: "/" },
  { label: "Product", href: "/" },
  { label: "FAQs", href: "/" },
  { label: "Pricing", href: "/" },
];

const Nav = () => {
  const [playOpen] = useSound("/sound/swish.mp3", {
    format: ["wav"],
    volume: 0.25,
    playbackRate: 1.2,
  });

  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className=" px-4 py-5 relative shadow-input ">
      <Container className=" ">
        <header className="  flex  items-center justify-between ">
          <Logo />
          <div className="gap-10 md:flex hidden ml-[-3rem]">
            {navlinks.map((link) => (
              <Link
                className="  text-sm  text-neutral-500  font-medium cursor-pointer font-display"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className=" md:flex hidden gap-5">
            <Link
              href={"/"}
              className="   cursor-pointer  text-[1rem] text-neutral-500 font-medium  pt-1.5

                font-display "
            >
              Login
            </Link>
            <Button className="cursor-pointer font-display">Sign-Up</Button>
          </div>
          <motion.button
            onPointerDown={() => playOpen()}
            whileTap={{
              scale: 0.9,
            }}
            aria-label="Open Navigetion menu"
            aria-expanded={open}
            className=" md:hidden"
            onClick={() => setOpen((pev) => !pev)}
          >
            <Menu className=" cursor-pointer" />
          </motion.button>
        </header>
      </Container>
      {/* phone */}
      {open && (
        <section aria-hidden="true" className=" md:hidden">
          <div
            onPointerDown={() => playOpen()}
            aria-hidden="true"
            className=" fixed inset-0 z-40 bg-black/20 backdrop-blur-md"
            onClick={() => setOpen(false)}
          ></div>
          <motion.div
            initial={{
              x: "-5%",
            }}
            animate={{
              x: 0,
            }}
            exit={{ x: "-5%" }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
              mass: 2,
            }}
            className="  left-0 fixed  inset-y-0 z-50 shadow-input w-64 bg-white  gap-2.5  flex flex-col   p-6"
          >
            <div
              className=" flex justify-between
            "
            >
              <LogoSvg />
              <motion.button
                whileHover={{ scale: 0.9, rotate: -90 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="p-1 text-neutral-500 hover:text-neutral-900 cursor-pointer"
                onPointerDown={() => playOpen()}
              >
                <X className="size-4" />
              </motion.button>
            </div>

            <div
              aria-hidden="true"
              className="h-px w-full  shrink-0 bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700"
            />
            <div className=" flex mt-10 gap-10 flex-col">
              {navlinks.map((link) => (
                <Link href={link.href} key={link.label}>
                  <motion.span
                    whileHover={{
                      y: 4,
                    }}
                    whileTap={{ scale: 1, x: 1 }}
                    className="hover:text-neutral-900 ease-in-out  text-sm  inline-block text-neutral-500  font-medium cursor-pointer font-display"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        </section>
      )}
    </nav>
  );
};

export default Nav;
