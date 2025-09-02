import type { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function NormalButton({
  text,
  icon,
  linkto,
  className,
}: {
  text: string;
  icon: ReactNode;
  linkto: string;
  className?: string;
}) {
  return (
    <a
      href={linkto}
      className={cn(
        `flex items-center gap-2 bg-white/10 text-black px-3 py-1.5 rounded-md hover:bg-white/50 transition-colors border-1 border-black`,
        className
      )}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
