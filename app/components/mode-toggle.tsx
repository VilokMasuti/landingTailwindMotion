"use client";
import { useTheme } from "next-themes";
import useSound from "use-sound";

export const ModeToggle = () => {
  const [ThemeSound] = useSound("/sound/theme.mp3", {
    volume: 0.5,
    playbackRate: 1.5,
  });
  const { theme, setTheme } = useTheme();

  const switchTheme = (): void => {
    switch (theme) {
      case "light": {
        setTheme("dark");
        return;
      }
      case "dark": {
        setTheme("light");
        return;
      }
      case "system": {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setTheme(systemTheme === "light" ? "dark" : "light");
        return;
      }
      default: {
        setTheme("light");
      }
    }
  };
  return (
    <button
      onPointerDown={(): void => ThemeSound()}
      onClick={switchTheme}
      className=" size-10 cursor-pointer  relative   r flex items-center justify-center"
    >
      <SunIcon className="  size-5 rotate-0 absolute scale-100 transition-all duration-700 dark:scale-0 dark:rotate-90 " />
      <MoonIcon className=" size-5 absolute  rotate-90 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100" />
    </button>
  );
};

const SunIcon = (
  props: React.SVGProps<SVGSVGElement> & { className?: string },
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="5" />
    <path d="M12 1v2" />
    <path d="M12 21v2" />
    <path d="M4.22 4.22l1.42 1.42" />
    <path d="M18.36 18.36l1.42 1.42" />
    <path d="M1 12h2" />
    <path d="M21 12h2" />
    <path d="M4.22 19.78l1.42-1.42" />
    <path d="M18.36 5.64l1.42-1.42" />
  </svg>
);

const MoonIcon = (
  props: React.SVGProps<SVGSVGElement> & { className?: string },
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);
