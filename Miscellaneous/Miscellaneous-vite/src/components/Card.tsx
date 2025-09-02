import { type ReactNode } from "react";
import { cn } from "../lib/utils";
import ElectricBorder from "./ElectricBorder";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "solid" | "outline" | "electric";
  size?: "sm" | "md" | "lg" | "xl";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  hover?: boolean;
  onClick?: () => void;
  // Electric border specific props
  electricColor?: string;
  electricSpeed?: number;
  electricChaos?: number;
  electricThickness?: number;
}

const cardVariants = {
  default: "bg-white/80 backdrop-blur-sm border border-gray-200/50",
  glass: "bg-white/40 backdrop-blur-md border border-white/20",
  solid: "bg-white border border-gray-200",
  outline: "bg-transparent border-2 border-gray-300",
  electric: "bg-white/80 backdrop-blur-sm",
};

const cardSizes = {
  sm: "p-3",
  md: "p-4",
  lg: "p-6",
  xl: "p-8",
};

const cardShadows = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

const cardRounded = {
  none: "",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  size = "md",
  shadow = "md",
  rounded = "lg",
  hover = false,
  onClick,
  electricColor = "#7df9ff",
  electricSpeed = 1,
  electricChaos = 0.5,
  electricThickness = 2,
}: CardProps) {
  const baseClasses = "transition-all duration-200";
  const variantClasses = cardVariants[variant];
  const sizeClasses = cardSizes[size];
  const shadowClasses = cardShadows[shadow];
  const roundedClasses = cardRounded[rounded];
  const hoverClasses = hover
    ? "hover:shadow-lg hover:scale-[1.02] cursor-pointer"
    : "";
  const clickableClasses = onClick ? "cursor-pointer" : "";

  const roundedValue = {
    none: 0,
    sm: 2,
    md: 6,
    lg: 8,
    xl: 12,
    full: 9999,
  }[rounded];

  if (variant === "electric") {
    return (
      <ElectricBorder
        color={electricColor}
        speed={electricSpeed}
        chaos={electricChaos}
        thickness={electricThickness}
        style={{ borderRadius: roundedValue }}
        className={className}
      >
        <div
          className={cn(
            baseClasses,
            variantClasses,
            sizeClasses,
            shadowClasses,
            roundedClasses,
            hoverClasses,
            clickableClasses
          )}
          onClick={onClick}
        >
          {children}
        </div>
      </ElectricBorder>
    );
  }

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        shadowClasses,
        roundedClasses,
        hoverClasses,
        clickableClasses,
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// Utility components for structured content
export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mb-4 pb-2 border-b border-gray-200/50", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-lg font-semibold text-gray-900", className)}>
      {children}
    </h3>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("", className)}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mt-4 pt-2 border-t border-gray-200/50", className)}>
      {children}
    </div>
  );
}
