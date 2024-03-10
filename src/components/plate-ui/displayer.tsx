import React from "react";
import { cn } from "@udecode/cn";
import { PlateContent } from "@udecode/plate-common";
import { cva } from "class-variance-authority";

import type { PlateContentProps } from "@udecode/plate-common";
import type { VariantProps } from "class-variance-authority";
import styled from "styled-components";

const PlateContentStyledDisplayer = styled(PlateContent)`
  height: ${(props) => (props.isExpanded ? "auto" : "300px")};
  width: 100%; // This line makes the width of PlateContentStyledDisplayer flexible
  max-width: 100%; // This line ensures that the width of PlateContentStyledDisplayer never exceeds its parent's width
  padding: 10px;
  background-color: #f8f9fa;
  border: none;
  overflow: hidden;
  @media (max-width: 768px) {
    // this will apply to screens that are 768px or less
    padding: 30px 20px;
  }
`;

const displayerVariants = cva(
  cn(
    "relative overflow-x-auto whitespace-pre-wrap break-words",
    "min-h-[80px] w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none",
    "[&_[data-slate-placeholder]]:text-muted-foreground [&_[data-slate-placeholder]]:!opacity-100",
    "[&_[data-slate-placeholder]]:top-[auto_!important]",
    "[&_strong]:font-bold",
  ),
  {
    variants: {
      variant: {
        outline: "border border-input",
        ghost: "",
      },
      focused: {
        true: "ring-2 ring-ring ring-offset-2",
      },
      disabled: {
        true: "cursor-not-allowed opacity-50",
      },
      focusRing: {
        true: "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        false: "",
      },
      size: {
        sm: "text-sm",
        md: "text-base",
      },
    },
    defaultVariants: {
      variant: "outline",
      focusRing: true,
      size: "sm",
    },
  },
);

export type DisplayerProps = PlateContentProps &
  VariantProps<typeof displayerVariants>;

const Displayer = React.forwardRef<
  HTMLDivElement,
  DisplayerProps & { isExpanded?: boolean }
>(
  (
    {
      className,
      disabled,
      focused,
      focusRing,
      size,
      variant,
      isExpanded,
      ...props
    },
    ref,
  ) => {
    return (
      <div ref={ref} className="relative w-full">
        <PlateContentStyledDisplayer
          className={cn(
            displayerVariants({
              disabled,
              focused,
              focusRing,
              size,
              variant,
            }),
            className,
          )}
          disableDefaultStyles
          readOnly={true}
          aria-disabled={disabled}
          isExpanded={isExpanded}
          {...props}
        />
      </div>
    );
  },
);
Displayer.displayName = "Displayer";

export { Displayer };
