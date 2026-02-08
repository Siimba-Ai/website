import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-semibold transition-all duration-300 spring-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-sage text-charcoal hover:bg-sage/90 hover:shadow-2xl hover:shadow-sage/40 hover:-translate-y-0.5 active:translate-y-0",
        destructive:
          "bg-pink/30 backdrop-blur-md text-[#C85A6E] hover:bg-pink/40 border border-pink/30",
        outline:
          "border-2 border-charcoal/20 glass-card hover:glass-elevated hover:border-sage/40",
        secondary:
          "bg-beige text-charcoal hover:bg-beige/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-sage underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-[48px] px-10 py-4",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
