import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-orange/10 text-brand-orange",
        secondary: "border-transparent bg-brand-navy/10 text-brand-navy",
        outline: "text-foreground border-border",
        success: "border-transparent bg-brand-green/10 text-brand-green",
        purple: "border-transparent bg-pickering-purple/10 text-pickering-purple",
        teal: "border-transparent bg-brand-teal/10 text-brand-teal",
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
