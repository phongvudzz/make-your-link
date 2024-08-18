import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100dvh] justify-center items-center">
      <div className="text-center space-y-4 flex items-center flex-col">
        <h1 className="text-4xl font-bold ">
          Welcome to{" "}
          <span className="text-5xl italic font-mono tracking-tighter">
            MakeYourLink
          </span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Simplify your online presence with MakeYourLink! Create a personalized
          page to showcase all your social media profiles in one place.
        </p>
        <Link
          href="/create-link"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
