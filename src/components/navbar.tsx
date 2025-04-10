import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 justify-between items-center pl-5 pr-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">TaxCalc</span>
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
