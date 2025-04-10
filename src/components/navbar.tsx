import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Tax Calc</span>
        </Link>
        <nav className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/calculator">
            <Button variant="ghost" size="sm">
              Sign up
            </Button>
          </Link>
          <Link href="/calculator">
            <Button size="sm">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
