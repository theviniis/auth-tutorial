'use client'

import { useRouter } from 'next/navigation'
import { MouseEvent, forwardRef } from 'react'
import { Button, ButtonProps } from '../ui/button'

export type LoginButtonProps = {
  href: string
  mode?: 'redirect' | 'modal'
  asChild?: boolean
} & ButtonProps

export const NavButton = forwardRef<HTMLButtonElement, LoginButtonProps>(
  ({ href, children, onClick, ...props }, ref) => {
    const router = useRouter()

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      router.push(href)
      onClick?.(event)
    }

    return (
      <Button ref={ref} onClick={handleClick} {...props}>
        {children}
      </Button>
    )
  }
)
