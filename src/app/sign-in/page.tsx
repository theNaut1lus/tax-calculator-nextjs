'use client'

import { SignIn, useUser } from '@clerk/nextjs'

export default function Home() {
  const { user } = useUser()

  if (!user) return (
    <div className="flex flex-1 flex-col items-center justify-center bg-background">
      <div className="container flex flex-col items-center justify-center gap-6 px-4 py-16 text-center md:py-24">
        <SignIn routing='hash' />
      </div>
    </div>
  )

  return <div>Welcome!</div>
}