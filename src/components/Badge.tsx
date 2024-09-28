import React, { PropsWithChildren } from "react";

type BadgeVariant = "primary" | "secondary" | "tertiary";
type BadgeSize = "md" | "sm";

interface IBadgeProps extends PropsWithChildren {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const Badge: React.FC<IBadgeProps> = ({
  size = "md",
  variant = "primary",
  children,
}) => {
  const variantStyle: Record<BadgeVariant, string> = {
    primary: "bg-primary-50 text-primary-80",
    secondary: "bg-primary-70 text-primary-50",
    tertiary: "bg-primary-80 text-primary-60",
  };

  const sizeStyle: Record<BadgeSize, string> = {
    md: "text-xs lg:text-base",
    sm: "text-[8px] lg:text-xs",
  };

  return (
    <div className={`px-8 py-2 rounded-full  w-fit ${variantStyle[variant]}`}>
      <p className={`font-normal text-center lg:text-base ${sizeStyle[size]}`}>
        {children}
      </p>
    </div>
  );
};
