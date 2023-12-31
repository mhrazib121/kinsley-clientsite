"use client";

import { IButton } from "@/interfaces";

export const Button = ({
  children,
  variant,
  text = "14",
  width = "auto",
  size = "md",
  rounded,
  className,
  onClick,
}: IButton) => {
  const primary = "bg-primary text-white";
  const secondary = "bg-white text-primary";

  return (
    <button
      onClick={onClick}
      className={`${
        (variant === "secondary" && secondary) ||
        (variant === "primary" && primary)
      } 
        ${
          (text === "14" && "text-xs sm:text-sm") ||
          (text === "16" && "text-sm md:text-base") ||
          (text === "18" &&
            "text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px]")
        } 
        ${rounded ? "rounded-full" : "rounded-[4px]"} 
        ${
          (size === "sm" && "px-[7px] md:px-[15px] py-[6px]") ||
          (size === "md" && "px-[16px] md:px-[20px] lg:px-[49px] py-[9px]") ||
          (size === "lg" &&
            `${
              width === "full" ? "w-full px-2" : "px-9 md:px-10"
            } py-1.5 sm:py-2 md:py-2.5`)
        } 
        ${width === "full" && "w-full"} border font-medium border-primary
        
        ${className}`}
    >
      {children}
    </button>
  );
};
