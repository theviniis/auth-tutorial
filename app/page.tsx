import { NavButton } from '@/components/auth/nav-button'
import { H1, P } from '@/components/typography'

export default function Home() {
  return (
    <main className="grid h-full place-content-center">
      <div className="space-y-6 text-center">
        <H1>Auth</H1>
        <P>A simple authentication service</P>
        <div className="block">
          <NavButton href="/auth/signin" variant="secondary" size="lg">
            Sign in
          </NavButton>
        </div>
      </div>
    </main>
  )
}
