'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issues', href: '/issues' },
];

export default function NavBar() {
  const currentPath = usePathname();

  return (
    <nav className="mb-5 flex h-14 items-center gap-6 border-b px-5">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex gap-6">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={classNames(
              'text-zinc-500 transition-colors hover:text-zinc-800',
              link.href === currentPath && 'text-zinc-900',
            )}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
