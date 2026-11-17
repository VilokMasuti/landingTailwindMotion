import { Send } from "lucide-react";
import Link from "next/link";
import { IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { Instagram, Orchestration } from "./icons";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const productLinks = [
  "Agent Simulator",
  "AI Workflows",
  "Agent Builder",
  "Analytics Dashboard",
  "API Integration",
  "Enterprise Solutions",
];

const companyLinks = ["About Us", "Careers", "Press", "Contact", "Blog"];

const Footer = () => {
  return (
    <footer className="relative isolate mt-16 overflow-hidden border-t border-neutral-200 bg-background text-foreground dark:border-neutral-800">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%] overflow-hidden"
      >
        <div
          className="absolute inset-x-[-10%] bottom-[-40%] h-[145%] origin-bottom opacity-50 [transform:perspective(900px)_rotateX(58deg)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(23,23,23,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.07) 1px, transparent 1px)",
            backgroundSize: "40px 34px",
            maskImage: "linear-gradient(to top, black 0%, transparent 82%)",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.7fr_1.15fr] lg:gap-12">
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-flex items-center gap-2">
              <Orchestration className="size-4 text-foreground" />
              <span className="text-sm font-medium">Agenforce</span>
            </Link>
            <p className="mt-4 text-sm text-neutral-500">
              Safe, observable, outcome-driven AI
            </p>
            <Button className="mt-4 shadow-brand px-5">
              Start a 30-day trial
            </Button>
          </div>

          <FooterLinkColumn title="Product" links={productLinks} />
          <FooterLinkColumn title="Company" links={companyLinks} />

          <div>
            <h2 className="text-sm font-semibold text-neutral-500">
              Newsletter
            </h2>
            <div
              role="group"
              aria-label="Newsletter signup"
              className="mt-4 flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 p-1 dark:border-neutral-700 dark:bg-neutral-900"
            >
              <label className="sr-only" htmlFor="footer-email">
                Your email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-neutral-400"
              />
              <Button
                type="button"
                size="icon"
                aria-label="Subscribe to newsletter"
                className="size-9 rounded-md bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                <Send aria-hidden="true" />
              </Button>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-5 text-neutral-500">
              Get the latest product news and behind-the-scenes updates.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-neutral-200/80 pt-6 text-xs text-neutral-500 dark:border-neutral-800 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Agenforce AI. All rights reserved.</p>

          <div className="flex flex-col gap-5 sm:items-end">
            <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Link
                href="/"
                aria-label="Twitter"
                className="transition-colors hover:text-foreground"
              >
                <IconBrandTwitter className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/"
                aria-label="Instagram"
                className="transition-colors hover:text-foreground"
              >
                <Instagram className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <IconBrandLinkedin className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div>
    <h2 className="text-sm font-semibold text-neutral-500">{title}</h2>
    <ul className="mt-4 flex flex-col gap-3">
      {links.map((link) => (
        <li key={link}>
          <Link
            href="/"
            className="text-sm text-neutral-600 transition-colors hover:text-foreground dark:text-neutral-400"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
