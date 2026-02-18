import Link from "next/link";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <path
          d="M14 3v9.5a3.5 3.5 0 1 1-2.6-3.38"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3c.7 2 2.2 3.5 4.2 4.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-pink-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:px-8 md:px-10 lg:px-14">
        <div className="grid gap-8 sm:grid-cols-2">
          <section className="text-center sm:text-left">
            <h2 className="text-base font-semibold text-zinc-900">Social Media</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 transition hover:text-pink-600 sm:justify-start"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="text-center sm:text-left">
            <h2 className="text-base font-semibold text-zinc-900">Contact</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                Email: <a href="mailto:hello@hailey.com" className="transition hover:text-pink-600">hello@hailey.com</a>
              </li>
              <li>
                Phone: <a href="tel:+15551234567" className="transition hover:text-pink-600">+1 (555) 123-4567</a>
              </li>
              <li>
                <Link href="/contact" className="font-medium text-zinc-900 transition hover:text-pink-600">
                  Go to contact page
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <p className="border-t border-pink-100 pt-4 text-center text-xs text-zinc-500 sm:text-left">© {new Date().getFullYear()} Hailey. All rights reserved.</p>
      </div>
    </footer>
  );
}