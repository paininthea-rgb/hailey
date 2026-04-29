"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { workItems } from "@/lib/work-items";
import FlipButtonLink from "@/components/shared/FlipButtonLink";

export default function HomePageContent() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const skills = [
    { label: "Assitant Brand Manager", tone: "accent" },
    { label: "Content Creator", tone: "accent" },
    { label: "Product Review", tone: "dark" },
    { label: "Voice talent", tone:"dark"}
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
    <main className="site-shell text-zinc-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-14 pt-6 sm:px-8 sm:pb-16 sm:pt-8 md:px-10 lg:px-14">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-300">Beauty Creator</p>
            <h1 className="mx-auto max-w-xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl lg:mx-0">
              Honest skincare content that performs.
            </h1>

            <p className="mx-auto max-w-xl text-sm text-zinc-300 md:text-base lg:mx-0">
              I’m Hailey, your skincare bestie. I skip the filters and fluff to bring honest,
              everyday reviews on the products that actually deliver the glow.
            </p>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link href="/contact" className="brand-button">Work With Me</Link>
              <Link href="/work" className="ghost-button">See Campaigns</Link>
            </div>

            <div className="mx-auto flex max-w-xl flex-wrap justify-center gap-2.5 pt-2 md:mx-0 md:justify-start">
              {skills.map((skill) => {
                const chipClass =
                  skill.tone === "accent" ? "bg-rose-500/25 text-rose-100" : "bg-white/10 text-zinc-200";

                return (
                  <span
                    key={skill.label}
                    className={`rounded-full border border-white/10 px-3 py-1.5 text-sm font-medium leading-none ${chipClass}`}
                  >
                    {skill.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="relative order-1 mx-auto h-[300px] w-full max-w-[300px] sm:h-[360px] sm:max-w-[360px] md:h-[400px] md:max-w-[400px] lg:order-2">
            <div className="absolute right-0 top-0 h-[220px] w-[220px] rounded-[2rem] bg-rose-500/35 sm:h-[260px] sm:w-[260px] md:h-[280px] md:w-[280px]" />

            <div className="photo-placeholder absolute bottom-0 right-0 h-[250px] w-[250px] overflow-hidden rounded-[2rem] sm:h-[310px] sm:w-[310px] md:h-[340px] md:w-[340px]">
              <Image
                src="/hailey.png"
                alt="Portrait of Hailey for the hero section; final profile photo can be updated later"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute left-0 top-[165px] rounded-2xl border border-white/15 bg-[#0d0d10] px-4 py-2.5 sm:top-[190px] sm:px-5 sm:py-3 md:top-[212px]">
              <p className="text-3xl font-semibold leading-none text-zinc-100 sm:text-4xl">5+</p>
              <p className="text-xs uppercase tracking-wide text-zinc-400">years experience</p>
            </div>
          </div>
        </section>

        <section className="site-card mt-14 rounded-3xl p-6 sm:mt-16 sm:p-7 md:mt-20 md:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="min-w-0 lg:flex-1">
              <p className="text-sm font-medium uppercase tracking-wide text-zinc-400">About</p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-100 sm:text-4xl">Welcome to my vanity! I&apos;m Hailey.</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                I believe beauty should be transparent and accessible. As a skincare KOC, I bridge the gap between brands and beauty lovers by providing high-trust, hands-on reviews. My mission is simple: helping you find your holy grail products through honest experiences.
              </p>

              <div className="max-h-0 overflow-hidden border-white/15 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-40 group-hover:border-t group-hover:pt-4 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:max-h-40 group-focus-within:border-t group-focus-within:pt-4 group-focus-within:opacity-100">
                <p className="text-sm leading-6 text-zinc-300">
                  She focuses on clear, relatable skincare education and honest product testing,
                  helping audiences choose routines that fit real daily life.
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
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
              <h2 className="text-3xl font-semibold text-zinc-100 sm:text-4xl md:text-5xl">Latest Projects</h2>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreviousProject}
                  aria-label="Previous project"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-zinc-200 transition hover:bg-white/10"
                >
                  <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="transition-transform duration-200 group-hover:-translate-x-0.5"
                  />
                </button>
                <button
                  type="button"
                  onClick={showNextProject}
                  aria-label="Next project"
                  className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-xl text-zinc-200 transition hover:bg-white/10"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </div>

              <FlipButtonLink
                href="/work"
                frontText="All projects"
                className="shrink-0 whitespace-nowrap"
              />
            </div>
          </div>

          <article className="site-card overflow-hidden rounded-3xl p-4 sm:p-6">
            <Link href={`/work/${activeProject.id}`} className="group block">
              <div className="relative h-64 overflow-hidden rounded-2xl bg-zinc-800 sm:h-72 md:h-80">
                {activeProject.imageSrc ? (
                  <Image
                    src={activeProject.imageSrc}
                    alt={`Cover visual for ${activeProject.title}; this can be replaced with a final campaign photo later`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={`photo-placeholder h-full w-full ${activeProject.placeholderTone}`}
                    role="img"
                    aria-label={`Placeholder image for ${activeProject.title}; final project photo will be added later`}
                  >
                    Photo placeholder
                  </div>
                )}
                <span className="absolute bottom-4 right-4 rounded-xl bg-[#09090b] px-4 py-3 text-3xl font-semibold leading-none text-zinc-100 sm:text-5xl">
                  {activeProject.id}
                </span>
              </div>
              <div className="mt-4 flex items-end justify-between gap-4">
                <p className="text-xl font-medium text-zinc-100 group-hover:underline sm:text-2xl">
                  {activeProject.title}
                </p>
                <span className="text-sm text-zinc-400">
                  {activeProjectIndex + 1}/{workItems.length}
                </span>
              </div>

              <div className="max-h-0 overflow-hidden border-white/15 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-40 group-hover:border-t group-hover:pt-4 group-hover:opacity-100 group-focus-visible:mt-4 group-focus-visible:max-h-40 group-focus-visible:border-t group-focus-visible:pt-4 group-focus-visible:opacity-100">
                <p className="text-sm leading-6 text-zinc-300">{activeProject.summary}</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-400">
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
