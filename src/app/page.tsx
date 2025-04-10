import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Tax Calculator</h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
          Calculate your income tax easily with our simple tax calculator.
        </p>
        <Link href="/calculator">
          <Button size="lg" className="mt-4">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
