import { HtmlHTMLAttributes } from 'react'

export default function AuthLayout({
  children,
}: HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className="grid h-full place-content-center">{children}</div>
}
