import { HtmlHTMLAttributes } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { LinkButton } from '../ui/link-button'
import { Separator } from '../ui/separator'
import { Social } from './social'

export type CardWrapperProps = {
  headerLabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
} & HtmlHTMLAttributes<HTMLDivElement>

export const CardWrapper = ({
  headerLabel,
  children,
  showSocial,
  backButtonLabel,
  backButtonHref,
  ...props
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md" {...props}>
      <CardHeader>
        <CardTitle>Auth</CardTitle>
        <CardDescription>{headerLabel}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <div className="w-full space-y-4 text-center">
            <Separator />
            <Social />
            <LinkButton href="/auth/signup">Don't have an account?</LinkButton>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
