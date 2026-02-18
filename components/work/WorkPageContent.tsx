import Link from "next/link";
import Image from "next/image";
import { workItems } from "@/lib/work-items";
import HomeLogoLink from "@/components/shared/HomeLogoLink";

export default function WorkPageContent() {
  return (
    <main className="min-h-screen bg-pink-50 px-4 py-8 text-zinc-900 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-5 flex justify-center">
          <HomeLogoLink />
        </div>

        <div className="mb-8 flex items-center justify-between gap-4">
          <h1 className="text-3xl font-light sm:text-4xl md:text-5xl">Work Details</h1>
          <Link
            href="/"
            className="rounded-lg border border-zinc-800 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-pink-100"
          >
            Back Home
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-pink-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            >
              <div
                className={`relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-xl ${item.placeholderTone}`}
              >
                {item.imageSrc ? (
                  <Image src={item.imageSrc} alt={item.title} fill className="object-cover" />
                ) : (
                  <p className="text-sm font-medium text-zinc-500">Placeholder image</p>
                )}
                <span className="absolute bottom-3 right-3 rounded-lg bg-zinc-900 px-3 py-2 text-xl leading-none text-pink-100">
                  {item.id}
                </span>
              </div>

              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-500">Project {item.id}</p>
                  <h2 className="text-2xl font-medium text-zinc-900">{item.title}</h2>
                </div>
                <span className="rounded-lg bg-zinc-900 px-3 py-1.5 text-sm font-medium text-pink-100">
                  {item.channel}
                </span>
              </div>

              <p className="text-sm font-medium text-zinc-700">{item.role}</p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{item.summary}</p>

              <div className="max-h-0 overflow-hidden border-pink-200 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-40 group-hover:border-t group-hover:pt-4 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:max-h-40 group-focus-within:border-t group-focus-within:pt-4 group-focus-within:opacity-100">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  More details
                </p>
                <ul className="space-y-2 text-sm text-zinc-600">
                  {item.moreDetails.map((detail) => (
                    <li key={detail}>• {detail}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <p className="text-sm text-zinc-500">Year {item.year}</p>
                <Link
                  href={`/work/${item.id}`}
                  className="rounded-lg bg-pink-500 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
