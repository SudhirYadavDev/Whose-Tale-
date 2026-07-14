import Link from "next/link";

type HubButtonProps = {
  name: string;
  href: string;
  size: string;
};

export default function HubButton({ name, href, size }: HubButtonProps) {
  return (
    <Link
      href={href}
      className={`${size} rounded-full border-2 border-zinc-700 bg-zinc-900 flex items-center justify-center uppercase tracking-widest transition-all duration-300 hover:scale-105 hover:border-zinc-500 hover:bg-zinc-800`}
    >
      {name}
    </Link>
  );
}
