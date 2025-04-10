'use-client'

import { Button } from "@/components/ui/button"
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Tax Calculator</h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
          Calculate your income tax easily with our simple tax calculator.
        </p>
        <form
          action={async () => {
            "use server";

            const session = await auth();

            if (!session.userId) {
              return redirect("/sign-in");
            }

            return redirect("/calculator");
          }}
        >
          <Button size="lg" className="h-12 px-8" type="submit">
            Get Started
          </Button>
        </form>
      </div>
    </div>
  )
}
