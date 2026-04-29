import Link from "next/link";

export default function HomeLogoLink() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-white/5 text-sm font-semibold text-zinc-50 transition duration-300 hover:-translate-y-0.5 hover:border-rose-400 hover:bg-rose-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
    >
      <span className="transition-transform duration-300 group-hover:rotate-6">H</span>
    </Link>
  );
}
