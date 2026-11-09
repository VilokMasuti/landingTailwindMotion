import { ReactNode } from "react";

export interface ChildClassPros {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}
