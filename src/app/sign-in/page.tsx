import { SignInButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="flex w-full items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <SignInButton forceRedirectUrl={"/calculator"} />
                    </div>
                </div>
            </section>
        </>
    );
}
