import Link from "next/link";
import HomeLogoLink from "@/components/shared/HomeLogoLink";

export default function AboutPageContent() {
  return (
    <main className="min-h-screen bg-pink-50 px-4 py-8 text-zinc-900 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14">
      <div className="mx-auto w-full max-w-5xl rounded-2xl border border-pink-200 bg-white p-5 shadow-sm sm:p-8 md:p-10">
        <div className="mb-6 flex justify-center">
          <HomeLogoLink />
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-light sm:text-4xl md:text-5xl">About Hailey</h1>
          <Link
            href="/"
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-pink-100"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-pink-200 bg-pink-50 p-5">
            <h2 className="text-xl font-medium">Profile</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Hailey is a skincare-focused creator and assistant brand manager with experience in
              educational content, social campaign planning, and product review storytelling.
            </p>
          </article>

          <article className="rounded-2xl border border-pink-200 bg-pink-50 p-5">
            <h2 className="text-xl font-medium">Approach</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Her work combines clear communication, audience-first messaging, and practical product
              testing to build trust and improve content performance across social channels.
            </p>
          </article>

          <article className="rounded-2xl border border-pink-200 bg-pink-50 p-5 md:col-span-2">
            <h2 className="text-xl font-medium">Core Strengths</h2>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-600 sm:grid-cols-2">
              <li>• Brand and campaign content planning</li>
              <li>• Product education and review scripting</li>
              <li>• Social storytelling and audience engagement</li>
              <li>• Performance-based content iteration</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-pink-500 px-6 py-2 text-sm font-medium text-white hover:bg-pink-600"
          >
            Contact Hailey
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-zinc-800 px-6 py-2 text-sm font-medium text-zinc-700 hover:bg-pink-100"
          >
            View Work
          </Link>
        </div>
      </div>
    </main>
  );
}
