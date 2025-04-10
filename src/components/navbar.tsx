import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 pl-5">
          <span className="text-xl font-bold">Tax Calc</span>
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <SignedOut>
            <SignInButton forceRedirectUrl={"/calculator"} />
            <SignUpButton forceRedirectUrl={"/calculator"} />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}
