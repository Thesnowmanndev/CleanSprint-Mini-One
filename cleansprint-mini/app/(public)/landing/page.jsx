import Link from "next/link";
export default function LandingPage() {
  return (
    <main className="min-h-dvh grid place-items-center p-10 text-center">
      <div>
        <h1 className="text-4xl font-bold mb-3">CleanSprint</h1>
        <p className="text-muted-foreground mb-6">
          Lightweight cleaning checklists that save your progress.
        </p>
        {/* When auth exists, this becomes Sign in → then redirect to /(app) */}
        <Link className="underline" href="/">
          (Go to app)
        </Link>
      </div>
    </main>
  );
}
