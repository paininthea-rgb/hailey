"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { workItems } from "@/lib/work-items";
import HomeLogoLink from "@/components/shared/HomeLogoLink";
import FlipButtonLink from "@/components/shared/FlipButtonLink";

export default function HomePageContent() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const skills = [
    { label: "Assitant Brand Manager", tone: "accent" },
    { label: "Content Creator", tone: "accent" },
    { label: "Product Review", tone: "dark" },
  ];

  const activeProject = workItems[activeProjectIndex];

  function showPreviousProject() {
    setActiveProjectIndex((current) =>
      current === 0 ? workItems.length - 1 : current - 1,
    );
  }

  function showNextProject() {
    setActiveProjectIndex((current) =>
      current === workItems.length - 1 ? 0 : current + 1,
    );
  }

  return (
    <main className="min-h-screen bg-pink-50 text-zinc-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-12 pt-4 sm:px-8 sm:pb-14 sm:pt-6 md:px-10 md:pb-16 lg:px-14">
        <div className="mb-6 flex justify-center sm:mb-8">
          <HomeLogoLink />
        </div>

        <section className="grid gap-8 md:gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="order-2 space-y-5 text-center sm:space-y-6 md:order-1 md:text-left">
            <h1 className="mx-auto max-w-md text-4xl font-light leading-tight sm:text-5xl md:mx-0 md:text-6xl">
              My name
              <br />
              is <span className="font-semibold">Hailey</span>
            </h1>

            <p className="mx-auto max-w-sm text-sm text-zinc-600 md:mx-0 md:text-base">
              I’m Hailey, your skincare bestie. I skip the filters and the fluff to bring you honest,
              everyday reviews on the products that actually deliver the glow.
            </p>

            <Link
              href="/contact"
              className="glow-animation inline-flex rounded-full border border-pink-500 bg-white px-6 py-2 text-sm font-medium text-pink-500 transition hover:scale-[1.2] hover:bg-pink-50"
            >
              Hire Me
            </Link>

            <div className="mx-auto flex max-w-sm flex-wrap justify-center gap-2.5 pt-2 sm:gap-3 sm:pt-3 md:mx-0 md:justify-start">
              {skills.map((skill) => {
                const chipClass =
                  skill.tone === "accent"
                    ? "bg-pink-300 text-zinc-900"
                    : skill.tone === "dark"
                      ? "bg-zinc-900 text-zinc-100"
                      : "bg-white text-zinc-900";

                return (
                  <span
                    key={skill.label}
                    className={`rounded-md px-3 py-1.5 text-sm font-medium leading-none sm:px-4 sm:py-2 sm:text-base md:text-lg ${chipClass}`}
                  >
                    {skill.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative order-1 mx-auto h-[300px] w-full max-w-[300px] sm:h-[380px] sm:max-w-[380px] md:h-[420px] md:max-w-[420px] lg:order-2">
            <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-tl-[56px] rounded-br-[56px] bg-pink-400 sm:h-[280px] sm:w-[280px] sm:rounded-tl-[64px] sm:rounded-br-[64px] md:h-[300px] md:w-[300px] md:rounded-tl-[72px] md:rounded-br-[72px]" />

            <div className="absolute bottom-0 right-0 h-[250px] w-[250px] overflow-hidden rounded-full bg-white sm:h-[320px] sm:w-[320px] md:h-[360px] md:w-[360px]">
              <Image src="/hailey.png" alt="Hailey" fill className="object-cover" priority />
            </div>

            <div className="absolute left-0 top-[170px] rounded-2xl bg-zinc-900 px-4 py-2.5 text-zinc-100 shadow-lg sm:top-[205px] sm:px-5 sm:py-3 md:top-[220px]">
              <p className="text-3xl font-medium leading-none sm:text-4xl">5+</p>
              <p className="text-xs text-pink-100">years experience</p>
            </div>
          </div>
        </section>

        <section className="group mt-14 rounded-3xl border border-pink-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:mt-16 sm:p-7 md:mt-20 md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="min-w-0 lg:flex-1">
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">About</p>
              <h2 className="mt-2 text-3xl font-light sm:text-4xl">Who is Hailey?</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 sm:text-base">
                Hailey is a beauty and skincare content creator focused on practical product reviews,
                simple routines, and real results. Her content is built to help audiences make better
                decisions with confidence.
              </p>

              <div className="max-h-0 overflow-hidden border-pink-200 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-40 group-hover:border-t group-hover:pt-4 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:max-h-40 group-focus-within:border-t group-focus-within:pt-4 group-focus-within:opacity-100">
                <p className="text-sm leading-6 text-zinc-600">
                  She focuses on clear, relatable skincare education and honest product testing,
                  helping audiences choose routines that fit real daily life.
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Click the box to read more about my background and approach to content creation.
                </p>
              </div>
            </div>

            <FlipButtonLink
              href="/about"
              frontText="About Me"
              className="self-start whitespace-nowrap lg:self-end"
            />
          </div>
        </section>

        <section className="mt-14 sm:mt-16 md:mt-20">
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <h2 className="text-3xl font-light sm:text-4xl md:text-5xl">Latest Projects</h2>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousProject}
                  aria-label="Previous project"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-xl text-zinc-700 transition hover:bg-pink-100"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNextProject}
                  aria-label="Next project"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 text-xl text-zinc-700 transition hover:bg-pink-100"
                >
                  →
                </button>
              </div>
            </div>

            <FlipButtonLink
              href="/work"
              frontText="All projects"
              className="shrink-0 whitespace-nowrap self-start md:self-end lg:-ml-[2.8rem]"
            />
          </div>

          <article className="overflow-hidden rounded-3xl border border-pink-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6">
            <Link href={`/work/${activeProject.id}`} className="group block">
              <div className="relative h-64 overflow-hidden rounded-2xl bg-pink-100 sm:h-72 md:h-80">
                {activeProject.imageSrc ? (
                  <Image
                    src={activeProject.imageSrc}
                    alt={activeProject.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className={`h-full w-full ${activeProject.placeholderTone}`} />
                )}
                <span className="absolute bottom-4 right-4 rounded-xl bg-zinc-900 px-4 py-3 text-3xl leading-none text-zinc-100 sm:text-5xl">
                  {activeProject.id}
                </span>
              </div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="text-xl font-medium text-zinc-900 group-hover:underline sm:text-2xl">
                  {activeProject.title}
                </p>
                <span className="text-sm text-zinc-500">
                  {activeProjectIndex + 1}/{workItems.length}
                </span>
              </div>

              <div className="max-h-0 overflow-hidden border-pink-200 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-40 group-hover:border-t group-hover:pt-4 group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:max-h-40 group-focus-visible:border-t group-focus-visible:pt-4 group-focus-visible:opacity-100">
                <p className="text-sm leading-6 text-zinc-600">{activeProject.summary}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
                  Hover box drops down for more details
                </p>
              </div>
            </Link>
          </article>
        </section>
      </div>
    </main>
  );
}
