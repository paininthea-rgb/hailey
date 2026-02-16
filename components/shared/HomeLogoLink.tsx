import Link from "next/link";

export default function HomeLogoLink() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-900 text-sm font-semibold text-zinc-900 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-pink-500 hover:bg-pink-100 hover:text-pink-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
    >
      <span className="transition-transform duration-300 group-hover:rotate-6">H</span>
    </Link>
  );
}
