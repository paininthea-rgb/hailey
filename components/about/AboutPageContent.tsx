import Link from "next/link";

export default function AboutPageContent() {
  return (
    <main className="site-shell px-4 py-8 text-zinc-100 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14">
      <div className="site-card mx-auto w-full max-w-5xl rounded-2xl p-5 sm:p-8 md:p-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">About Hailey</h1>
          <Link
            href="/"
            className="ghost-button"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-medium">Profile</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              Authenticity is my aesthetic. I specialize in creating relatable, high-engagement skincare content that prioritizes truth over trends. From deep-dives into ingredients to daily "get ready with me" routines, I’m here to help you shop smarter.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-medium">Education</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              I hold a degree in Marketing from the University of Can Tho and University of Finance and Marketing. My education provided a strong foundation in consumer behavior and digital strategy, which I apply to my content creation process to connect with audiences effectively.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-medium">Background</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              With a background in digital marketing and a passion for skincare, I launched my content journey in 2020. Since then, I’ve built a loyal community of beauty enthusiasts who trust my honest reviews and practical advice.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-xl font-medium">Approach</h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">
              My work combines clear communication, audience-first messaging, and practical product
              testing to build trust and improve content performance across social channels.
            </p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2">
            <h2 className="text-xl font-medium">Core Strengths</h2>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-300 sm:grid-cols-2">
              <li>• Brand and campaign content planning</li>
              <li>• Product education and review scripting</li>
              <li>• Social storytelling and audience engagement</li>
              <li>• Performance-based content iteration</li>
            </ul>
          </article>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="brand-button">
            Contact Hailey
          </Link>
          <Link href="/work" className="ghost-button">
            View Work
          </Link>
        </div>
      </div>
    </main>
  );
}
