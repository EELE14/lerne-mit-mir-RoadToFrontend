import type { ReactNode } from "react";

export default function NormalButton({
  text,
  icon,
  linkto,
}: {
  text: string;
  icon: ReactNode;
  linkto: string;
}) {
  return (
    <a
      href={linkto}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-white/10 transition-colors text-left border border-white/20"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}
