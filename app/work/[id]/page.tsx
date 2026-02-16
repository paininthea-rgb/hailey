import Link from "next/link";
import { notFound } from "next/navigation";
import { workItems } from "@/lib/work-items";
import HomeLogoLink from "@/components/shared/HomeLogoLink";

type WorkDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { id } = await params;
  const item = workItems.find((work) => work.id === id);

  if (!item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-pink-50 px-4 py-8 text-zinc-900 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14">
      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-pink-200 bg-white p-5 shadow-sm sm:p-8">
        <div className="mb-5 flex justify-center">
          <HomeLogoLink />
        </div>

        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-light sm:text-4xl">{item.title}</h1>
          <Link
            href="/work"
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-pink-100"
          >
            Back to Work
          </Link>
        </div>

        <div className={`relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-2xl ${item.placeholderTone} sm:h-72`}>
          <p className="text-sm font-medium text-zinc-500">Placeholder image</p>
          <span className="absolute bottom-4 right-4 rounded-xl bg-zinc-900 px-4 py-3 text-3xl leading-none text-pink-100">
            {item.id}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-pink-200 bg-pink-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Role</p>
            <p className="mt-1 text-sm font-medium text-zinc-900">{item.role}</p>
          </div>
          <div className="rounded-xl border border-pink-200 bg-pink-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Channel</p>
            <p className="mt-1 text-sm font-medium text-zinc-900">{item.channel}</p>
          </div>
          <div className="rounded-xl border border-pink-200 bg-pink-50 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Year</p>
            <p className="mt-1 text-sm font-medium text-zinc-900">{item.year}</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-zinc-600">{item.summary}</p>

        <div className="mt-6 rounded-xl border border-pink-200 bg-white p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">More details</p>
          <ul className="space-y-2 text-sm text-zinc-600">
            {item.moreDetails.map((detail) => (
              <li key={detail}>• {detail}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600"
          >
            Visit Project
          </a>
          <Link
            href="/work"
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-pink-100"
          >
            All Work
          </Link>
        </div>
      </div>
    </main>
  );
}
