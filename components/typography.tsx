import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

export const H1 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h1
    className={cn(
      'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      className
    )}
    ref={ref}
    {...props}
  />
))

export const H2 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    className={cn(
      'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      className
    )}
    ref={ref}
    {...props}
  />
))

export const H3 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    className={cn(
      'scroll-m-20 text-2xl font-semibold tracking-tight',
      className
    )}
    ref={ref}
    {...props}
  />
))

export const H4 = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    className={cn(
      'scroll-m-20 text-xl font-semibold tracking-tight',
      className
    )}
    ref={ref}
    {...props}
  />
))

export const P = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
    ref={ref}
    {...props}
  />
))
