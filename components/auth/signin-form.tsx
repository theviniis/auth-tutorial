'use client'

import { HtmlHTMLAttributes, forwardRef } from 'react'
import { CardWrapper } from './card-wrapper'

export type SigninFormProps = {} & HtmlHTMLAttributes<HTMLElement>

export const SigninForm = forwardRef<HTMLButtonElement, SigninFormProps>(
  ({ children, onClick, ...props }, ref) => {
    return (
      <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/signup"
        showSocial
      >
        form
      </CardWrapper>
    )
  }
)
