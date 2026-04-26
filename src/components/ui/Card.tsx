import React from 'react';
import { cn } from './Button';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass = true, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-2xl p-6 transition-all duration-300",
          glass ? "glass" : "bg-dark border border-white/5",
          "hover:border-primary/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);
Card.displayName = 'Card';
