import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { workItems } from "@/lib/work-items";

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
    <main className="site-shell px-4 py-8 text-zinc-100 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14">
      <div className="site-card mx-auto w-full max-w-4xl rounded-2xl p-5 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-semibold sm:text-4xl">{item.title}</h1>
          <Link href="/work" className="ghost-button">
            Back to Work
          </Link>
        </div>

        <div className={`relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-zinc-800 ${item.placeholderTone} sm:h-72`}>
          {item.imageSrc ? (
            <Image
              src={item.imageSrc}
              alt={`Cover visual for ${item.title}; this can be replaced with a final campaign photo later`}
              fill
              className="object-cover"
            />
          ) : (
            <p
              className="photo-placeholder h-full w-full px-3 text-sm font-medium"
              role="img"
              aria-label={`Placeholder image for ${item.title}; final project photo will be added later`}
            >
              Placeholder image
            </p>
          )}
          <span className="absolute bottom-4 right-4 rounded-xl bg-[#09090b] px-4 py-3 text-3xl leading-none text-zinc-100">
            {item.id}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-400">Role</p>
            <p className="mt-1 text-sm font-medium text-zinc-100">{item.role}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-400">Channel</p>
            <p className="mt-1 text-sm font-medium text-zinc-100">{item.channel}</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs uppercase tracking-wide text-zinc-400">Year</p>
            <p className="mt-1 text-sm font-medium text-zinc-100">{item.year}</p>
          </div>
        </div>

        <p className="mt-6 text-sm leading-7 text-zinc-300">{item.summary}</p>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-400">More details</p>
          <ul className="space-y-2 text-sm text-zinc-300">
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
            className="brand-button"
          >
            Visit Project
          </a>
          <Link href="/work" className="ghost-button">
            All Work
          </Link>
        </div>
      </div>
    </main>
  );
}
