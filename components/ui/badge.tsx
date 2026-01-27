import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[14px] border-2 px-3.5 py-2 text-[13px] font-semibold transition-all duration-300 spring-transition backdrop-blur-xl",
  {
    variants: {
      variant: {
        default:
          "border-sage/40 bg-gradient-to-r from-sage/25 to-sage/15 text-charcoal shadow-lg shadow-sage/20",
        secondary:
          "border-beige/50 bg-gradient-to-r from-beige/40 to-beige/20 text-charcoal shadow-lg",
        destructive:
          "border-pink/40 bg-gradient-to-r from-pink/25 to-pink/15 text-charcoal shadow-lg shadow-pink/20",
        outline: "text-foreground border-white/50 bg-white/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
