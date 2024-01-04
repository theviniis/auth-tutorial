'use client'

import { HtmlHTMLAttributes, forwardRef } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Button } from '../ui/button'

export type SocialProps = {} & HtmlHTMLAttributes<HTMLDivElement>

export const Social = forwardRef<HTMLDivElement, SocialProps>(
  ({ children, onClick, ...props }, ref) => {
    return (
      <div ref={ref} className="flex w-full items-center gap-x-2" {...props}>
        <Button size="lg" variant="outline" className="w-full">
          <FcGoogle className="aspect-square w-5" />
        </Button>
        <Button size="lg" variant="outline" className="w-full">
          <FaGithub className="aspect-square w-5" />
        </Button>
      </div>
    )
  }
)
