import Link from "next/link";

type FlipButtonLinkProps = {
  href: string;
  frontText: string;
  backText?: string;
  className?: string;
};

export default function FlipButtonLink({
  href,
  frontText,
  backText,
  className,
}: FlipButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`brand-button ${className ?? ""}`.trim()}
      aria-label={backText ?? frontText}
    >
      {frontText}
    </Link>
  );
}
