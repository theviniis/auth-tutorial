import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground',
    'relative after:block after:content-[""] after:absolute after:bottom-0 after:h-[2px] after:bg-foreground after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"',
  ],
  {
    variants: {
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-8 px-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  }
)

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href: string
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a'
    return (
      <Comp
        className={cn(buttonVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LinkButton.displayName = 'LinkButton'

export { buttonVariants, LinkButton }
